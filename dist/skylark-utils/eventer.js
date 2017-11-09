/**
 * skylark-utils - An Elegant HTML5 JavaScript Library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.3-beta
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./skylark","./langx","./browser","./finder","./noder","./datax"],function(e,t,n,r,i,o){function s(e,n){return!n&&e.isDefaultPrevented||(n||(n=e),t.each(y,function(r,i){var o=n[r];e[r]=function(){return this[i]=t.returnTrue,o&&o.apply(n,arguments)},e[i]=t.returnFalse})),e}function a(e){var t=(""+e).split(".");return{type:t[0],ns:t.slice(1).sort().join(" ")}}function u(e){var t,n={originalEvent:e};for(t in e)"keyIdentifier"===t||w.test(t)||void 0===e[t]||(n[t]=e[t]);return s(n,e)}function c(e,n,r,i){var o=this;if(t.isPlainObject(n))return t.each(n,function(t,n){c(e,t,r,n)}),o;t.isString(r)||t.isFunction(i)||i===!1||(i=r,r=void 0),i===!1&&(i=t.returnFalse),"string"==typeof n&&(n=n.indexOf(",")>-1?n.split(","):n.split(/\s/));var s=F(e);return n&&n.forEach(function(e){s.unregister(e,i,{selector:r})}),this}function d(e,n,r,i,o,s){if(t.isPlainObject(n))return t.each(n,function(t,n){d(e,t,r,i,n,s)}),this;t.isString(r)||t.isFunction(o)||(o=i,i=r,r=void 0),t.isFunction(i)&&(o=i,i=void 0),o===!1&&(o=t.returnFalse),"string"==typeof n&&(n=n.indexOf(",")>-1?n.split(","):n.split(/\s/));var a=F(e);return n.forEach(function(e){return"ready"==e?p(o):void a.register(e,o,{data:i,selector:r,one:!!s})}),this}function f(e,t,n,r,i){return d(e,t,n,r,i,1),this}function l(e){return window.document.all&&(e.keyCode=0),e.preventDefault&&(e.preventDefault(),e.stopPropagation()),this}function v(e,t,n){var r;return r=t instanceof Event?t:_(t,n),r._args=n,(e.dispatchEvent||e.trigger).call(e,r),this}function p(e){return E.test(document.readyState)&&document.body?e():document.addEventListener("DOMContentLoaded",e,!1),this}function h(e){var t=o.data(e,"shortcuts");if(!t){t={},o.data(e,"shortcuts",t);var n=function(e,t){var n=t.metaKey||t.ctrlKey;if(e.ctrl==n&&e.alt==t.altKey&&e.shift==t.shiftKey&&(t.keyCode==e.keyCode||t.charCode&&t.charCode==e.charCode))return t.preventDefault(),"keydown"==t.type&&e.fn(t),!0};d(e,"keyup keypress keydown",function(e){if(!/INPUT|TEXTAREA/.test(e.target.nodeName))for(var r in t)n(t[r],e)})}return{add:function(e,n){var r;r=e.indexOf(",")>-1?e.toLowerCase().split(","):e.toLowerCase().split(" "),r.forEach(function(e){var r={fn:n,alt:!1,ctrl:!1,shift:!1};e.split("+").forEach(function(e){switch(e){case"alt":case"ctrl":case"shift":r[e]=!0;break;default:r.charCode=e.charCodeAt(0),r.keyCode=I[e]||e.toUpperCase().charCodeAt(0)}});var i=(r.ctrl?"ctrl":"")+","+(r.alt?"alt":"")+","+(r.shift?"shift":"")+","+r.keyCode;t[i]=r})}}}function g(){return g}var m=(t.mixin,t.each,Array.prototype.slice,t.uid),w=/^([A-Z]|returnValue$|layer[XY]$)/,y={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"},E=/complete|loaded|interactive/,_=function(){function e(e){var t=r[e];return t||(t=0),n[t]}var n=[window.CustomEvent,window.CompositionEvent,window.DragEvent,window.Event,window.FocusEvent,window.KeyboardEvent,window.MessageEvent,window.MouseEvent,window.MouseScrollEvent,window.MouseWheelEvent,window.MutationEvent,window.ProgressEvent,window.TextEvent,window.TouchEvent,window.UIEvent,window.WheelEvent],r={compositionstart:1,compositionend:1,compositionupdate:1,beforecopy:2,beforecut:2,beforepaste:2,copy:2,cut:2,paste:2,drag:2,dragend:2,dragenter:2,dragexit:2,dragleave:2,dragover:2,dragstart:2,drop:2,abort:3,change:3,error:3,selectionchange:3,submit:3,reset:3,focus:4,blur:4,focusin:4,focusout:4,keydown:5,keypress:5,keyup:5,message:6,click:7,contextmenu:7,dblclick:7,mousedown:7,mouseup:7,mousemove:7,mouseover:7,mouseout:7,mouseenter:7,mouseleave:7,textInput:12,touchstart:13,touchmove:13,touchend:13,load:14,resize:14,select:14,scroll:14,unload:14,wheel:15};return function(n,r){t.isString(n)?r=r||{}:(r=n,n=r.type);var i=a(n);n=i.type,r=t.mixin({bubbles:!1,cancelable:!0},r),i.ns&&(r.namespace=i.ns);var o=e(n),u=new o(n,r);return t.safeMixin(u,r),s(u)}}(),b="onfocusin"in window,k={focus:"focusin",blur:"focusout"},x={mouseenter:"mouseover",mouseleave:"mouseout"},C=function(e){return x[e]||b&&k[e]||e},P={},D=t.klass({init:function(e,t){this._target=e,this._event=t,this._bindings=[]},add:function(e,n){var o=this._bindings,s={fn:e,options:t.mixin({},n)};o.push(s);var a=this;if(!a._listener){a._listener=function(e){var n=this,i=u(e),s=e._args,c=(a._bindings,i.namespace);s=t.isDefined(s)?[i].concat(s):[i],o.some(function(e){var o=n;if(i.isImmediatePropagationStopped&&i.isImmediatePropagationStopped())return!0;var u=e.fn,d=e.options||{},f=d.selector,l=d.one,v=d.data;if(c&&c!=d.ns)return!1;if(f){if(o=r.closest(i.target,f),!o||o===n)return!1;t.mixin(i,{currentTarget:o,liveFired:n})}t.isDefined(v)&&(i.data=v),l&&a.remove(u,d);var p=u.apply(o,s);return p===!1&&(i.preventDefault(),i.stopPropagation()),!1})};var c=a._event;if(c in x){var d=a._listener;a._listener=function(e){var t=e.relatedTarget;if(!t||t!==this&&!i.contains(this,t))return d.apply(this,arguments)}}a._target.addEventListener?a._target.addEventListener(C(c),a._listener,!1):console.warn("invalid eventer object",a._target)}},remove:function(e,n){function r(e){return new RegExp("(?:^| )"+e.replace(" "," .* ?")+"(?: |$)")}n=t.mixin({},n);var i;n.ns&&(i=r(n.ns)),this._bindings=this._bindings.filter(function(t){var r=(!e||e===t.fn)&&(!i||i.test(t.options.ns))&&(!n.selector||n.selector==t.options.selector);return!r}),0==this._bindings.length&&(this._target.removeEventListener&&this._target.removeEventListener(C(this._event),this._listener,!1),this._listener=null)}}),S=t.klass({init:function(e){this._target=e,this._handler={}},register:function(e,n,r){var i=a(e);e=i.type;var o=this._handler;void 0===o[e]&&(o[e]=new D(this._target,e)),o[e].add(n,t.mixin({ns:i.ns},r))},unregister:function(e,n,r){var i=this._handler,o=a(e);e=o.type;var s=i[e];s&&s.remove(n,t.mixin({ns:o.ns},r))}}),F=function(e){var t=m(e),n=P[t];return n||(n=P[t]=new S(e)),n},I={"delete":46};return t.mixin(g,{create:_,off:c,on:d,one:f,proxy:u,ready:p,shortcuts:h,stop:l,trigger:v}),e.eventer=g});
//# sourceMappingURL=sourcemaps/eventer.js.map
