 (function() { function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_attrs(t,r){var a="";for(var s in t)if(pug_has_own_property.call(t,s)){var u=t[s];if("class"===s){u=pug_classes(u),a=pug_attr(s,u,!1,r)+a;continue}"style"===s&&(u=pug_style(u)),a+=pug_attr(s,u,!1,r)}return a}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_merge(e,r){if(1===arguments.length){for(var t=e[0],g=1;g<e.length;g++)t=pug_merge(t,e[g]);return t}for(var l in r)if("class"===l){var n=e[l]||[];e[l]=(Array.isArray(n)?n:[n]).concat(r[l]||[])}else if("style"===l){var n=pug_style(e[l]);n=n&&";"!==n[n.length-1]?n+";":n;var a=pug_style(r[l]);a=a&&";"!==a[a.length-1]?a+";":a,e[l]=n+a}else e[l]=r[l];return e}
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+""}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (Array, JSON, b64img, blockLoader, brd, c, cssLoader, ctrl, decache, defer, domain, escape, escjson, grp, ldui, libLoader, meta, parentName, prefix, prj, scriptLoader, thumb, thumbPath, url, version) {
      pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
if(!libLoader) {
  libLoader = {
    js: {url: {}},
    css: {url: {}},
    root: function(r) { libLoader._r = r; },
    _r: "/assets/lib",
    _v: "",
    version: function(v) { libLoader._v = (v ? "?v=" + v : ""); }
  }
  if(version) { libLoader.version(version); }
}

pug_mixins["script"] = pug_interp = function(os,cfg){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if(!Array.isArray(os)) { os = [os]; }
// iterate os
;(function(){
  var $$obj = os;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var o = $$obj[pug_index0];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.js"); }
if (!libLoader.js.url[url]) {
libLoader.js.url[url] = true;
defer = (typeof(c.defer) == "undefined" ? true : !!c.defer);
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + libLoader._v, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var o = $$obj[pug_index0];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.js"); }
if (!libLoader.js.url[url]) {
libLoader.js.url[url] = true;
defer = (typeof(c.defer) == "undefined" ? true : !!c.defer);
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + libLoader._v, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
    }
  }
}).call(this);

};
pug_mixins["css"] = pug_interp = function(os,cfg){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if(!Array.isArray(os)) { os = [os]; }
// iterate os
;(function(){
  var $$obj = os;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var o = $$obj[pug_index1];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.css"); }
if (!libLoader.css.url[url]) {
libLoader.css.url[url] = true;
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + libLoader._v, true, true)) + "\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var o = $$obj[pug_index1];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.css"); }
if (!libLoader.css.url[url]) {
libLoader.css.url[url] = true;
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + libLoader._v, true, true)) + "\u003E";
}
    }
  }
}).call(this);

};
pug_html = pug_html + "\u003Chtml\u003E";
if (!(libLoader || scriptLoader)) {
if(!scriptLoader) { scriptLoader = {url: {}, config: {}}; }
if(!decache) { decache = (version? "?v=" + version : ""); }
pug_mixins["script"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
scriptLoader.config = (config ? config : {});
if (!scriptLoader.url[url]) {
scriptLoader.url[url] = true;
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + decache, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
};
if(!cssLoader) { cssLoader = {url: {}}; }
pug_mixins["css"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
cssLoader.config = (config ? config : {});
if (!cssLoader.url[url]) {
cssLoader.url[url] = true;
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + decache, true, true)) + "\u003E";
}
};
if(!blockLoader) { blockLoader = {name: {}, config: {}}; }







}
var escjson = function(obj) { return 'JSON.parse(unescape("' + escape(JSON.stringify(obj)) + '"))'; };
var eschtml = (function() { var MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&#34;', "'": '&#39;' }; var repl = function(c) { return MAP[c]; }; return function(s) { return s.replace(/[&<>'"]/g, repl); }; })();
function ellipsis(str, len) {
  return ((str || '').substring(0, len || 200) + (((str || '').length > (len || 200)) ? '...' : ''));
}














var b64img = {};
b64img.px1 = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEAAAAALAAAAAABAAEAAAIA"
var loremtext = {
  zh: "????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
  en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};













prefix = function(n) { return (!n?[]:(Array.isArray(n)?n:[n])).map(function(it){ return `${prefix.currentName}$${it}`; }).join(' ');}
pug_mixins["scope"] = pug_interp = function(name){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var prentName = prefix.currentName;
prefix.currentName = name;
if (attributes.class && /naked-scope/.exec(attributes.class)) {
block && block();
}
else {
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"ld-scope": pug_escape(name || '')},attributes]), true)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
prefix.currentName = parentName;
};
pug_mixins["register-locals"] = pug_interp = function(name = "exports"){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if (locals) {
pug_html = pug_html + "\u003Cscript type=\"module\"\u003Eldc.register(\"viewlocals\", [], function() {\n  return " + (null == (pug_interp = escjson(locals[name] || null)) ? "" : pug_interp) + "\n});\u003C\u002Fscript\u003E";
}
};
var ldui = {};
ldui.ellipsis = function(str, len) {
  return ((str || '').substring(0, len || 200) + (((str || '').length > (len || 200)) ? '...' : ''));
};









var ctrl = {navtop: {}};
var grp = {};
ctrl.navtop.placeholder = false;
var answer = ( ( prj.detail && prj.detail.answer ) ? prj.detail.answer : {} )
var purpose = (grp.form || {}).purpose || {};
var meta = {};
if(prj && prj.detail.info) {
  meta.title = prj.detail.info.title;
  meta.description = prj.detail.info.description;
}
if(prj.thumb) {
  thumbPath = `/dash/org/${brd.org}/prj/${prj.slug}/upload/${prj.thumb}`;
  thumb = `url(${thumbPath})`;
  meta.thumbnail = `https://${domain}${thumbPath}`;
} else {
  thumb = "none";
}

pug_html = pug_html + "\u003Chead\u003E\u003Cmeta charset=\"utf-8\"\u003E";
pug_mixins["css"]([
      {name: "bootstrap", path: "dist/css/bootstrap.min.css"},
      {name: "@loadingio/bootstrap.ext"},
      {name: "@loadingio/loading.css", path: "lite.min.css"},
      {name: "ldiconfont"},
      {name: "ldloader"},
      {name: "ldcover"},
      {name: "ldcover", path: "ldcv.effects.min.css"},
      {name: "ldnotify"},
      {name: "ldbutton"},
      {url: "/css/index.css"}
    ]);
pug_mixins["css"]("/sch2021/view/grantdash.css");
pug_html = pug_html + "\u003C\u002Fhead\u003E\u003Cbody\u003E";
pug_mixins["scope"].call({
block: function(){
pug_html = pug_html + "\u003Cdiv class=\"navbar navbar-expand-lg navbar-light fixed-top\" ld=\"root\"\u003E\u003Cdiv class=\"collapse navbar-collapse\"\u003E\u003Cdiv class=\"ml-auto\"\u003E\u003Cul class=\"navbar-nav ml-4\"\u003E\u003Cli class=\"nav-item dropdown mr-2 d-flex align-items-center\"\u003E\u003Cdiv class=\"btn-group\" data-toggle=\"dropdown\"\u003E\u003Cdiv class=\"btn btn-sm btn-outline-secondary\" ld=\"lng\"\u003EEN\u003C\u002Fdiv\u003E\u003Cdiv class=\"btn btn-sm btn-outline-secondary dropdown-toggle\"\u003E\u003Ci class=\"i-globe\" style=\"line-height:1em\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown-menu dropdown-menu-right shadow-sm no-select\" style=\"min-width:0\"\u003E\u003Cdiv class=\"dropdown-item\" ld=\"set-lng\" data-name=\"en\"\u003EEN\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown-item\" ld=\"set-lng\" data-name=\"zh-TW\"\u003E???\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003Cli class=\"nav-item d-none\" ld=\"unauthed login\"\u003E\u003Ca class=\"nav-link\"\u003E??????\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"nav-item d-none\" ld=\"unauthed signup\"\u003E\u003Ca class=\"nav-link\"\u003E??????\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"nav-item dropdown d-none\" ld=\"authed profile\"\u003E\u003Cdiv class=\"btn btn-sm border-dark bg-white dropdown-toggle d-flex align-items-center\" data-toggle=\"dropdown\"\u003E\u003Cdiv class=\"avatar\" ld=\"avatar\"\u003E\u003C\u002Fdiv\u003E\u003Cspan class=\"ml-1\" ld=\"displayname\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown-menu dropdown-menu-right shadow-sm\"\u003E\u003Ca class=\"dropdown-item\" href=\"\u002Fme\u002Fsettings\u002F\"\u003E\u003Cdiv class=\"align-middle text-capitalize text-ellipsis\" ld=\"displayname\"\u003E?????????\u003C\u002Fdiv\u003E\u003Cdiv class=\"text-sm align-middle text-ellipsis\" ld=\"username\"\u003E...\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003Cdiv class=\"dropdown-divider\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown-header\"\u003E????????????\u003C\u002Fdiv\u003E\u003Ca class=\"dropdown-item\" href=\"\u002Fme\u002Fsettings\u002F\"\u003E????????????\u003C\u002Fa\u003E\u003Ca class=\"dropdown-item\" href=\"\u002Fme\u002Fprojects\u002F\"\u003E????????????\u003C\u002Fa\u003E\u003Cdiv class=\"dropdown-divider\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown-header\"\u003E????????????\u003C\u002Fdiv\u003E\u003Ca class=\"dropdown-item\" href=\"\u002Fjudge\u002F\"\u003E????????????\u003C\u002Fa\u003E\u003Ca class=\"dropdown-item\" href=\"\u002Fadmin\u002F\"\u003E????????????\u003C\u002Fa\u003E\u003Cdiv class=\"dropdown-divider\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown-item text-danger\" ld=\"logout\"\u003E??????\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
}, "navtop");
pug_html = pug_html + "\u003Cdiv class=\"gd-prj-view typeset heading-contrast\"\u003E\u003Cdiv class=\"inner\"\u003E\u003Cdiv class=\"gd-prj-view-header simple\"\u003E\u003Cdiv" + (" class=\"thumb\""+pug_attr("style", pug_style(`background-image:${thumb}`), true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"info\"\u003E\u003Cdiv class=\"brd\"\u003E\u003Ca" + (pug_attr("href", `/brd/${brd.slug}/list`, true, true)) + "\u003E" + (pug_escape(null == (pug_interp = brd.name) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003Cspan\u003E&nbsp;\u002F ??????\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"title\"\u003E\u003Ch2\u003E" + (pug_escape(null == (pug_interp = prj.name) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E\u003Cdiv class=\"tags\"\u003E";
if (prj.tag) {
// iterate prj.tag
;(function(){
  var $$obj = prj.tag;
  if ('number' == typeof $$obj.length) {
      for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
        var t = $$obj[$index];
pug_html = pug_html + "\u003Ca" + (pug_attr("href", `/brd/${brd.slug}/list?tag=${t}`, true, true)+pug_attr("style", pug_style(`animation-delay:${$index * 0.1}s`), true, true)) + "\u003E" + (pug_escape(null == (pug_interp = t) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
      }
  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;
      var t = $$obj[$index];
pug_html = pug_html + "\u003Ca" + (pug_attr("href", `/brd/${brd.slug}/list?tag=${t}`, true, true)+pug_attr("style", pug_style(`animation-delay:${$index * 0.1}s`), true, true)) + "\u003E" + (pug_escape(null == (pug_interp = t) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
    }
  }
}).call(this);

}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"action\"\u003E\u003Ca" + (" class=\"btn btn-sm mr-2 d-none\""+" ld=\"btn-edit\""+pug_attr("href", `/prj/${prj.slug}/edit`, true, true)) + "\u003E?????? \u003Ci class=\"i-pen\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003Cdiv class=\"btn btn-sm has-tips manual\" ld=\"btn-share\"\u003E?????? \u003Ci class=\"i-link\"\u003E\u003C\u002Fi\u003E\u003Cdiv class=\"hover-tip tip-sm top\"\u003E???????????????\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"user\"\u003E\u003Cdiv class=\"item\"\u003E\u003Cdiv class=\"label\"\u003E?????????\u003C\u002Fdiv\u003E\u003Cdiv class=\"d-flex align-items-center\"\u003E\u003Cdiv class=\"avatar\" ld=\"avatar\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"name\" ld=\"ownername\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"hr\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"brief\"\u003E";
// iterate (prj.description || '').split('\n')
;(function(){
  var $$obj = (prj.description || '').split('\n');
  if ('number' == typeof $$obj.length) {
      for (var pug_index3 = 0, $$l = $$obj.length; pug_index3 < $$l; pug_index3++) {
        var p = $$obj[pug_index3];
pug_html = pug_html + "\u003Cp\u003E" + (pug_escape(null == (pug_interp = p) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index3 in $$obj) {
      $$l++;
      var p = $$obj[pug_index3];
pug_html = pug_html + "\u003Cp\u003E" + (pug_escape(null == (pug_interp = p) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"gd-prj-view-body simple typeset heading-contrast\"\u003E\u003Cdiv class=\"inner\"\u003E\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"col-md-2\"\u003E\u003Cdiv class=\"sticky pt-2\" style=\"top:60px\"\u003E\u003Cdiv class=\"list-group\"\u003E\u003Ca class=\"list-group-item clickable text-secondary\" data-scrollto=\"#project-detail\"\u003E????????????\u003C\u002Fa\u003E\u003Ca class=\"list-group-item clickable text-secondary d-none\" pd=\"stage-ctrl\" data-name=\"comment-view\" data-scrollto=\"#project-discuss\"\u003E????????????\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Ca" + (" class=\"btn btn-primary btn-block text-white my-4 d-none\""+" pd=\"stage-ctrl\" data-name=\"prj-new\""+pug_attr("href", `/brd/${prj.brd}/prj/create`, true, true)) + "\u003E????????????\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"col-md-10\"\u003E\u003Cdiv id=\"project-detail\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"block\" style=\"font-size:1.25em\"\u003E\u003Cdiv class=\"mb-4\" ld-each=\"field\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"d-none\" pd=\"stage-ctrl\" data-name=\"comment-view\"\u003E\u003Cdiv class=\"caption\"\u003E\u003Ch3 id=\"project-discuss\"\u003E????????????\u003C\u002Fh3\u003E\u003Cp\u003E???????????????????????????????????????????????????????????????????????????????????????????????????\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
pug_mixins["scope"].call({
block: function(){
pug_html = pug_html + "\u003Cdiv class=\"comment media mb-2 p-2 position-relative\" ld=\"loading\"\u003E\u003Cdiv class=\"mr-3\" style=\"width:3.25em\"\u003E\u003Cdiv class=\"aspect-ratio ratio-1by1 bg-light\" ld=\"avatar\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"media-body\"\u003E\u003Cdiv class=\"w-100 bg-light mb-2 pb-3 ld ld-dim\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"w-100 bg-light mb-2 pb-3 ld ld-dim x2\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"w-50 bg-light mb-2 pb-3 ld ld-dim xhalf\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"d-none\" ld=\"loading off\"\u003E\u003Cdiv class=\"comment media mb-2 p-2 position-relative\" ld-each=\"comment\"\u003E\u003Cdiv class=\"mr-3\" style=\"width:3.25em\"\u003E\u003Cdiv class=\"aspect-ratio ratio-1by1 rounded bg-dark w-100 bg-cover\" ld=\"avatar\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"media-body\"\u003E\u003Cdiv class=\"d-flex align-items-center\"\u003E\u003Cb class=\"my-0\" ld=\"author\"\u003E\u003C\u002Fb\u003E\u003Cdiv class=\"text-sm text-muted ml-1\" ld=\"role\"\u003E??? \u003Cspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"text-sm text-muted ml-1\"\u003E??? \u003Cspan ld=\"date\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"content my-1\" ld=\"content\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"d-none\" pd=\"stage-ctrl\" data-name=\"comment-new\"\u003E";
pug_mixins["scope"].call({
block: function(){
pug_html = pug_html + "\u003Cdiv class=\"media mb-4 p-2 position-relative\"\u003E\u003Cdiv class=\"mr-2\" style=\"width:3.25em\"\u003E\u003Cdiv class=\"aspect-ratio ratio-1by1 rounded bg-dark w-100 bg-cover\" ld=\"avatar\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"media-body\"\u003E\u003Cdiv class=\"position-relative\"\u003E\u003Ctextarea class=\"form-control mb-2\" rows=\"4\" ld=\"input preview off\"\u003E\u003C\u002Ftextarea\u003E\u003Cdiv class=\"w-100 bg-light rounded mb-2 p-3 d-none\" ld=\"preview panel\" style=\"min-height:200px\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"d-flex\"\u003E\u003Cdiv class=\"flex-grow-1 d-flex align-items-center\"\u003E\u003Cdiv class=\"d-flex align-items-center text-sm text-muted mr-4\"\u003E\u003Cinput class=\"mr-1\" type=\"checkbox\" ld=\"use-markdown\"\u003E\u003Cdiv\u003E?????? Markdown ?????? ( \u003Ca href=\"#\"\u003E????????????\u003C\u002Fa\u003E )\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"d-none\" ld=\"if-markdown\"\u003E\u003Cdiv class=\"d-flex align-items-center text-sm text-muted mr-4\"\u003E\u003Cinput class=\"mr-1\" type=\"checkbox\" ld=\"toggle-preview\"\u003E\u003Cdiv\u003E??????\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv\u003E\u003Cdiv class=\"btn btn-outline-secondary ld ld-ext-right\" ld=\"post\"\u003E???????????? \u003Cdiv class=\"ld ld-spinner ld-spin\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
}, "edit");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
},
attributes: {"class": "block"}
}, "discuss");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
pug_mixins["script"]([
      {name: "i18next", path: "dist/umd/i18next.min.js"},
      {name: "i18next-browser-languagedetector", path: "dist/umd/i18nextBrowserLanguageDetector.min.js"},
      {name: "bootstrap.native", path: "dist/bootstrap-native-v4.min.js"},
      {name: "proxise"},
      {name: "@loadingio/debounce.js"},
      {name: "@loadingio/ldquery"},
      {name: "@loadingio/ldc"},
      {name: "zmgr"},
      {name: "ldview"},
      {name: "ldcover"},
      {name: "ldnotify"},
      {name: "ldcvmgr"},
      {name: "lderror"},
      {name: "ldloader"},
      {name: "@plotdb/httputil"},
      {name: "@plotdb/semver"},
      {name: "@plotdb/rescope"},
      {name: "@plotdb/csscope"},
      {name: "@plotdb/block"},
      {name: "@servebase/auth"},
      {name: "@servebase/consent"},
      {name: "@servebase/captcha"},
      {name: "@servebase/erratum"},
      {name: "@servebase/core"},
      {name: "@servebase/connector"},
      {name: "@servebase/navtop"},
      {name: "@grantdash/dashlib"},
      {url: "/js/site.min.js"}
    ]);
pug_mixins["register-locals"]();
pug_mixins["script"]([
    {name: "@plotdb/form"}
  ]);
pug_html = pug_html + "\u003Cscript type=\"module\"\u003Evar fields;fields={name:{meta:{title:\"????????????\",isRequired:true,desc:\"????????????????????????????????????\"}},thumb:{meta:{title:\"???????????????\",isRequired:true,desc:\"??????????????????????????????\"}},brief:{type:\"@makeform\u002Ftextarea\",meta:{title:\"????????????\",isRequired:true,desc:\"???????????????150 ??????????????????????????????????????????????????????????????????\",term:[{opset:\"length\",enabled:true,op:\"lte\",msg:\"?????????\",config:{val:150}}]}},representative:{meta:{title:\"???????????????\",isRequired:true,desc:\"???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????\"}},u22:{type:\"@makeform\u002Fradio\",meta:{title:\"??????????????????????????? U-22 ????????????\",isRequired:true,desc:\"??????????????????????????? https:\u002F\u002Fsch001.g0v.tw\u002Fmeans\u002F\",config:{values:[\"???\",\"???\"]}}},slackid:{meta:{title:\"?????????????????? g0v Slack ID\",isRequired:true,desc:\"???????????? g0v Slack ????????? https:\u002F\u002Fg0v.hackmd.io\u002F@jothon\u002Fjoing0vslack\"}},team:{type:\"@makeform\u002Ftextarea\",meta:{title:\"??????????????????\",isRequired:true,desc:\"??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????\"}},motivation:{type:\"@makeform\u002Ftextarea\",meta:{title:\"??????????????????????????????????????????\",isRequired:true,desc:\"???????????????????????????\"}},goal:{type:\"@makeform\u002Ftextarea\",meta:{title:\"?????????????????????????????????\",isRequired:true,desc:\"???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????\"}},ta:{type:\"@makeform\u002Ftextarea\",meta:{title:\"?????????????????????????????????????????????????????????????????????????????????\",isRequired:true}},diagram:{meta:{title:\"???????????????????????????????????????????????????\",isRequired:true,desc:\"?????????????????????????????????\",term:[{opset:\"string\",enabled:true,op:\"url\",msg:\"???????????????\"}]}},difficulties:{type:\"@makeform\u002Ftextarea\",meta:{title:\"??????????????????????????????????????????????????????????????????????????????????????????\",isRequired:true}},future:{type:\"@makeform\u002Ftextarea\",meta:{title:\"??????????????????????????????????????????????????????\",isRequired:true}},category:{type:\"@makeform\u002Fchoice\",meta:{title:\"?????????????????????????????????????????????\",isRequired:true,config:{values:[\"COVID-19 ????????????New Solution for Preventing Pandemic???\",\"???????????????????????????Solution of Distance Learing???\",\"??????????????????????????????Community Management & Infrastructure???\",\"???????????????Educational Content???\"]}}}};ldc.register([\"core\",\"viewlocals\",\"discussView\",\"prjViewSimple\"],function(e){var a,c,o,t,l,s,n,d,f,m,u,w,r,i,g,v;a=e.core,c=e.discussView,o=e.discussEdit,t=e.viewlocals,l=e.prjViewSimple;s={};n=t||{},d=n.prj,f=n.brd,m=n.owner;s.stage={};s.stage[\"comment-view\"]=true;s.stage[\"comment-new\"]=true;u={};r=[];for(i in n=fields){g=n[i];r.push({key:i,cfg:g})}w=r;v=new form.manager;return a.init().then(function(){var e,t,n,r,i,o;e=(t=d.detail||(d.detail={})).answer||(t.answer={});n=(t=u.form||(u.form={})).list||(t.list=[]);r={};n.map(function(e){return r[e.key]=e});if(c){i=new c({root:\"[ld-scope=discuss]\"});i.init()}o=new ldview({global:true,root:document.body,handler:{\"stage-ctrl\":function(e){var t,n;t=e.node;n=t.getAttribute(\"data-name\");return t.classList.toggle(\"d-none\",!s.stage[n])}}});o=new ldview({root:document.body,initRender:false,action:{click:{\"btn-share\":function(e){var t,n;t=e.node,n=e.local;navigator.clipboard.writeText(window.location.href);return ldnotify.send(\"success\",\"?????????\")}}},text:{ownername:function(e){var t;t=e.node;return m.displayname||\"n\u002Fa\"}},handler:{\"btn-edit\":function(e){var t;t=e.node;return t.classList.toggle(\"d-none\",a.user.key!==d.owner)},field:{list:function(){return w},key:function(e){return e.key},view:{init:{\"@\":function(e){var t,n,r,i;t=e.node,n=e.ctx;r=n.cfg;if(!r.meta.title){r.meta.title=n.key}t.classList.toggle(\"d-none\",true);i=r.type||\"@makeform\u002Finput\";return a.manager.from({name:i,version:\"main\"},{root:t,data:r.meta}).then(function(e){n.itf=e[\"interface\"];n.bi=e.instance;n.root=t;return v.add({widget:n.itf,path:n.key})})[\"catch\"](function(e){return Promise.reject(e)})}},handler:{\"@\":function(e){var t,n;t=e.node,n=e.ctx;n.itf.render();return t.classList.toggle(\"d-none\",false)}}}}}});return o.init().then(function(){return o.render()})})[\"catch\"](a.error)});ldc.register(\"prjViewSimple\",[],function(){var o;o=function(t){var e,s,a=this;this.root=e=typeof t.root===\"string\"?document.querySelector(t.root):t.root;this.form=t.form;this.answer=t.answer;this.prj=t.prj;this.brd=t.brd;this.org=t.org;s=function(t){return a.answer[t.key]||t.value};this.view=new ldView({root:e,handler:{item:{list:function(){return a.form.list},init:function(t){var e,n,r;e=t.node,n=t.local,r=t.data;return n.view=new ldView({context:r,root:e,handler:{title:function(t){var e,n;e=t.node,n=t.context;return e.innerText=n.title},desc:function(t){var e,n;e=t.node,n=t.context;e.classList.toggle(\"d-none\",!n.config[\"show-desc\"]);return e.innerText=n.desc},content:function(t){var e,n,r,i;e=t.node,n=t.context;r=s(n);i=o.render({block:n,answer:r,prj:a.prj,org:a.org});e.classList.toggle(\"empty\",!i);return e.innerHTML=DOMPurify.sanitize(i,{ADD_ATTR:[\"target\"]})}}})},handler:function(t){var e,n;e=t.local,n=t.data;e.view.setContext(n);return e.view.render()}}}});return this};o.prototype=import$(Object.create(Object.prototype),{update:function(t){var e,n,r;e=t.form,n=t.answer,r=t.prj;this.form=e;this.answer=n;this.prj=r;return this.render()},render:function(){return this.view.render()}});o.render=function(t){var e,n,r,d,u,i,s,f,m,a,h,o,l,c,p,v;e=t.block,n=t.answer,r=t.prj,d=t.brd,u=t.org;i={};if(!(e&&n)){return}if(n.content){i=n.useMarkdown?DOMPurify.sanitize(marked(n.content||\"\")):htmlentities(n.content||\"\")}else if(n.start){s=moment(n.start).format(\"YYYY-MM-DD hh:mm:ss\");f=moment(n.end).format(\"YYYY-MM-DD hh:mm:ss\");i=(e.config||(e.config={})).rangeEnabled?s+\" - \"+f:s}else if(n.list){if((m=e.name)===\"form-file\"||m===\"form-thumbnail\"){a=(n.list||[]).map(function(t){return'\u003Cli\u003E\u003Ca href=\"\u002Fdash\u002Forg\u002F'+u+\"\u002Fprj\u002F\"+r+\"\u002Fupload\u002F\"+t.fn+\"?id=\"+Math.random().toString(36).substring(2)+'\"\\ntarget=\"_blank\" rel=\"noopener noreferrer\"\u003E\\n'+htmlentities(t.name)+\"\\n\u003C\u002Fa\u003E\u003C\u002Fli\u003E\"}).join(\"\");i=DOMPurify.sanitize(a,{ADD_ATTR:[\"target\"]})}else if(e.name===\"form-checkpoint\"){a=(n.list||[]).map(function(t){return'\u003Cdiv class=\"item\"\u003E\u003Cdiv class=\"fields mb-4\"\u003E\\n\u003Cdiv class=\"d-flex align-items-end mb-2\"\u003E\\n  \u003Ch4 class=\"mb-0 mr-2\"\u003E'+htmlentities(t.title)+'\u003C\u002Fh4\u003E\\n  \u003Cp class=\"text-muted text-sm mb-0\"\u003E'+htmlentities(t.date)+\"\u003C\u002Fp\u003E\\n\u003C\u002Fdiv\u003E\\n\u003Cp\u003E\"+htmlentities(t.desc)+\"\u003C\u002Fp\u003E\\n\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\"}).join(\"\");i='\u003Cdiv class=\"form-block mt-4 p-2\"\u003E\u003Cdiv class=\"timeline-list\"\u003E'+DOMPurify.sanitize(a)+\"\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\"}else{h=n.list.concat(n.otherValue&&n.other?[n.otherValue]:[]);i=DOMPurify.sanitize(h.join(\"\u003Cbr\u003E\"))}}else if(e.name===\"form-budget\"){o=JSON.parse(JSON.stringify(n.sheet));o.map(function(t){return t.push(+t[2]+ +t[3])});l=o.reduce(function(t,e){return t+ +e[4]},0);c=o.reduce(function(t,e){return t+ +e[3]},0);p=(Math.round(1e3*c\u002F(l||1))\u002F10+\"\").replace(\"(.d)d*\",\"$1\");o=o.map(function(t){var e;if(!t.filter(function(t){return t}).length){return}e=t.map(function(t){return\"\u003Ctd\u003E\"+(t||\" \")+\"\u003C\u002Ftd\u003E\"}).join(\"\");return\"\u003Ctr\u003E\"+e+\"\u003C\u002Ftr\u003E\"}).filter(function(t){return t}).join(\"\");v='\u003Ctable class=\\'mb-2 form-budget-table\\'\u003E\u003Ctr\u003E\\n\u003Cth rowspan=\"2\"\u003E??????\u003C\u002Fth\u003E\\n\u003Cth rowspan=\"2\"\u003E??????\u003C\u002Fth\u003E\\n\u003Cth colspan=\"3\"\u003E??????\u003C\u002Fth\u003E\\n\u003C\u002Ftr\u003E\\n\u003Ctr\u003E\u003Cth\u003E??????\u003C\u002Fth\u003E\u003Cth\u003E??????\u003C\u002Fth\u003E\u003Cth\u003E??????\u003C\u002Fth\u003E\u003C\u002Ftr\u003E\\n'+o+'\\n\u003C\u002Ftable\u003E\\n\u003Cdiv class=\"d-flex justify-content-between\"\u003E\\n\u003Cdiv\u003E\u003Cspan class=\"text-muted text-sm\"\u003E?????????\u003C\u002Fspan\u003E\\n     \u003Cspan class=\"font-weight-bold\"\u003E'+l+'\u003C\u002Fspan\u003E\\n     \u003Cspan class=\"text-muted text-sm\"\u003E???\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\\n\u003Cdiv\u003E\u003Cspan class=\"text-muted text-sm\"\u003E????????????\u003C\u002Fspan\u003E\\n     \u003Cspan class=\"font-weight-bold\"\u003E'+c+'\u003C\u002Fspan\u003E\\n     \u003Cspan class=\"text-muted text-sm\"\u003E???\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\\n\u003Cdiv\u003E\u003Cspan class=\"text-muted text-sm\"\u003E????????????\u003C\u002Fspan\u003E\\n     \u003Cspan class=\"font-weight-bold\"\u003E'+p+'\u003C\u002Fspan\u003E\\n     \u003Cspan class=\"text-muted text-sm\"\u003E%\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\\n\u003C\u002Fdiv\u003E';i=DOMPurify.sanitize(v)}else{i=\"\"}return i};return o});function import$(t,e){var n={}.hasOwnProperty;for(var r in e)if(n.call(e,r))t[r]=e[r];return t}\u003C\u002Fscript\u003E\u003Cscript type=\"module\"\u003Eldc.register(\"discussEdit\",[\"core\",\"error\"],function(e){var a,t,n;a=e.core,t=e.error;n=function(e){var t,i,o=this;this.opt=e;this.markedOptions=e.marked||{};this.root=t=typeof e.root===\"string\"?document.querySelector(e.root):e.root;this.data=import$({content:{},url:window.location.pathname,reply:null},e.data);this.preview=false;this.useMarkdown=false;this.ready=false;this.ldld=null;this.evtHandler={};this.view=i=new ldview({initRender:false,root:t,action:{input:{\"use-markdown\":function(e){var t,n;t=e.node;((n=o.data.content).config||(n.config={})).useMarkdown=o.useMarkdown=t.checked;return i.render()},\"toggle-preview\":function(e){var t;t=e.node;o.preview=!!t.checked;return i.render()},input:function(e){var t;t=e.node;o.data.content.body=t.value;return i.render(\"post\")},title:function(e){var t;t=e.node;o.data.title=t.value;return i.render(\"post\")}},click:{post:function(e){var t,n,r;t=e.node;if(t.classList.contains(\"running\")){return}if(t.classList.contains(\"disabled\")){return}if(!o.isReady()){return}r={url:(n=o.data).url,reply:n.reply,content:n.content,slug:n.slug,key:n.key,title:n.title};o.ldld.on();return debounce(1e3).then(function(){return a.captcha.guard({cb:function(e){r.captcha=e;return ld$.fetch(\"\u002Fapi\u002Fdiscuss\",{method:r.key?\"PUT\":\"POST\"},{type:\"json\",json:r})}})})[\"finally\"](function(){return o.ldld.off()}).then(function(e){var t;o.fire(\"new-comment\",(t=import$({owner:o.global.user.key,displayname:o.global.user.displayname},r),t.key=e.key,t.slug=e.slug,t));i.get(\"input\").value=\"\";i.get(\"panel\").innerHTML=\"\";o.preview=false;return i.render()})[\"catch\"](a.error)}}},init:{post:function(e){var t;t=e.node;return o.ldld=new ldloader({root:t})}},handler:{avatar:function(e){var t;t=e.node;return t.style.backgroundImage=\"url(\u002Fdash\u002Fs\u002Favatar\u002F\"+o.global.user.key+\".png)\"},preview:function(e){var t,n,r,i;t=e.node;n=in$(\"off\",t.getAttribute(\"ld\").split(\" \"));r=!(i=!(o.preview&&o.useMarkdown))!==!n&&(i||n);return t.classList.toggle(\"d-none\",r)},panel:function(e){var t;t=e.node;if(o.preview){return t.innerHTML=marked(o.data.content.body||\"\",o.markedOptions)}},post:function(e){var t;t=e.node;return t.classList.toggle(\"disabled\",!o.isReady())},\"edit-panel\":function(e){var t;t=e.node;return t.classList.toggle(\"d-none\",!!o.preview)},\"if-markdown\":function(e){var t;t=e.node;return t.classList.toggle(\"d-none\",!o.useMarkdown)}}});return this};n.prototype=import$(Object.create(Object.prototype),{init:function(){var e=this;return a.init().then(function(){e.global=a.global;return e.view.render()})},edit:function(e){e==null&&(e={});import$(this.data,e);return this.view.render()},isReady:function(){var e;e=this.view.get(\"title\");return this.ready=!!(this.data.content.body||\"\").trim().length&&(!e||(this.data.title||\"\").trim().length)},on:function(e,t){var n;return((n=this.evtHandler)[e]||(n[e]=[])).push(t)},fire:function(e){var t,n,r,i,o,a,u,l=[];n=[];for(r=1,i=arguments.length;r\u003Ci;++r){n.push(arguments[r])}t=n;for(r=0,a=(o=this.evtHandler[e]||[]).length;r\u003Ca;++r){u=o[r];l.push(u.apply(this,t))}return l}});return n});function import$(e,t){var n={}.hasOwnProperty;for(var r in t)if(n.call(t,r))e[r]=t[r];return e}function in$(e,t){var n=-1,r=t.length\u003E\u003E\u003E0;while(++n\u003Cr)if(e===t[n])return true;return false}\u003C\u002Fscript\u003E\u003Cscript type=\"module\"\u003Eldc.register(\"discussView\",[\"discussEdit\"],function(t){var i,n;i=t.discussEdit;n=function(t){var n,e,r=this;this.opt=t;this.markedOptions=t.marked||{};this.root=n=typeof t.root===\"string\"?document.querySelector(t.root):t.root;this.data=import$({url:window.location.pathname},t.data);this.edit=new i({root:ld$.find(n,\"[ld-scope=edit]\",0)});this.comments=[];this.edit.init();this.edit.on(\"new-comment\",function(t){t.distance=r.comments.length;t.state=\"active\";r.comments.push(t);return r.view.render()});this.view=e=new ldview({initRender:false,root:this.root,handler:{loading:function(t){var n,e,i;n=t.node,e=t.names;return n.classList.toggle(\"d-none\",!(!r.loading!==!(i=in$(\"off\",e))&&(r.loading||i)))},title:function(t){var n,e;n=t.node;e=r.discuss?r.discuss.title:\"\";return n.innerText=e||\"?????????????????????\"},comment:{list:function(){return r.comments},init:function(t){var n,i,e,r;n=t.node,i=t.data,e=t.idx;n.classList.add(\"ld\",\"ld-float-ltr-in\",\"xp35\");n.style.animationDelay=e*.1+\"s\";return r=new ldview({root:n,handler:{avatar:function(t){var n;n=t.node;return n.style.backgroundImage=\"url(\u002Fs\u002Favatar\u002F\"+i.owner+\".png)\"},author:function(t){var n;n=t.node;return n.innerText=i.displayname},role:function(t){var n;n=t.node;n.classList.toggle(\"d-none\",!i.role);return ld$.find(n,\"span\",0).innerText=i.role},date:function(t){var n;n=t.node;return n.innerText=i.createdtime},content:function(t){var n,e;n=t.node;if(((e=i.content).config||(e.config={})).useMarkdown){return n.innerHTML=marked(i.content.body)}else{return n.innerText=i.content.body}}}})}}}});return this};n.prototype=import$(Object.create(Object.prototype),{init:function(){var t,n=this;this.loading=true;t=this.data.slug?{slug:this.data.slug}:{url:this.data.url};return ld$.fetch(\"\u002Fapi\u002Fdiscuss\",{method:\"GET\"},{params:t,type:\"json\"})[\"finally\"](function(){return n.loading=false}).then(function(t){n.comments=t.comments;n.discuss=t.discuss;n.comments=t.comments||[];n.discuss=t.discuss||{};return n.view.render()})}});return n});function import$(t,n){var e={}.hasOwnProperty;for(var i in n)if(e.call(n,i))t[i]=n[i];return t}function in$(t,n){var e=-1,i=n.length\u003E\u003E\u003E0;while(++e\u003Ci)if(t===n[e])return true;return false}\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";
    }.call(this, "Array" in locals_for_with ?
        locals_for_with.Array :
        typeof Array !== 'undefined' ? Array : undefined, "JSON" in locals_for_with ?
        locals_for_with.JSON :
        typeof JSON !== 'undefined' ? JSON : undefined, "b64img" in locals_for_with ?
        locals_for_with.b64img :
        typeof b64img !== 'undefined' ? b64img : undefined, "blockLoader" in locals_for_with ?
        locals_for_with.blockLoader :
        typeof blockLoader !== 'undefined' ? blockLoader : undefined, "brd" in locals_for_with ?
        locals_for_with.brd :
        typeof brd !== 'undefined' ? brd : undefined, "c" in locals_for_with ?
        locals_for_with.c :
        typeof c !== 'undefined' ? c : undefined, "cssLoader" in locals_for_with ?
        locals_for_with.cssLoader :
        typeof cssLoader !== 'undefined' ? cssLoader : undefined, "ctrl" in locals_for_with ?
        locals_for_with.ctrl :
        typeof ctrl !== 'undefined' ? ctrl : undefined, "decache" in locals_for_with ?
        locals_for_with.decache :
        typeof decache !== 'undefined' ? decache : undefined, "defer" in locals_for_with ?
        locals_for_with.defer :
        typeof defer !== 'undefined' ? defer : undefined, "domain" in locals_for_with ?
        locals_for_with.domain :
        typeof domain !== 'undefined' ? domain : undefined, "escape" in locals_for_with ?
        locals_for_with.escape :
        typeof escape !== 'undefined' ? escape : undefined, "escjson" in locals_for_with ?
        locals_for_with.escjson :
        typeof escjson !== 'undefined' ? escjson : undefined, "grp" in locals_for_with ?
        locals_for_with.grp :
        typeof grp !== 'undefined' ? grp : undefined, "ldui" in locals_for_with ?
        locals_for_with.ldui :
        typeof ldui !== 'undefined' ? ldui : undefined, "libLoader" in locals_for_with ?
        locals_for_with.libLoader :
        typeof libLoader !== 'undefined' ? libLoader : undefined, "meta" in locals_for_with ?
        locals_for_with.meta :
        typeof meta !== 'undefined' ? meta : undefined, "parentName" in locals_for_with ?
        locals_for_with.parentName :
        typeof parentName !== 'undefined' ? parentName : undefined, "prefix" in locals_for_with ?
        locals_for_with.prefix :
        typeof prefix !== 'undefined' ? prefix : undefined, "prj" in locals_for_with ?
        locals_for_with.prj :
        typeof prj !== 'undefined' ? prj : undefined, "scriptLoader" in locals_for_with ?
        locals_for_with.scriptLoader :
        typeof scriptLoader !== 'undefined' ? scriptLoader : undefined, "thumb" in locals_for_with ?
        locals_for_with.thumb :
        typeof thumb !== 'undefined' ? thumb : undefined, "thumbPath" in locals_for_with ?
        locals_for_with.thumbPath :
        typeof thumbPath !== 'undefined' ? thumbPath : undefined, "url" in locals_for_with ?
        locals_for_with.url :
        typeof url !== 'undefined' ? url : undefined, "version" in locals_for_with ?
        locals_for_with.version :
        typeof version !== 'undefined' ? version : undefined));
    ;;return pug_html;}; module.exports = template; })() 