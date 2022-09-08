({core, prjForm, viewlocals}) <- ldc.register <[core prjForm viewlocals]>, _

{prj, brd, owner} = viewlocals or {}

Ctrl = (opt) ->
  _fields = [{key, cfg} for key, cfg of fields]
  formmgr = new form.manager!
  @ldcv = new ldcover root: '[ld-scope=prj-diff]'
  @view = {}

  @view.global = new ldview do
    global: true
    init-render: false
    root: '[ld-scope=prj]'
    handler: do
      "init-loader": ({node}) -> node.classList.toggle \d-none, true
      "content": ({node}) -> node.classList.toggle \d-none, false
  @view.form = new ldview do
    init-render: false
    root: "[ld-scope=prj]"
    handler: do
      "owner-avatar":
        handler: avatar: ({node}) ~>
            node.style.backgroundImage = "url(/dash/s/avatar/#{owner.key}.png)"
      "owner-name": ({node}) ~>
        node.innerText = owner.displayname
      "prj-link": ({node}) ~> node.setAttribute \href, "/prj/#{prj.slug}"
      "brd-name": ({node}) -> node.innerText = brd.name or 'n/a'


      field:
        list: -> _fields
        key: -> it.key
        view:
          init: "@": ({node, ctx}) ->
            cfg = ctx.cfg
            if !cfg.meta.title => cfg.meta.title = ctx.key
            node.classList.toggle \d-none, true
            type = cfg.type or '@makeform/input'
            core.manager.from {name: type, version: 'main'}, {root: node, data: cfg.meta}
              .then (o) ~>
                ctx <<< {itf: o.interface, bi: o.instance, root: node}
                formmgr.add {widget: ctx.itf, path: ctx.key}
              .catch (e) ->
                # TODO error handling
                return Promise.reject(e)
          handler: "@": ({node, ctx}) ->
            ctx.itf.render!
            node.classList.toggle \d-none, false
  @slug = opt.prj
  @prj = {}
  @

Ctrl.prototype = Object.create(Object.prototype) <<< do
  fetch: ->
    console.log "fetching project information ..."
    console.log "fetching board form ..."
    ld$.fetch "/dash/api/prj/#{@slug}", {method: \GET}, {type: \json}
      .then ~>
        @prj = it
        ld$.fetch "/dash/api/brd/#{@prj.brd}/form", {method: \GET}, {type: \json}
      .then ~>
        @brd = it
        @grp = @brd.detail.group.filter(~> it.key == @prj.grp).0
        if !@grp => return Promise.reject new ldError(1017)

  sharedb: ->
    console.log "initializing sharedb connection ..."
    @sdb = sdb = new sharedb-wrapper do
      url: {scheme: window.location.protocol.replace(':',''), domain: window.location.host}
      path: '/dash/ws'
    sdb.on \error, -> ldcvmgr.toggle \not-sync
    sdb.on \close, ~>
      ldcvmgr.toggle \offline-retry, true
      sdb.reconnect!
        .then ~> @getdoc!
        .then ~> @adapt!
        .then ~> @render!
        .then -> console.log "re-inited."
        .then -> ldcvmgr.toggle \offline-retry, false
    @hubs = prj: new Hub({sdb})
    sdb.ready!

  getdoc: ->
    console.log "get project document ..."
    @sdb.get({
      id: "prj/#{@slug}"
      watch: (ops,source) ~> @hubs.prj.fire \change, {ops,source}
      create: ~>
        ret = {answer: {}}
        form = @grp.{}form
        ret.answer{}[form.{}purpose.title or 'title'].content = @prj.name
        ret.answer{}[form.purpose.description or 'description'].content = @prj.description
        ret
    }).then (doc) ~> @hubs.prj.doc = doc

  adapt: ->
    @ctrl-form.adapt {hub: @hubs.prj, path: []}
  init-form: ->
    @ctrl-form = new prjForm {
      root: '[ld-scope=prj-form-use]'
      view-mode: true
      form: (@grp.{}form)
      grp: @grp
      brd: @brd
      prj: @prj
    }
    @ctrl-form.on \submit, (answer) ~>
      data = payload: answer, type: \prj, slug: @prj.slug
      ldcvmgr.toggle \publishing, true
      auth.recaptcha.get!
        .then (recaptcha) ->
          data.recaptcha = recaptcha
          ld$.fetch "/dash/api/detail", {method: \PUT}, {json: data, type: \json}
        .finally -> ldcvmgr.toggle \publishing, false
        .then ~> @prj.detail = JSON.parse(JSON.stringify(answer))
        .then ~> @ctrl-form.render!
        .then -> ldcvmgr.toggle \prj-published, true
        .catch (e) ->
          if e.id == 1012 => ldcvmgr.toggle('not-yet-available')
          else error e
    @adapt!

  render: ->
    @view.global.render!
    @view.form.render!
  init: -> @view.form.init!then ~> @render!


[path,slug] = /^\/(?:dash\/)?prj\/([^/]+)\/edit/.exec(window.location.pathname) or []

ctrl = new Ctrl {prj: slug}
core.init!
  .then ->
    ctrl.init!
    /*
  .then -> ctrl.fetch!
  .then -> ctrl.sharedb!
  .then -> ctrl.getdoc!
  .then -> ctrl.init-form!
    */
  .then -> ctrl.render!
  .then -> console.log "inited."
  .then -> core.loader.off!
  .catch core.error
