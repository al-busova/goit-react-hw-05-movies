"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[191],{191:function(e,t,n){n.r(t),n.d(t,{default:function(){return le}});var o,r,a,i,s=n(982),c=n(885),u=n(791),l=n(731),d=n(128),f=n(168),p=n(202),m=p.Z.div(o||(o=(0,f.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: ",";\n  padding-left: ",";\n  padding-top: ",";\n  padding-bottom: ",";\n  color: #fff;\n  background-color: ",";\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"])),(function(e){return e.theme.space[4]}),(function(e){return e.theme.space[4]}),(function(e){return e.theme.space[3]}),(function(e){return e.theme.space[3]}),(function(e){return e.theme.colors.accent})),g=p.Z.form(r||(r=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),v=p.Z.button(a||(a=(0,f.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n  svg {\n    display: block;\n    width: 30px;\n    height: 30px;\n    margin: auto;\n  }\n"]))),y=p.Z.input(i||(i=(0,f.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"])));function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function O(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=O(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}var C=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=O(e))&&(o&&(o+=" "),o+=t);return o},x=["theme","type"],_=["delay","staleId"];function I(e){return"number"===typeof e&&!isNaN(e)}function L(e){return"boolean"===typeof e}function w(e){return"string"===typeof e}function P(e){return"function"===typeof e}function k(e){return w(e)||P(e)?e:null}function R(e){return null!=e}function N(e){return(0,u.isValidElement)(e)||w(e)||P(e)||I(e)}var S={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},D={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function j(e){var t=e.enter,n=e.exit,o=e.appendPosition,r=void 0!==o&&o,a=e.collapse,i=void 0===a||a,c=e.collapseDuration,l=void 0===c?300:c;return function(e){var o=e.children,a=e.position,c=e.preventExitTransition,d=e.done,f=e.nodeRef,p=e.isIn,m=r?t+"--"+a:t,g=r?n+"--"+a:n,v=(0,u.useRef)(0);return(0,u.useLayoutEffect)((function(){var e=f.current,t=m.split(" "),n=function n(o){var r;o.target===f.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===v.current&&"animationcancel"!==o.type&&(r=e.classList).remove.apply(r,(0,s.Z)(t)))};!function(){var o;(o=e.classList).add.apply(o,(0,s.Z)(t)),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)}()}),[]),(0,u.useEffect)((function(){var e=f.current,t=function t(){e.removeEventListener("animationend",t),i?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all "+n+"ms",requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)}))}))}(e,d,l):d()};p||(c?t():(v.current=1,e.className+=" "+g,e.addEventListener("animationend",t)))}),[p]),u.createElement(u.Fragment,null,o)}}function B(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var M={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,(0,s.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(r)}))}},A=function(e){var t=e.theme,n=e.type,o=E(e,x);return u.createElement("svg",T({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-"+n+")"},o))};var z={info:function(e){return u.createElement(A,T({},e),u.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return u.createElement(A,T({},e),u.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return u.createElement(A,T({},e),u.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return u.createElement(A,T({},e),u.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return u.createElement("div",{className:"Toastify__spinner"})}};function F(e){var t=e.theme,n=e.type,o=e.isLoading,r=e.icon,a=null,i={theme:t,type:n};return!1===r||(P(r)?a=r(i):(0,u.isValidElement)(r)?a=(0,u.cloneElement)(r,i):w(r)||I(r)?a=r:o?a=z.spinner():function(e){return e in z}(n)&&(a=z[n](i))),a}function Z(e){var t=(0,u.useReducer)((function(e){return e+1}),0),n=(0,c.Z)(t,2)[1],o=(0,u.useState)([]),r=(0,c.Z)(o,2),a=r[0],i=r[1],l=(0,u.useRef)(null),d=(0,u.useRef)(new Map).current,f=function(e){return-1!==a.indexOf(e)},p=(0,u.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:f,getToast:function(e){return d.get(e)}}).current;function m(e){var t=e.containerId;!p.props.limit||t&&p.containerId!==t||(p.count-=p.queue.length,p.queue=[])}function g(e){i((function(t){return R(e)?t.filter((function(t){return t!==e})):[]}))}function v(){var e=p.queue.shift();h(e.toastContent,e.toastProps,e.staleId)}function y(e,t){var o=t.delay,r=t.staleId,a=E(t,_);if(N(e)&&!function(e){return!l.current||p.props.enableMultiContainer&&e.containerId!==p.props.containerId||d.has(e.toastId)&&null==e.updateId}(a)){var i=a.toastId,s=a.updateId,c=a.data,f=p.props,m=function(){return g(i)},y=null==s;y&&p.count++;var b,T,O={toastId:i,updateId:s,data:c,containerId:a.containerId,isLoading:a.isLoading,theme:a.theme||f.theme,icon:null!=a.icon?a.icon:f.icon,isIn:!1,key:a.key||p.toastKey++,type:a.type,closeToast:m,closeButton:a.closeButton,rtl:f.rtl,position:a.position||f.position,transition:a.transition||f.transition,className:k(a.className||f.toastClassName),bodyClassName:k(a.bodyClassName||f.bodyClassName),style:a.style||f.toastStyle,bodyStyle:a.bodyStyle||f.bodyStyle,onClick:a.onClick||f.onClick,pauseOnHover:L(a.pauseOnHover)?a.pauseOnHover:f.pauseOnHover,pauseOnFocusLoss:L(a.pauseOnFocusLoss)?a.pauseOnFocusLoss:f.pauseOnFocusLoss,draggable:L(a.draggable)?a.draggable:f.draggable,draggablePercent:a.draggablePercent||f.draggablePercent,draggableDirection:a.draggableDirection||f.draggableDirection,closeOnClick:L(a.closeOnClick)?a.closeOnClick:f.closeOnClick,progressClassName:k(a.progressClassName||f.progressClassName),progressStyle:a.progressStyle||f.progressStyle,autoClose:!a.isLoading&&(b=a.autoClose,T=f.autoClose,!1===b||I(b)&&b>0?b:T),hideProgressBar:L(a.hideProgressBar)?a.hideProgressBar:f.hideProgressBar,progress:a.progress,role:a.role||f.role,deleteToast:function(){var e=B(d.get(i),"removed");d.delete(i),M.emit(4,e);var t=p.queue.length;if(p.count=R(i)?p.count-1:p.count-p.displayedToast,p.count<0&&(p.count=0),t>0){var o=R(i)?1:p.props.limit;if(1===t||1===o)p.displayedToast++,v();else{var r=o>t?t:o;p.displayedToast=r;for(var a=0;a<r;a++)v()}}else n()}};O.iconOut=F(O),P(a.onOpen)&&(O.onOpen=a.onOpen),P(a.onClose)&&(O.onClose=a.onClose),O.closeButton=f.closeButton,!1===a.closeButton||N(a.closeButton)?O.closeButton=a.closeButton:!0===a.closeButton&&(O.closeButton=!N(f.closeButton)||f.closeButton);var C=e;(0,u.isValidElement)(e)&&!w(e.type)?C=(0,u.cloneElement)(e,{closeToast:m,toastProps:O,data:c}):P(e)&&(C=e({closeToast:m,toastProps:O,data:c})),f.limit&&f.limit>0&&p.count>f.limit&&y?p.queue.push({toastContent:C,toastProps:O,staleId:r}):I(o)?setTimeout((function(){h(C,O,r)}),o):h(C,O,r)}}function h(e,t,n){var o=t.toastId;n&&d.delete(n);var r={content:e,props:t};d.set(o,r),i((function(e){return[].concat((0,s.Z)(e),[o]).filter((function(e){return e!==n}))})),M.emit(4,B(r,null==r.props.updateId?"added":"updated"))}return(0,u.useEffect)((function(){return p.containerId=e.containerId,M.cancelEmit(3).on(0,y).on(1,(function(e){return l.current&&g(e)})).on(5,m).emit(2,p),function(){d.clear(),M.emit(3,p)}}),[]),(0,u.useEffect)((function(){p.props=e,p.isToastActive=f,p.displayedToast=a.length})),{getToastToRender:function(t){var n=new Map,o=Array.from(d.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:l,isToastActive:f}}function H(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function q(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function U(e){var t=(0,u.useState)(!1),n=(0,c.Z)(t,2),o=n[0],r=n[1],a=(0,u.useState)(!1),i=(0,c.Z)(a,2),s=i[0],l=i[1],d=(0,u.useRef)(null),f=(0,u.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,u.useRef)(e),m=e.autoClose,g=e.pauseOnHover,v=e.closeToast,y=e.onClick,h=e.closeOnClick;function b(t){if(e.draggable){f.didMove=!1,document.addEventListener("mousemove",C),document.addEventListener("mouseup",x),document.addEventListener("touchmove",C),document.addEventListener("touchend",x);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=H(t.nativeEvent),f.y=q(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function T(){if(f.boundingRect){var t=f.boundingRect,n=t.top,o=t.bottom,r=t.left,a=t.right;e.pauseOnHover&&f.x>=r&&f.x<=a&&f.y>=n&&f.y<=o?O():E()}}function E(){r(!0)}function O(){r(!1)}function C(t){var n=d.current;f.canDrag&&n&&(f.didMove=!0,o&&O(),f.x=H(t),f.y=q(t),"x"===e.draggableDirection?f.delta=f.x-f.start:f.delta=f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate"+e.draggableDirection+"("+f.delta+"px)",n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function x(){document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",x),document.removeEventListener("touchmove",C),document.removeEventListener("touchend",x);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate"+e.draggableDirection+"(0)",t.style.opacity="1"}}(0,u.useEffect)((function(){p.current=e})),(0,u.useEffect)((function(){return d.current&&d.current.addEventListener("d",E,{once:!0}),P(e.onOpen)&&e.onOpen((0,u.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;P(e.onClose)&&e.onClose((0,u.isValidElement)(e.children)&&e.children.props)}}),[]),(0,u.useEffect)((function(){return e.pauseOnFocusLoss&&function(){document.hasFocus()||O();window.addEventListener("focus",E),window.addEventListener("blur",O)}(),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",E),window.removeEventListener("blur",O))}}),[e.pauseOnFocusLoss]);var _={onMouseDown:b,onTouchStart:b,onMouseUp:T,onTouchEnd:T};return m&&g&&(_.onMouseEnter=O,_.onMouseLeave=E),h&&(_.onClick=function(e){y&&y(e),f.canCloseOnClick&&v()}),{playToast:E,pauseToast:O,isRunning:o,preventExitTransition:s,toastRef:d,eventHandlers:_}}function Q(e){var t=e.closeToast,n=e.theme,o=e.ariaLabel,r=void 0===o?"close":o;return u.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":r},u.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},u.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function V(e){var t=e.delay,n=e.isRunning,o=e.closeToast,r=e.type,a=e.hide,i=e.className,s=e.style,c=e.controlledProgress,l=e.progress,d=e.rtl,f=e.isIn,p=e.theme,m=T(T({},s),{},{animationDuration:t+"ms",animationPlayState:n?"running":"paused",opacity:a?0:1});c&&(m.transform="scaleX("+l+")");var g=C("Toastify__progress-bar",c?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+p,"Toastify__progress-bar--"+r,h({},"Toastify__progress-bar--rtl",d)),v=P(i)?i({rtl:d,type:r,defaultClassName:g}):C(g,i),y=h({},c&&l>=1?"onTransitionEnd":"onAnimationEnd",c&&l<1?null:function(){f&&o()});return u.createElement("div",T({role:"progressbar","aria-hidden":a?"true":"false","aria-label":"notification timer",className:v,style:m},y))}V.defaultProps={type:D.DEFAULT,hide:!1};var G=function(e){var t=U(e),n=t.isRunning,o=t.preventExitTransition,r=t.toastRef,a=t.eventHandlers,i=e.closeButton,s=e.children,c=e.autoClose,l=e.onClick,d=e.type,f=e.hideProgressBar,p=e.closeToast,m=e.transition,g=e.position,v=e.className,y=e.style,b=e.bodyClassName,E=e.bodyStyle,O=e.progressClassName,x=e.progressStyle,_=e.updateId,I=e.role,L=e.progress,w=e.rtl,k=e.toastId,R=e.deleteToast,N=e.isIn,S=e.isLoading,D=e.iconOut,j=e.theme,B=C("Toastify__toast","Toastify__toast-theme--"+j,"Toastify__toast--"+d,h({},"Toastify__toast--rtl",w)),M=P(v)?v({rtl:w,position:g,type:d,defaultClassName:B}):C(B,v),A=!!L,z={closeToast:p,type:d,theme:j},F=null;return!1===i||(F=P(i)?i(z):u.isValidElement(i)?u.cloneElement(i,z):Q(z)),u.createElement(m,{isIn:N,done:R,position:g,preventExitTransition:o,nodeRef:r},u.createElement("div",T(T({id:k,onClick:l,className:M},a),{},{style:y,ref:r}),u.createElement("div",T(T({},N&&{role:I}),{},{className:P(b)?b({type:d}):C("Toastify__toast-body",b),style:E}),null!=D&&u.createElement("div",{className:C("Toastify__toast-icon",h({},"Toastify--animate-icon Toastify__zoom-enter",!S))},D),u.createElement("div",null,s)),F,(c||A)&&u.createElement(V,T(T({},_&&!A?{key:"pb-"+_}:{}),{},{rtl:w,theme:j,delay:c,isRunning:n,isIn:N,closeToast:p,hide:f,type:d,style:x,className:O,controlledProgress:A,progress:L}))))},W=j({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),X=(j({enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0}),j({enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"}),j({enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"}),(0,u.forwardRef)((function(e,t){var n=Z(e),o=n.getToastToRender,r=n.containerRef,a=n.isToastActive,i=e.className,s=e.style,c=e.rtl,l=e.containerId;function d(e){var t=C("Toastify__toast-container","Toastify__toast-container--"+e,h({},"Toastify__toast-container--rtl",c));return P(i)?i({position:e,rtl:c,defaultClassName:t}):C(t,k(i))}return(0,u.useEffect)((function(){t&&(t.current=r.current)}),[]),u.createElement("div",{ref:r,className:"Toastify",id:l},o((function(e,t){var n=t.length?T({},s):T(T({},s),{},{pointerEvents:"none"});return u.createElement("div",{className:d(e),style:n,key:"container-"+e},t.map((function(e,n){var o=e.content,r=e.props;return u.createElement(G,T(T({},r),{},{isIn:a(r.toastId),style:T(T({},r.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-"+r.key}),o)})))})))})));X.displayName="ToastContainer",X.defaultProps={position:S.TOP_RIGHT,transition:W,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:Q,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var Y,K=new Map,J=[];function $(){return Math.random().toString(36).substring(2,9)}function ee(e){return e&&(w(e.toastId)||I(e.toastId))?e.toastId:$()}function te(e,t){return K.size>0?M.emit(0,e,t):J.push({content:e,options:t}),t.toastId}function ne(e,t){return T(T({},t),{},{type:t&&t.type||e,toastId:ee(t)})}function oe(e){return function(t,n){return te(t,ne(e,n))}}function re(e,t){return te(e,ne(D.DEFAULT,t))}re.loading=function(e,t){return te(e,ne(D.DEFAULT,T({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},re.promise=function(e,t,n){var o,r=t.pending,a=t.error,i=t.success;r&&(o=w(r)?re.loading(r,n):re.loading(r.render,T(T({},n),r)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},c=function(e,t,r){if(null!=t){var a=T(T(T({type:e},s),n),{},{data:r}),i=w(t)?{render:t}:t;return o?re.update(o,T(T({},a),i)):re(i.render,T(T({},a),i)),r}re.dismiss(o)},u=P(e)?e():e;return u.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),u},re.success=oe(D.SUCCESS),re.info=oe(D.INFO),re.error=oe(D.ERROR),re.warning=oe(D.WARNING),re.warn=re.warning,re.dark=function(e,t){return te(e,ne(D.DEFAULT,T({theme:"dark"},t)))},re.dismiss=function(e){K.size>0?M.emit(1,e):J=J.filter((function(t){return R(e)&&t.options.toastId!==e}))},re.clearWaitingQueue=function(e){return void 0===e&&(e={}),M.emit(5,e)},re.isActive=function(e){var t=!1;return K.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},re.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=K.get(n||Y);return o?o.getToast(e):null}(e,t);if(n){var o=n.props,r=n.content,a=T(T(T({},o),t),{},{toastId:t.toastId||e,updateId:$()});a.toastId!==e&&(a.staleId=e);var i=a.render||r;delete a.render,te(i,a)}}),0)},re.done=function(e){re.update(e,{progress:1})},re.onChange=function(e){return M.on(4,e),function(){M.off(4,e)}},re.POSITION=S,re.TYPE=D,M.on(2,(function(e){Y=e.containerId||e,K.set(Y,e),J.forEach((function(e){M.emit(0,e.content,e.options)})),J=[]})).on(3,(function(e){K.delete(e.containerId||e),0===K.size&&M.off(0).off(1).off(5)}));var ae=n(184),ie=function(e){var t=e.onSubmit,n=(0,u.useState)(""),o=(0,c.Z)(n,2),r=o[0],a=o[1];return(0,ae.jsx)(m,{children:(0,ae.jsxs)(g,{onSubmit:function(e){if(e.preventDefault(),""===r.trim())return t(r),re("Please, enter query.");t(r)},children:[(0,ae.jsx)(v,{type:"submit",children:(0,ae.jsx)(d.G4C,{})}),(0,ae.jsx)(y,{type:"text",value:r,autocomplete:"off",placeholder:"Search movie",onChange:function(e){a(e.currentTarget.value.toLowerCase())}})]})})},se=n(877),ce=n(65),ue=n(348),le=function(){var e,t=(0,u.useState)([]),n=(0,c.Z)(t,2),o=n[0],r=n[1],a=(0,u.useState)(null),i=(0,c.Z)(a,2),d=i[0],f=i[1],p=(0,l.lr)(),m=(0,c.Z)(p,2),g=m[0],v=m[1],y=null!==(e=g.get("query"))&&void 0!==e?e:"";(0,u.useEffect)((function(){""!==y?(0,ue.V0)(y,1).then((function(e){return e.results})).then((function(e){r((0,s.Z)(e))})).catch((function(e){return f(e.message)})):r([])}),[y]);var h=o.filter((function(e){return e.title.toLowerCase().includes(y.toLowerCase())}));return(0,ae.jsxs)("main",{children:[(0,ae.jsx)(ie,{onSubmit:function(e){v(""!==e.trim()?{query:e}:{})}}),d&&re.error(d),h.length>0?(0,ae.jsx)(ce.W2,{children:(0,ae.jsx)(se.e,{movies:h})}):(0,ae.jsx)("p",{children:"Please, enter query movie."}),(0,ae.jsx)(X,{autoClose:3e3})]})}}}]);
//# sourceMappingURL=191.5fc43883.chunk.js.map