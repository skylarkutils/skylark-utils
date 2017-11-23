/**
 * skylark-utils - An Elegant HTML5 JavaScript Library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.3-beta
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./skylark","./langx","./styler"],function(e,t,n){function r(e,n){return t.isArrayLike(e)||(e=[e]),n&&(e=W.call(e,function(e){return e.cloneNode(!0)})),t.flatten(e)}function i(e,t){var n=e.nodeName&&e.nodeName.toLowerCase();return void 0!==t?n===t.toLowerCase():n}function o(e){return i(e,"iframe")?e.contentDocument:e.childNodes}function a(e,n){if(void 0===n)return e.innerHTML;if(this.empty(e),n=n||"",t.isString(n)||t.isNumber(n))e.innerHTML=n;else if(t.isArrayLike(n))for(var r=0;r<n.length;r++)e.appendChild(n[r]);else e.appendChild(n)}function d(e,t){var n,r=this;return!S||1!==e.nodeType||t?e.cloneNode(t):t?void 0:(n=document.createElement(e.nodeName),each(r.getAttribs(e),function(t){r.setAttrib(n,t.nodeName,r.getAttrib(e,t.nodeName))}),n)}function c(e,n){var r=document.createElement(e);return n&&t.mixin(r,n),r}function u(e){if(I.test(e))return[c(RegExp.$1)];var t=H.test(e)&&RegExp.$1;t in V||(t="*");var n=V[t];return n.innerHTML=""+e,dom=z.call(n.childNodes),dom.forEach(function(e){n.removeChild(e)}),dom}function l(e,t){return p(t,e)}function f(e){return document.createTextNode(e)}function s(){return document}function h(e){for(;e.hasChildNodes();){var t=e.firstChild;e.removeChild(t)}return this}function p(e,t){if(document.documentElement.contains)return t.contains(e);for(;e;){if(t===e)return!0;e=e.parentNode}return!1}function m(e){return null!=e&&e.nodeType==e.DOCUMENT_NODE}function v(e){return e?9==e.nodeType?e:e.ownerDocument:document}function N(e){var t=v(e);return t.defaultView||t.parentWindow}function g(e,t,n){var i=e,o=i.parentNode;if(o)for(var a=r(t,n),i=i.nextSibling,d=0;d<a.length;d++)i?o.insertBefore(a[d],i):o.appendChild(a[d]);return this}function C(e,t,n){var i=e,o=i.parentNode;if(o)for(var a=r(t,n),d=0;d<a.length;d++)o.insertBefore(a[d],i);return this}function y(e,t,n){for(var i=e,o=i.firstChild,a=r(t,n),d=0;d<a.length;d++)o?i.insertBefore(a[d],o):i.appendChild(a[d]);return this}function E(e,t,n){for(var i=e,o=r(t,n),a=0;a<o.length;a++)i.appendChild(o[a]);return this}function b(e,t){var r=c("div",t);return n.css(r,{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:2147483647,opacity:.7}),e.appendChild(r),r}function w(e){return e&&e.parentNode&&e.parentNode.removeChild(e),this}function x(e,t){return t.parentNode.replaceChild(e,t),this}function T(e,t){t=t||{};var n,r=this,i=t.text,o=t.style,a=t.time,d=t.callback,c=this.createElement("div",{className:t.className||"throbber",style:o}),u=(b(c,{className:"overlay fade"}),this.createElement("div",{className:"throb"})),l=this.createTextNode(i||""),f=function(){n&&(clearTimeout(n),n=null),c&&(r.remove(c),c=null)},s=function(e){e&&e.text&&c&&(l.nodeValue=e.text)};u.appendChild(l),c.appendChild(u),e.appendChild(c);var h=function(){f(),d&&d()};return a&&(n=setTimeout(h,a)),{remove:f,update:s}}function A(e,t){t(e);for(var n=0,r=e.childNodes.length;n<r;n++)A(e.childNodes[n],t);return this}function D(e){for(var t=e.firstChild,n=e.children.length-1;n>0;n--)if(n>0){var r=e.children[n];e.insertBefore(r,t)}}function L(e,n){t.isString(n)&&(n=this.createFragment(n).firstChild),e.parentNode.insertBefore(n,e),n.appendChild(e)}function B(e,t){var n=z.call(e.childNodes);e.appendChild(t);for(var r=0;r<n.length;r++)t.appendChild(n[r]);return this}function k(e){var t=e.parentNode;if(t){if(this.isDoc(t.parentNode))return;t.parentNode.insertBefore(e,t)}}function M(){return M}var S=!!navigator.userAgent.match(/Trident/g)||!!navigator.userAgent.match(/MSIE/g),H=/^\s*<(\w+|!)[^>]*>/,I=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,O=document.createElement("div"),$=document.createElement("table"),F=document.createElement("tbody"),R=document.createElement("tr"),V={tr:F,tbody:$,thead:$,tfoot:$,td:R,th:R,"*":O},W=Array.prototype.map,z=Array.prototype.slice;return t.mixin(M,{clone:d,contents:o,createElement:c,createFragment:u,contains:l,createTextNode:f,doc:s,empty:h,html:a,isChildOf:p,isDoc:m,ownerDoc:v,ownerWindow:N,after:g,before:C,prepend:y,append:E,remove:w,replace:x,throb:T,traverse:A,reverse:D,wrapper:L,wrapperInner:B,unwrap:k}),e.noder=M});
//# sourceMappingURL=sourcemaps/noder.js.map
