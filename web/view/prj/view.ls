#({core, error, stage, discussView, discussEdit, viewlocals, prj-view-simple}) <- ldc.register <[core error stage viewlocals discussView prjViewSimple]>, _
({core, discussView, discussEdit, viewlocals, prj-view-simple}) <- ldc.register <[core viewlocals discussView prjViewSimple]>, _
lc = {}
{prj, brd, owner} = viewlocals or {}

lc.stage = {}
lc.stage["comment-view"] = true
lc.stage["comment-new"] = true
grp = {}
_fields = [{key,cfg} for key,cfg of fields]

formmgr = new form.manager!

core.init!
  .then ->
    /*
    #lc.global = g
    #stage.get {brd: brd.slug}
   .then (ret = {}) ->
    lc.stage = ret.config or {}
    */
    answers = prj.{}detail.{}answer
    blocks = grp.{}form.[]list
    bhash = {}
    blocks.map -> bhash[it.key] = it
    if discussView =>
      discuss = new discussView root: '[ld-scope=discuss]'
      discuss.init!
    view = new ldview do
      global: true
      root: document.body
      handler:
        "stage-ctrl": ({node}) ->
          n = node.getAttribute \data-name
          node.classList.toggle \d-none, !lc.stage[n]

    view = new ldview do
      root: document.body
      init-render: false
      action: click:
        "btn-share": ({node, local}) ->
          navigator.clipboard.writeText window.location.href
          ldnotify.send \success, "已複製"
      text: ownername: ({node}) ~> owner.displayname or 'n/a'
      handler:
        "btn-edit": ({node}) ->
          node.classList.toggle \d-none, (core.user.key != prj.owner)
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

    view.init!
      .then -> view.render!
    /*
    prj-view = new prj-view-simple do
      root: '[ld-scope=form-answer]'
      prj: prj.slug, brd: brd.slug, org: brd.org
      form: grp.form
      answer: answers
    */
  .catch core.error

