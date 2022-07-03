"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[587],{5587:function(n,e,t){t.d(e,{H:function(){return _n}});var r=t(9388),i=t(2791),o=t(8597),a=t(131),u=t(8174);var l=t(1112);function s(n,e){if(!Array.isArray(e))return!1;var t=e.length;if(t!==n.length)return!1;for(var r=0;r<t;r++)if(e[r]!==n[r])return!1;return!0}var c,v=t(5530);!function(n){n.Animate="animate",n.Hover="whileHover",n.Tap="whileTap",n.Drag="whileDrag",n.Focus="whileFocus",n.InView="whileInView",n.Exit="exit"}(c||(c={}));var f=t(9103),d=[c.Animate,c.InView,c.Focus,c.Hover,c.Tap,c.Drag,c.Exit],p=(0,r.ev)([],(0,r.CR)(d),!1).reverse(),m=d.length;function g(n){var e=function(n){return function(e){return Promise.all(e.map((function(e){var t=e.animation,r=e.options;return(0,v.d5)(n,t,r)})))}}(n),t=function(){var n;return(n={})[c.Animate]=h(!0),n[c.InView]=h(),n[c.Hover]=h(),n[c.Tap]=h(),n[c.Drag]=h(),n[c.Focus]=h(),n[c.Exit]=h(),n}(),i={},a=!0,u=function(e,t){var i=(0,f.x5)(n,t);if(i){i.transition;var o=i.transitionEnd,a=(0,r._T)(i,["transition","transitionEnd"]);e=(0,r.pi)((0,r.pi)((0,r.pi)({},e),a),o)}return e};function d(c,v){for(var d,g=n.getProps(),h=n.getVariantContext(!0)||{},w=[],V=new Set,y={},E=1/0,A=function(e){var i=p[e],m=t[i],A=null!==(d=g[i])&&void 0!==d?d:h[i],b=(0,f.$L)(A),x=i===v?m.isActive:null;!1===x&&(E=e);var C=A===h[i]&&A!==g[i]&&b;if(C&&a&&n.manuallyAnimateOnMount&&(C=!1),m.protectedKeys=(0,r.pi)({},y),!m.isActive&&null===x||!A&&!m.prevProp||(0,o.H)(A)||"boolean"===typeof A)return"continue";var T=function(n,e){if("string"===typeof e)return e!==n;if((0,f.A0)(e))return!s(e,n);return!1}(m.prevProp,A),P=T||i===v&&m.isActive&&!C&&b||e>E&&b,S=Array.isArray(A)?A:[A],R=S.reduce(u,{});!1===x&&(R={});var I=m.prevResolvedValues,F=void 0===I?{}:I,k=(0,r.pi)((0,r.pi)({},F),R),B=function(n){P=!0,V.delete(n),m.needsAnimating[n]=!0};for(var M in k){var L=R[M],O=F[M];y.hasOwnProperty(M)||(L!==O?(0,l.C)(L)&&(0,l.C)(O)?!s(L,O)||T?B(M):m.protectedKeys[M]=!0:void 0!==L?B(M):V.add(M):void 0!==L&&V.has(M)?B(M):m.protectedKeys[M]=!0)}m.prevProp=A,m.prevResolvedValues=R,m.isActive&&(y=(0,r.pi)((0,r.pi)({},y),R)),a&&n.blockInitialAnimation&&(P=!1),P&&!C&&w.push.apply(w,(0,r.ev)([],(0,r.CR)(S.map((function(n){return{animation:n,options:(0,r.pi)({type:i},c)}}))),!1))},b=0;b<m;b++)A(b);if(i=(0,r.pi)({},y),V.size){var x={};V.forEach((function(e){var t=n.getBaseTarget(e);void 0!==t&&(x[e]=t)})),w.push({animation:x})}var C=Boolean(w.length);return a&&!1===g.initial&&!n.manuallyAnimateOnMount&&(C=!1),a=!1,C?e(w):Promise.resolve()}return{isAnimated:function(n){return void 0!==i[n]},animateChanges:d,setActive:function(e,r,i){var o;if(t[e].isActive===r)return Promise.resolve();null===(o=n.variantChildren)||void 0===o||o.forEach((function(n){var t;return null===(t=n.animationState)||void 0===t?void 0:t.setActive(e,r)})),t[e].isActive=r;var a=d(i,e);for(var u in t)t[u].protectedKeys={};return a},setAnimateFunction:function(t){e=t(n)},getState:function(){return t}}}function h(n){return void 0===n&&(n=!1),{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}var w=function(n){return function(e){return n(e),null}},V={animation:w((function(n){var e=n.visualElement,t=n.animate;e.animationState||(e.animationState=g(e)),(0,o.H)(t)&&(0,i.useEffect)((function(){return t.subscribe(e)}),[t])})),exit:w((function(n){var e=n.custom,t=n.visualElement,o=(0,r.CR)(function(){var n=(0,i.useContext)(a.O);if(null===n)return[!0,null];var e=n.isPresent,t=n.onExitComplete,r=n.register,o=(0,u.M)();return(0,i.useEffect)((function(){return r(o)}),[]),!e&&t?[!1,function(){return null===t||void 0===t?void 0:t(o)}]:[!0]}(),2),l=o[0],s=o[1],v=(0,i.useContext)(a.O);(0,i.useEffect)((function(){var n,r;t.isPresent=l;var i=null===(n=t.animationState)||void 0===n?void 0:n.setActive(c.Exit,!l,{custom:null!==(r=null===v||void 0===v?void 0:v.custom)&&void 0!==r?r:e});!l&&(null===i||void 0===i||i.then(s))}),[l])}))};function y(n,e,t,r){return void 0===r&&(r={passive:!0}),n.addEventListener(e,t,r),function(){return n.removeEventListener(e,t)}}function E(n,e,t,r){(0,i.useEffect)((function(){var i=n.current;if(t&&i)return y(i,e,t,r)}),[n,e,t,r])}function A(n){return!!n.touches}var b={pageX:0,pageY:0};function x(n,e){void 0===e&&(e="page");var t=n.touches[0]||n.changedTouches[0]||b;return{x:t[e+"X"],y:t[e+"Y"]}}function C(n,e){return void 0===e&&(e="page"),{x:n[e+"X"],y:n[e+"Y"]}}var T=function(n,e){void 0===e&&(e=!1);var t,r=function(e){return n(e,function(n,e){return void 0===e&&(e="page"),{point:A(n)?x(n,e):C(n,e)}}(e))};return e?(t=r,function(n){var e=n instanceof MouseEvent;(!e||e&&0===n.button)&&t(n)}):r},P=t(6219),S={pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointercancel:"mousecancel",pointerover:"mouseover",pointerout:"mouseout",pointerenter:"mouseenter",pointerleave:"mouseleave"},R={pointerdown:"touchstart",pointermove:"touchmove",pointerup:"touchend",pointercancel:"touchcancel"};function I(n){return P.j&&null===window.onpointerdown?n:P.j&&null===window.ontouchstart?R[n]:P.j&&null===window.onmousedown?S[n]:n}function F(n,e,t,r){return y(n,I(e),T(t,"pointerdown"===e),r)}function k(n,e,t,r){return E(n,I(e),t&&T(t,"pointerdown"===e),r)}function B(n){var e=null;return function(){return null===e&&(e=n,function(){e=null})}}var M=B("dragHorizontal"),L=B("dragVertical");function O(){var n=function(n){var e=!1;if("y"===n)e=L();else if("x"===n)e=M();else{var t=M(),r=L();t&&r?e=function(){t(),r()}:(t&&t(),r&&r())}return e}(!0);return!n||(n(),!1)}function H(n,e,t){return function(r,i){var o;(function(n){return"undefined"!==typeof PointerEvent&&n instanceof PointerEvent?!("mouse"!==n.pointerType):n instanceof MouseEvent})(r)&&!O()&&(null===(o=n.animationState)||void 0===o||o.setActive(c.Hover,e),null===t||void 0===t||t(r,i))}}var j=function n(e,t){return!!t&&(e===t||n(e,t.parentElement))},N=t(1475),U=t(2914);var z=t(9606),D=new Set;var K=new WeakMap,_=new WeakMap,Y=function(n){var e;null===(e=K.get(n.target))||void 0===e||e(n)},q=function(n){n.forEach(Y)};function $(n,e,t){var i=function(n){var e=n.root,t=(0,r._T)(n,["root"]),i=e||document;_.has(i)||_.set(i,{});var o=_.get(i),a=JSON.stringify(t);return o[a]||(o[a]=new IntersectionObserver(q,(0,r.pi)({root:e},t))),o[a]}(e);return K.set(n,t),i.observe(n),function(){K.delete(n),i.unobserve(n)}}var W={some:0,all:1};function Z(n,e,t,r){var o=r.root,a=r.margin,u=r.amount,l=void 0===u?"some":u,s=r.once;(0,i.useEffect)((function(){if(n){var r={root:null===o||void 0===o?void 0:o.current,rootMargin:a,threshold:"number"===typeof l?l:W[l]};return $(t.getInstance(),r,(function(n){var r,i=n.isIntersecting;if(e.isInView!==i&&(e.isInView=i,!s||i||!e.hasEnteredView)){i&&(e.hasEnteredView=!0),null===(r=t.animationState)||void 0===r||r.setActive(c.InView,i);var o=t.getProps(),a=i?o.onViewportEnter:o.onViewportLeave;null===a||void 0===a||a(n)}}))}}),[n,o,a,l])}function X(n,e,t,r){var o=r.fallback,a=void 0===o||o;(0,i.useEffect)((function(){var r,i;n&&a&&("production"!==z.O&&(r="IntersectionObserver not available on this device. whileInView animations will trigger on mount.",!1||D.has(r)||(console.warn(r),i&&console.warn(i),D.add(r))),requestAnimationFrame((function(){var n;e.hasEnteredView=!0;var r=t.getProps().onViewportEnter;null===r||void 0===r||r(null),null===(n=t.animationState)||void 0===n||n.setActive(c.InView,!0)})))}),[n])}var G={inView:w((function(n){var e=n.visualElement,t=n.whileInView,r=n.onViewportEnter,o=n.onViewportLeave,a=n.viewport,u=void 0===a?{}:a,l=(0,i.useRef)({hasEnteredView:!1,isInView:!1}),s=Boolean(t||r||o);u.once&&l.current.hasEnteredView&&(s=!1),("undefined"===typeof IntersectionObserver?X:Z)(s,l.current,e,u)})),tap:w((function(n){var e=n.onTap,t=n.onTapStart,r=n.onTapCancel,o=n.whileTap,a=n.visualElement,u=e||t||r||o,l=(0,i.useRef)(!1),s=(0,i.useRef)(null),v={passive:!(t||e||r||g)};function f(){var n;null===(n=s.current)||void 0===n||n.call(s),s.current=null}function d(){var n;return f(),l.current=!1,null===(n=a.animationState)||void 0===n||n.setActive(c.Tap,!1),!O()}function p(n,t){d()&&(j(a.getInstance(),n.target)?null===e||void 0===e||e(n,t):null===r||void 0===r||r(n,t))}function m(n,e){d()&&(null===r||void 0===r||r(n,e))}function g(n,e){var r;f(),l.current||(l.current=!0,s.current=(0,U.z)(F(window,"pointerup",p,v),F(window,"pointercancel",m,v)),null===(r=a.animationState)||void 0===r||r.setActive(c.Tap,!0),null===t||void 0===t||t(n,e))}k(a,"pointerdown",u?g:void 0,v),(0,N.z)(f)})),focus:w((function(n){var e=n.whileFocus,t=n.visualElement;E(t,"focus",e?function(){var n;null===(n=t.animationState)||void 0===n||n.setActive(c.Focus,!0)}:void 0),E(t,"blur",e?function(){var n;null===(n=t.animationState)||void 0===n||n.setActive(c.Focus,!1)}:void 0)})),hover:w((function(n){var e=n.onHoverStart,t=n.onHoverEnd,r=n.whileHover,i=n.visualElement;k(i,"pointerenter",e||r?H(i,!0,e):void 0,{passive:!e}),k(i,"pointerleave",t||r?H(i,!1,t):void 0,{passive:!t})}))},J=t(2968),Q=t(937),nn=t(1453),en=t(8481),tn=["LayoutMeasure","BeforeLayoutMeasure","LayoutUpdate","ViewportBoxUpdate","Update","Render","AnimationComplete","LayoutAnimationComplete","AnimationStart","LayoutAnimationStart","SetAxisTarget","Unmount"];var rn=function(n){var e=n.treeType,t=void 0===e?"":e,i=n.build,o=n.getBaseTarget,a=n.makeTargetAnimatable,u=n.measureViewportBox,l=n.render,s=n.readValueFromInstance,c=n.removeValueFromRenderState,v=n.sortNodePosition,d=n.scrapeMotionValuesFromProps;return function(n,e){var p=n.parent,m=n.props,g=n.presenceId,h=n.blockInitialAnimation,w=n.visualState,V=n.shouldReduceMotion;void 0===e&&(e={});var y,E,A=!1,b=w.latestValues,x=w.renderState,C=function(){var n=tn.map((function(){return new en.L})),e={},t={clearAllListeners:function(){return n.forEach((function(n){return n.clear()}))},updatePropListeners:function(n){tn.forEach((function(r){var i,o="on"+r,a=n[o];null===(i=e[r])||void 0===i||i.call(e),a&&(e[r]=t[o](a))}))}};return n.forEach((function(n,e){t["on"+tn[e]]=function(e){return n.add(e)},t["notify"+tn[e]]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.notify.apply(n,(0,r.ev)([],(0,r.CR)(e),!1))}})),t}(),T=new Map,P=new Map,S={},R=(0,r.pi)({},b);function I(){y&&A&&(F(),l(y,x,m.style,N.projection))}function F(){i(N,x,b,e,m)}function k(){C.notifyUpdate(b)}function B(n,e){var t=e.onChange((function(e){b[n]=e,m.onUpdate&&J.ZP.update(k,!1,!0)})),r=e.onRenderRequest(N.scheduleRender);P.set(n,(function(){t(),r()}))}var M=d(m);for(var L in M){var O=M[L];void 0!==b[L]&&(0,nn.i)(O)&&O.set(b[L],!1)}var H=(0,f.O6)(m),j=(0,f.e8)(m),N=(0,r.pi)((0,r.pi)({treeType:t,current:null,depth:p?p.depth+1:0,parent:p,children:new Set,presenceId:g,shouldReduceMotion:V,variantChildren:j?new Set:void 0,isVisible:void 0,manuallyAnimateOnMount:Boolean(null===p||void 0===p?void 0:p.isMounted()),blockInitialAnimation:h,isMounted:function(){return Boolean(y)},mount:function(n){A=!0,y=N.current=n,N.projection&&N.projection.mount(n),j&&p&&!H&&(E=null===p||void 0===p?void 0:p.addVariantChild(N)),T.forEach((function(n,e){return B(e,n)})),null===p||void 0===p||p.children.add(N),N.setProps(m)},unmount:function(){var n;null===(n=N.projection)||void 0===n||n.unmount(),J.qY.update(k),J.qY.render(I),P.forEach((function(n){return n()})),null===E||void 0===E||E(),null===p||void 0===p||p.children.delete(N),C.clearAllListeners(),y=void 0,A=!1},addVariantChild:function(n){var e,t=N.getClosestVariantNode();if(t)return null===(e=t.variantChildren)||void 0===e||e.add(n),function(){return t.variantChildren.delete(n)}},sortNodePosition:function(n){return v&&t===n.treeType?v(N.getInstance(),n.getInstance()):0},getClosestVariantNode:function(){return j?N:null===p||void 0===p?void 0:p.getClosestVariantNode()},getLayoutId:function(){return m.layoutId},getInstance:function(){return y},getStaticValue:function(n){return b[n]},setStaticValue:function(n,e){return b[n]=e},getLatestValues:function(){return b},setVisibility:function(n){N.isVisible!==n&&(N.isVisible=n,N.scheduleRender())},makeTargetAnimatable:function(n,e){return void 0===e&&(e=!0),a(N,n,m,e)},measureViewportBox:function(){return u(y,m)},addValue:function(n,e){N.hasValue(n)&&N.removeValue(n),T.set(n,e),b[n]=e.get(),B(n,e)},removeValue:function(n){var e;T.delete(n),null===(e=P.get(n))||void 0===e||e(),P.delete(n),delete b[n],c(n,x)},hasValue:function(n){return T.has(n)},getValue:function(n,e){var t=T.get(n);return void 0===t&&void 0!==e&&(t=(0,Q.B)(e),N.addValue(n,t)),t},forEachValue:function(n){return T.forEach(n)},readValue:function(n){var t;return null!==(t=b[n])&&void 0!==t?t:s(y,n,e)},setBaseTarget:function(n,e){R[n]=e},getBaseTarget:function(n){if(o){var e=o(m,n);if(void 0!==e&&!(0,nn.i)(e))return e}return R[n]}},C),{build:function(){return F(),x},scheduleRender:function(){J.ZP.render(I,!1,!0)},syncRender:I,setProps:function(n){(n.transformTemplate||m.transformTemplate)&&N.scheduleRender(),m=n,C.updatePropListeners(n),S=function(n,e,t){var r;for(var i in e){var o=e[i],a=t[i];if((0,nn.i)(o))n.addValue(i,o);else if((0,nn.i)(a))n.addValue(i,(0,Q.B)(o));else if(a!==o)if(n.hasValue(i)){var u=n.getValue(i);!u.hasAnimated&&u.set(o)}else n.addValue(i,(0,Q.B)(null!==(r=n.getStaticValue(i))&&void 0!==r?r:o))}for(var i in t)void 0===e[i]&&n.removeValue(i);return e}(N,d(m),S)},getProps:function(){return m},getVariant:function(n){var e;return null===(e=m.variants)||void 0===e?void 0:e[n]},getDefaultTransition:function(){return m.transition},getTransformPagePoint:function(){return m.transformPagePoint},getVariantContext:function(n){if(void 0===n&&(n=!1),n)return null===p||void 0===p?void 0:p.getVariantContext();if(!H){var e=(null===p||void 0===p?void 0:p.getVariantContext())||{};return void 0!==m.initial&&(e.initial=m.initial),e}for(var t={},r=0;r<an;r++){var i=on[r],o=m[i];((0,f.$L)(o)||!1===o)&&(t[i]=o)}return t}});return N}},on=(0,r.ev)(["initial"],(0,r.CR)(d),!1),an=on.length,un=t(4405),ln=t(9634),sn=t(4558),cn=t(5646);function vn(n){return"string"===typeof n&&n.startsWith("var(--")}var fn=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function dn(n,e,t){void 0===t&&(t=1),(0,cn.k)(t<=4,'Max CSS variable fallback depth detected in property "'.concat(n,'". This may indicate a circular fallback dependency.'));var i=(0,r.CR)(function(n){var e=fn.exec(n);if(!e)return[,];var t=(0,r.CR)(e,3);return[t[1],t[2]]}(n),2),o=i[0],a=i[1];if(o){var u=window.getComputedStyle(e).getPropertyValue(o);return u?u.trim():vn(a)?dn(a,e,t+1):a}}var pn,mn=t(97),gn=t(4468),hn=t(2284),wn=t(9997),Vn=new Set(["width","height","top","left","right","bottom","x","y"]),yn=function(n){return Vn.has(n)},En=function(n,e){n.set(e,!1),n.set(e)},An=function(n){return n===mn.Rx||n===gn.px};!function(n){n.width="width",n.height="height",n.left="left",n.right="right",n.top="top",n.bottom="bottom"}(pn||(pn={}));var bn=function(n,e){return parseFloat(n.split(", ")[e])},xn=function(n,e){return function(t,r){var i=r.transform;if("none"===i||!i)return 0;var o=i.match(/^matrix3d\((.+)\)$/);if(o)return bn(o[1],e);var a=i.match(/^matrix\((.+)\)$/);return a?bn(a[1],n):0}},Cn=new Set(["x","y","z"]),Tn=hn.Gl.filter((function(n){return!Cn.has(n)}));var Pn={width:function(n,e){var t=n.x,r=e.paddingLeft,i=void 0===r?"0":r,o=e.paddingRight,a=void 0===o?"0":o;return t.max-t.min-parseFloat(i)-parseFloat(a)},height:function(n,e){var t=n.y,r=e.paddingTop,i=void 0===r?"0":r,o=e.paddingBottom,a=void 0===o?"0":o;return t.max-t.min-parseFloat(i)-parseFloat(a)},top:function(n,e){var t=e.top;return parseFloat(t)},left:function(n,e){var t=e.left;return parseFloat(t)},bottom:function(n,e){var t=n.y,r=e.top;return parseFloat(r)+(t.max-t.min)},right:function(n,e){var t=n.x,r=e.left;return parseFloat(r)+(t.max-t.min)},x:xn(4,13),y:xn(5,14)},Sn=function(n,e,t,i){void 0===t&&(t={}),void 0===i&&(i={}),e=(0,r.pi)({},e),i=(0,r.pi)({},i);var o=Object.keys(e).filter(yn),a=[],u=!1,s=[];if(o.forEach((function(r){var o=n.getValue(r);if(n.hasValue(r)){var c,v=t[r],f=(0,wn.C)(v),d=e[r];if((0,l.C)(d)){var p=d.length,m=null===d[0]?1:0;v=d[m],f=(0,wn.C)(v);for(var g=m;g<p;g++)c?(0,cn.k)((0,wn.C)(d[g])===c,"All keyframes must be of the same type"):(c=(0,wn.C)(d[g]),(0,cn.k)(c===f||An(f)&&An(c),"Keyframes must be of the same dimension as the current value"))}else c=(0,wn.C)(d);if(f!==c)if(An(f)&&An(c)){var h=o.get();"string"===typeof h&&o.set(parseFloat(h)),"string"===typeof d?e[r]=parseFloat(d):Array.isArray(d)&&c===gn.px&&(e[r]=d.map(parseFloat))}else(null===f||void 0===f?void 0:f.transform)&&(null===c||void 0===c?void 0:c.transform)&&(0===v||0===d)?0===v?o.set(c.transform(v)):e[r]=f.transform(d):(u||(a=function(n){var e=[];return Tn.forEach((function(t){var r=n.getValue(t);void 0!==r&&(e.push([t,r.get()]),r.set(t.startsWith("scale")?1:0))})),e.length&&n.syncRender(),e}(n),u=!0),s.push(r),i[r]=void 0!==i[r]?i[r]:e[r],En(o,d))}})),s.length){var c=s.indexOf("height")>=0?window.pageYOffset:null,v=function(n,e,t){var r=e.measureViewportBox(),i=e.getInstance(),o=getComputedStyle(i),a=o.display,u={};"none"===a&&e.setStaticValue("display",n.display||"block"),t.forEach((function(n){u[n]=Pn[n](r,o)})),e.syncRender();var l=e.measureViewportBox();return t.forEach((function(t){var r=e.getValue(t);En(r,u[t]),n[t]=Pn[t](l,o)})),n}(e,n,s);return a.length&&a.forEach((function(e){var t=(0,r.CR)(e,2),i=t[0],o=t[1];n.getValue(i).set(o)})),n.syncRender(),null!==c&&window.scrollTo({top:c}),{target:v,transitionEnd:i}}return{target:e,transitionEnd:i}};function Rn(n,e,t,r){return function(n){return Object.keys(n).some(yn)}(e)?Sn(n,e,t,r):{target:e,transitionEnd:r}}var In=function(n,e,t,i){var o=function(n,e,t){var i,o=(0,r._T)(e,[]),a=n.getInstance();if(!(a instanceof Element))return{target:o,transitionEnd:t};for(var u in t&&(t=(0,r.pi)({},t)),n.forEachValue((function(n){var e=n.get();if(vn(e)){var t=dn(e,a);t&&n.set(t)}})),o){var l=o[u];if(vn(l)){var s=dn(l,a);s&&(o[u]=s,t&&(null!==(i=t[u])&&void 0!==i||(t[u]=l)))}}return{target:o,transitionEnd:t}}(n,e,i);return Rn(n,e=o.target,t,i=o.transitionEnd)},Fn=t(2034),kn=t(7047),Bn=t(2619);function Mn(n,e){return function(n){var e=n.top;return{x:{min:n.left,max:n.right},y:{min:e,max:n.bottom}}}(function(n,e){if(!e)return n;var t=e({x:n.left,y:n.top}),r=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:r.y,right:r.x}}(n.getBoundingClientRect(),e))}var Ln={treeType:"dom",readValueFromInstance:function(n,e){if((0,hn._c)(e)){var t=(0,Bn.A)(e);return t&&t.default||0}var r,i=(r=n,window.getComputedStyle(r));return((0,sn.o)(e)?i.getPropertyValue(e):i[e])||0},sortNodePosition:function(n,e){return 2&n.compareDocumentPosition(e)?1:-1},getBaseTarget:function(n,e){var t;return null===(t=n.style)||void 0===t?void 0:t[e]},measureViewportBox:function(n,e){return Mn(n,e.transformPagePoint)},resetTransform:function(n,e,t){var r=t.transformTemplate;e.style.transform=r?r({},""):"none",n.scheduleRender()},restoreTransform:function(n,e){n.style.transform=e.style.transform},removeValueFromRenderState:function(n,e){var t=e.vars,r=e.style;delete t[n],delete r[n]},makeTargetAnimatable:function(n,e,t,i){var o=t.transformValues;void 0===i&&(i=!0);var a=e.transition,u=e.transitionEnd,l=(0,r._T)(e,["transition","transitionEnd"]),s=(0,un.P$)(l,a||{},n);if(o&&(u&&(u=o(u)),l&&(l=o(l)),s&&(s=o(s))),i){(0,un.GJ)(n,l,s);var c=In(n,l,s,u);u=c.transitionEnd,l=c.target}return(0,r.pi)({transition:a,transitionEnd:u},l)},scrapeMotionValuesFromProps:Fn.U,build:function(n,e,t,r,i){void 0!==n.isVisible&&(e.style.visibility=n.isVisible?"visible":"hidden"),(0,ln.r)(e,t,r,i.transformTemplate)},render:kn.N},On=rn(Ln),Hn=t(8927),jn=t(919),Nn=t(2673),Un=t(28),zn=t(9014),Dn=rn((0,r.pi)((0,r.pi)({},Ln),{getBaseTarget:function(n,e){return n[e]},readValueFromInstance:function(n,e){var t;return(0,hn._c)(e)?(null===(t=(0,Bn.A)(e))||void 0===t?void 0:t.default)||0:(e=Un.s.has(e)?e:(0,Nn.D)(e),n.getAttribute(e))},scrapeMotionValuesFromProps:Hn.U,build:function(n,e,t,r,i){(0,jn.i)(e,t,r,i.transformTemplate)},render:zn.K})),Kn=t(7171),_n=(0,r.pi)((0,r.pi)({renderer:function(n,e){return(0,Kn.q)(n)?Dn(e,{enableHardwareAcceleration:!1}):On(e,{enableHardwareAcceleration:!0})}},V),G)}}]);
//# sourceMappingURL=587.74e29527.chunk.js.map