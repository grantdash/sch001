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
    
    (function (Array, JSON, b64img, blockLoader, c, cssLoader, decache, defer, escape, escjson, ldui, libLoader, parentName, prefix, scriptLoader, url, version) {
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

pug_mixins["nbr"] = pug_interp = function(count){
var block = (this && this.block), attributes = (this && this.attributes) || {};
for (var i = 0; i < count; i++)
{
pug_html = pug_html + "\u003Cbr\u003E";
}
};






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
pug_mixins["user"] = pug_interp = function(opt){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var url = (opt && opt.key ? `/s/avatar/${opt.key}.png` : '/assets/img/avatar.svg')
pug_mixins["scope"].call({
block: function(){
pug_html = pug_html + "\u003Cdiv" + (" class=\"aspect-ratio ratio-1by1 rounded-circle bg-cover\""+" ld=\"avatar\""+pug_attr("style", pug_style(`background:#444 url(${url}) center center no-repeat`), true, true)) + "\u003E\u003C\u002Fdiv\u003E";
},
attributes: pug_merge([{"class": "d-inline-block","style": "width:2em"},attributes])
});
};
pug_html = pug_html + "\u003C\u002Fhead\u003E\u003Cbody\u003E";
pug_mixins["scope"].call({
block: function(){
pug_html = pug_html + "\u003Cdiv class=\"base w-640\" style=\"height:90%\"\u003E\u003Cdiv class=\"inner card h-100\"\u003E\u003Cdiv class=\"sticky z-fixed\" style=\"top:0\"\u003E\u003Cdiv class=\"closebtn\" data-ldcv-set=\"\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card-header bg-white rounded\"\u003E\u003Cdiv class=\"text-center\"\u003E\u003Ch4\u003E????????????\u003C\u002Fh4\u003E\u003Cdiv class=\"d-flex justify-content-center text-sm\"\u003E\u003Cdiv class=\"text-removed mx-2 py-1 px-2 rounded\"\u003E?????????????????????\u003C\u002Fdiv\u003E\u003Cdiv class=\"text-added mx-2 py-1 px-2 rounded\"\u003E?????????????????????\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card-header bg-light text-dark shadow-sm\"\u003E\u003Cdiv class=\"row text-sm\"\u003E\u003Cdiv class=\"col-md text-left border-right\"\u003E\u003Ci class=\"i-dart-left\"\u003E\u003C\u002Fi\u003E ?????? : 2020\u002F04\u002F20 12:30:25\u003C\u002Fdiv\u003E\u003Cdiv class=\"col-md text-right\"\u003E2020\u002F04\u002F21 05:59:33 : ?????? \u003Ci class=\"i-dart-right\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card-body h-100\" style=\"overflow-y:scroll\"\u003E\u003Cdiv class=\"mb-4 pb-4\" ld-each=\"diffs\"\u003E\u003Cdiv\u003E\u003Cb ld=\"title\"\u003E\u003C\u002Fb\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"text-sm text-muted\" ld=\"desc\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"p-4 bg-light mt-2 rounded\"\u003E\u003Cdiv class=\"row no-gutters\" ld=\"row\"\u003E\u003Cdiv class=\"col-md border-right\"\u003E\u003Cdiv class=\"pr-4 value\" style=\"white-space:pre-wrap\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"col-md\"\u003E\u003Cdiv class=\"pl-4 value\" style=\"white-space:pre-wrap\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
},
attributes: {"class": "ldcv scroll ldcvmgr","data-name": "prj-diff"}
}, "prj-diff");
pug_mixins["scope"].call({
block: function(){
pug_html = pug_html + "\u003Cdiv class=\"d-flex w-100\"\u003E\u003Cdiv class=\"mr-4 p-4 rounded border d-none d-md-block\" style=\"background:linear-gradient(315deg,#f4f5f6,#fff);min-height:calc(100vh - 7em)\"\u003E\u003Cdiv class=\"h-100\" pd=\"init-loader\" style=\"width:250px\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"pb-4 mb-4 h-100 d-none\" pd=\"content\"\u003E\u003Ch3 class=\"my-0 d-none\" ld=\"nview\"\u003E????????????\u003C\u002Fh3\u003E\u003Ch3 class=\"my-0\" ld=\"view\"\u003E????????????\u003C\u002Fh3\u003E\u003Chr\u003E\u003Cdiv class=\"sticky\" style=\"width:250px\"\u003E\u003Cdiv class=\"mb-4\"\u003E\u003Cdiv class=\"btn btn-block btn-primary\" ld=\"view viewing\"\u003E???????????? \u003Ci class=\"i-pen\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"btn btn-block btn-primary d-none\" ld=\"nview viewing\"\u003E???????????? \u003Ci class=\"i-pen\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"mb-4 d-none\" ld=\"nview\"\u003E\u003Cdiv class=\"d-flex align-items-center mb2\"\u003E\u003Cdiv class=\"flex-grow-1\"\u003E????????????\u003C\u002Fdiv\u003E\u003Ca class=\"text-sm text-danger\" ld=\"invalid\" href=\"#\"\u003E?????? \u003Cspan ld=\"remain\"\u003E1\u003C\u002Fspan\u003E ????????? \u003Ci class=\"i-dart-right\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003Cdiv class=\"text-sm text-success d-none\" ld=\"valid\"\u003E??????????????????\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"progress\"\u003E\u003Cdiv class=\"progress-bar progress-bar-striped progress-bar-animated\" ld=\"progress\" style=\"width:0%\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"mb-4\"\u003E\u003Clabel class=\"mb-1\"\u003E?????????\u003C\u002Flabel\u003E\u003Cdiv class=\"d-flex align-items-center\"\u003E";
pug_mixins["user"].call({
attributes: {"class": "mr-2","ld": "owner-avatar"}
});
pug_html = pug_html + "\u003Cspan ld=\"owner-name\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"mb-4\"\u003E\u003Clabel class=\"mb-1\"\u003E???????????????\u003C\u002Flabel\u003E\u003Cdiv class=\"font-weight-bold\" ld=\"brd-name\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"text-muted\" ld=\"grp-name\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"mb-4\" ld=\"has-detail\"\u003E\u003Clabel class=\"mb-1\"\u003E????????????\u003C\u002Flabel\u003E\u003Cdiv\u003E\u003Ca class=\"text-truncate\" ld=\"prj-link\"\u003E??????????????????\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"flex-grow-1\" style=\"width:0\"\u003E\u003C!--.d-none(ld=\"nview\"): div(ld=\"form-list\"): div(ld-each=\"field\")--\u003E\u003Cdiv class=\"block\"\u003E\u003Cdiv ld-each=\"field\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"w-100 h-100\" pd=\"init-loader\" style=\"background-image:url(\u002Fdash\u002Fassets\u002Fimg\u002Fc\u002Fplaceholder\u002Fcontent.svg);background-position:top center;background-repeat:repeat-y;\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"d-none\" ld=\"nview\"\u003E\u003Cdiv class=\"mx-4 text-muted\"\u003E\u003Cdiv class=\"d-none\" ld=\"to-fix\"\u003E\u003Cdiv class=\"d-flex align-items-center\"\u003E\u003Cdiv class=\"mr-2\"\u003E\u003Ci class=\"i-question text-primary\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"flex-grow-1\"\u003E?????????\u003Cspan ld=\"remain\"\u003E???\u003C\u002Fspan\u003E???????????????????????????????????????????????????????????????????????????\u003C\u002Fdiv\u003E\u003Cdiv class=\"btn btn-outline-primary disabled\"\u003E??????\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"d-none\" ld=\"to-publish\"\u003E\u003Cdiv class=\"d-flex align-items-center\"\u003E\u003Cdiv class=\"mr-2\"\u003E\u003Ci class=\"i-question text-primary\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"flex-grow-1\"\u003E?????????????????????????????????????????????????????????????????????\u003C\u002Fdiv\u003E\u003Cdiv class=\"btn btn-primary ml-2\" ld=\"submit\"\u003E??????\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"d-none\" ld=\"published\"\u003E\u003Cdiv class=\"d-flex align-items-center\"\u003E\u003Cdiv class=\"flex-grow-1\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"btn btn-outline-primary disabled\"\u003E???????????????\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
pug_mixins["nbr"](2);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"sticky w-1024 rwd mx-auto z-float\" style=\"bottom:2em\"\u003E\u003Cdiv class=\"d-none\" ld=\"to-publish\"\u003E\u003Cdiv class=\"alert alert-info d-flex align-items-center shadow-sm\"\u003E\u003Cdiv class=\"flex-grow-1\"\u003E\u003Cspan\u003E???????????????????????????\u003C\u002Fspan\u003E\u003Cspan class=\"d-none d-md-inline-block\"\u003E?????????????????????????????????????????????????????????\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv\u003E\u003Cdiv class=\"btn btn btn-primary mr-1\" ld=\"submit\"\u003E??????\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"d-none\" ld=\"to-fix\"\u003E\u003Cdiv class=\"alert alert-warning d-flex align-items-center shadow-sm\"\u003E\u003Cdiv class=\"flex-grow-1\"\u003E?????????\u003Cspan ld=\"remain\"\u003E???\u003C\u002Fspan\u003E???????????????????????????????????????????????????????????????????????????\u003C\u002Fdiv\u003E\u003Cdiv\u003E\u003Cdiv class=\"btn btn btn-warning mr-2\" ld=\"jump invalid\"\u003E?????????????????????\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
},
attributes: {"class": "w-1024 mx-auto rwd typeset heading-contrast"}
}, "prj");
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
pug_html = pug_html + "\u003Cscript type=\"module\"\u003Evar fields;fields={name:{meta:{title:\"????????????\",isRequired:true,desc:\"????????????????????????????????????\"}},thumb:{meta:{title:\"???????????????\",isRequired:true,desc:\"??????????????????????????????\"}},brief:{type:\"@makeform\u002Ftextarea\",meta:{title:\"????????????\",isRequired:true,desc:\"???????????????150 ??????????????????????????????????????????????????????????????????\",term:[{opset:\"length\",enabled:true,op:\"lte\",msg:\"?????????\",config:{val:150}}]}},representative:{meta:{title:\"???????????????\",isRequired:true,desc:\"???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????\"}},u22:{type:\"@makeform\u002Fradio\",meta:{title:\"??????????????????????????? U-22 ????????????\",isRequired:true,desc:\"??????????????????????????? https:\u002F\u002Fsch001.g0v.tw\u002Fmeans\u002F\",config:{values:[\"???\",\"???\"]}}},slackid:{meta:{title:\"?????????????????? g0v Slack ID\",isRequired:true,desc:\"???????????? g0v Slack ????????? https:\u002F\u002Fg0v.hackmd.io\u002F@jothon\u002Fjoing0vslack\"}},team:{type:\"@makeform\u002Ftextarea\",meta:{title:\"??????????????????\",isRequired:true,desc:\"??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????\"}},motivation:{type:\"@makeform\u002Ftextarea\",meta:{title:\"??????????????????????????????????????????\",isRequired:true,desc:\"???????????????????????????\"}},goal:{type:\"@makeform\u002Ftextarea\",meta:{title:\"?????????????????????????????????\",isRequired:true,desc:\"???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????\"}},ta:{type:\"@makeform\u002Ftextarea\",meta:{title:\"?????????????????????????????????????????????????????????????????????????????????\",isRequired:true}},diagram:{meta:{title:\"???????????????????????????????????????????????????\",isRequired:true,desc:\"?????????????????????????????????\",term:[{opset:\"string\",enabled:true,op:\"url\",msg:\"???????????????\"}]}},difficulties:{type:\"@makeform\u002Ftextarea\",meta:{title:\"??????????????????????????????????????????????????????????????????????????????????????????\",isRequired:true}},future:{type:\"@makeform\u002Ftextarea\",meta:{title:\"??????????????????????????????????????????????????????\",isRequired:true}},category:{type:\"@makeform\u002Fchoice\",meta:{title:\"?????????????????????????????????????????????\",isRequired:true,config:{values:[\"COVID-19 ????????????New Solution for Preventing Pandemic???\",\"???????????????????????????Solution of Distance Learing???\",\"??????????????????????????????Community Management & Infrastructure???\",\"???????????????Educational Content???\"]}}}};ldc.register([\"core\",\"prjForm\",\"viewlocals\"],function(r){var a,e,t,n,u,s,l,o,c,d,i;a=r.core,e=r.prjForm,t=r.viewlocals;n=t||{},u=n.prj,s=n.brd,l=n.owner;o=function(r){var e,t,n,o,i,c;t=[];for(n in o=fields){i=o[n];t.push({key:n,cfg:i})}e=t;c=new form.manager;this.ldcv=new ldcover({root:\"[ld-scope=prj-diff]\"});this.view={};this.view.global=new ldview({global:true,initRender:false,root:\"[ld-scope=prj]\",handler:{\"init-loader\":function(r){var e;e=r.node;return e.classList.toggle(\"d-none\",true)},content:function(r){var e;e=r.node;return e.classList.toggle(\"d-none\",false)}}});this.view.form=new ldview({initRender:false,root:\"[ld-scope=prj]\",handler:{\"owner-avatar\":{handler:{avatar:function(r){var e;e=r.node;return e.style.backgroundImage=\"url(\u002Fdash\u002Fs\u002Favatar\u002F\"+l.key+\".png)\"}}},\"owner-name\":function(r){var e;e=r.node;return e.innerText=l.displayname},\"prj-link\":function(r){var e;e=r.node;return e.setAttribute(\"href\",\"\u002Fprj\u002F\"+u.slug)},\"brd-name\":function(r){var e;e=r.node;return e.innerText=s.name||\"n\u002Fa\"},field:{list:function(){return e},key:function(r){return r.key},view:{init:{\"@\":function(r){var e,t,n,o;e=r.node,t=r.ctx;n=t.cfg;if(!n.meta.title){n.meta.title=t.key}e.classList.toggle(\"d-none\",true);o=n.type||\"@makeform\u002Finput\";return a.manager.from({name:o,version:\"main\"},{root:e,data:n.meta}).then(function(r){t.itf=r[\"interface\"];t.bi=r.instance;t.root=e;return c.add({widget:t.itf,path:t.key})})[\"catch\"](function(r){return Promise.reject(r)})}},handler:{\"@\":function(r){var e,t;e=r.node,t=r.ctx;t.itf.render();return e.classList.toggle(\"d-none\",false)}}}}}});this.slug=r.prj;this.prj={};return this};o.prototype=import$(Object.create(Object.prototype),{fetch:function(){var e=this;console.log(\"fetching project information ...\");console.log(\"fetching board form ...\");return ld$.fetch(\"\u002Fdash\u002Fapi\u002Fprj\u002F\"+this.slug,{method:\"GET\"},{type:\"json\"}).then(function(r){e.prj=r;return ld$.fetch(\"\u002Fdash\u002Fapi\u002Fbrd\u002F\"+e.prj.brd+\"\u002Fform\",{method:\"GET\"},{type:\"json\"})}).then(function(r){e.brd=r;e.grp=e.brd.detail.group.filter(function(r){return r.key===e.prj.grp})[0];if(!e.grp){return Promise.reject(new ldError(1017))}})},sharedb:function(){var r,e=this;console.log(\"initializing sharedb connection ...\");this.sdb=r=new sharedbWrapper({url:{scheme:window.location.protocol.replace(\":\",\"\"),domain:window.location.host},path:\"\u002Fdash\u002Fws\"});r.on(\"error\",function(){return ldcvmgr.toggle(\"not-sync\")});r.on(\"close\",function(){ldcvmgr.toggle(\"offline-retry\",true);return r.reconnect().then(function(){return e.getdoc()}).then(function(){return e.adapt()}).then(function(){return e.render()}).then(function(){return console.log(\"re-inited.\")}).then(function(){return ldcvmgr.toggle(\"offline-retry\",false)})});this.hubs={prj:new Hub({sdb:r})};return r.ready()},getdoc:function(){var o=this;console.log(\"get project document ...\");return this.sdb.get({id:\"prj\u002F\"+this.slug,watch:function(r,e){return o.hubs.prj.fire(\"change\",{ops:r,source:e})},create:function(){var r,e,t,n;r={answer:{}};e=(t=o.grp).form||(t.form={});((t=r.answer)[n=(e.purpose||(e.purpose={})).title||\"title\"]||(t[n]={})).content=o.prj.name;((t=r.answer)[n=e.purpose.description||\"description\"]||(t[n]={})).content=o.prj.description;return r}}).then(function(r){return o.hubs.prj.doc=r})},adapt:function(){return this.ctrlForm.adapt({hub:this.hubs.prj,path:[]})},initForm:function(){var r,t=this;this.ctrlForm=new e({root:\"[ld-scope=prj-form-use]\",viewMode:true,form:(r=this.grp).form||(r.form={}),grp:this.grp,brd:this.brd,prj:this.prj});this.ctrlForm.on(\"submit\",function(r){var e;e={payload:r,type:\"prj\",slug:t.prj.slug};ldcvmgr.toggle(\"publishing\",true);return auth.recaptcha.get().then(function(r){e.recaptcha=r;return ld$.fetch(\"\u002Fdash\u002Fapi\u002Fdetail\",{method:\"PUT\"},{json:e,type:\"json\"})})[\"finally\"](function(){return ldcvmgr.toggle(\"publishing\",false)}).then(function(){return t.prj.detail=JSON.parse(JSON.stringify(r))}).then(function(){return t.ctrlForm.render()}).then(function(){return ldcvmgr.toggle(\"prj-published\",true)})[\"catch\"](function(r){if(r.id===1012){return ldcvmgr.toggle(\"not-yet-available\")}else{return error(r)}})});return this.adapt()},render:function(){this.view.global.render();return this.view.form.render()},init:function(){var r=this;return this.view.form.init().then(function(){return r.render()})}});n=\u002F^\\\u002F(?:dash\\\u002F)?prj\\\u002F([^\u002F]+)\\\u002Fedit\u002F.exec(window.location.pathname)||[],c=n[0],d=n[1];i=new o({prj:d});return a.init().then(function(){return i.init()}).then(function(){return i.render()}).then(function(){return console.log(\"inited.\")}).then(function(){return a.loader.off()})[\"catch\"](a.error)});function import$(r,e){var t={}.hasOwnProperty;for(var n in e)if(t.call(e,n))r[n]=e[n];return r}\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";
    }.call(this, "Array" in locals_for_with ?
        locals_for_with.Array :
        typeof Array !== 'undefined' ? Array : undefined, "JSON" in locals_for_with ?
        locals_for_with.JSON :
        typeof JSON !== 'undefined' ? JSON : undefined, "b64img" in locals_for_with ?
        locals_for_with.b64img :
        typeof b64img !== 'undefined' ? b64img : undefined, "blockLoader" in locals_for_with ?
        locals_for_with.blockLoader :
        typeof blockLoader !== 'undefined' ? blockLoader : undefined, "c" in locals_for_with ?
        locals_for_with.c :
        typeof c !== 'undefined' ? c : undefined, "cssLoader" in locals_for_with ?
        locals_for_with.cssLoader :
        typeof cssLoader !== 'undefined' ? cssLoader : undefined, "decache" in locals_for_with ?
        locals_for_with.decache :
        typeof decache !== 'undefined' ? decache : undefined, "defer" in locals_for_with ?
        locals_for_with.defer :
        typeof defer !== 'undefined' ? defer : undefined, "escape" in locals_for_with ?
        locals_for_with.escape :
        typeof escape !== 'undefined' ? escape : undefined, "escjson" in locals_for_with ?
        locals_for_with.escjson :
        typeof escjson !== 'undefined' ? escjson : undefined, "ldui" in locals_for_with ?
        locals_for_with.ldui :
        typeof ldui !== 'undefined' ? ldui : undefined, "libLoader" in locals_for_with ?
        locals_for_with.libLoader :
        typeof libLoader !== 'undefined' ? libLoader : undefined, "parentName" in locals_for_with ?
        locals_for_with.parentName :
        typeof parentName !== 'undefined' ? parentName : undefined, "prefix" in locals_for_with ?
        locals_for_with.prefix :
        typeof prefix !== 'undefined' ? prefix : undefined, "scriptLoader" in locals_for_with ?
        locals_for_with.scriptLoader :
        typeof scriptLoader !== 'undefined' ? scriptLoader : undefined, "url" in locals_for_with ?
        locals_for_with.url :
        typeof url !== 'undefined' ? url : undefined, "version" in locals_for_with ?
        locals_for_with.version :
        typeof version !== 'undefined' ? version : undefined));
    ;;return pug_html;}; module.exports = template; })() 