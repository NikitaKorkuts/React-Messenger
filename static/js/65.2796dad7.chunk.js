"use strict";(self.webpackChunkmessanger=self.webpackChunkmessanger||[]).push([[65],{8313:function(e,t,n){n.d(t,{r:function(){return d}});var s,r=n(2791),o=["title","titleId"];function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function l(e,t){var n=e.title,l=e.titleId,d=i(e,o);return r.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",ref:t,"aria-labelledby":l},d),n?r.createElement("title",{id:l},n):null,s||(s=r.createElement("path",{d:"M0 12.116l2.053-1.897c2.401 1.162 3.924 2.045 6.622 3.969 5.073-5.757 8.426-8.678 14.657-12.555l.668 1.536c-5.139 4.484-8.902 9.479-14.321 19.198-3.343-3.936-5.574-6.446-9.679-10.251z"})))}var d=r.forwardRef(l);n.p},4107:function(e,t,n){n.d(t,{g:function(){return a}});n(2791);var s="field_formControl__Vhfti",r="field_error__Bxe+r",o=n(184),a=function(e){var t=e.children,n=e.hasError,a=void 0!==n&&n,i=e.error,l=void 0===i?"":i;return(0,o.jsx)("div",{className:s+" "+(a?r:""),children:(0,o.jsxs)(o.Fragment,{children:[t,a&&(0,o.jsx)("span",{children:l})]})})}},7869:function(e,t,n){n.d(t,{g:function(){return a}});var s=n(1413),r=(n(2791),n(4107)),o=n(184),a=function(e){var t=e.name,n=e.hasError,a=void 0!==n&&n,i=e.error,l=void 0===i?"":i,d=e.props,c=void 0===d?{}:d;return(0,o.jsx)(r.g,{error:l,hasError:a,children:(0,o.jsx)("textarea",(0,s.Z)({name:t},c))})}},65:function(e,t,n){n.r(t),n.d(t,{default:function(){return $}});var s=n(2791),r=n(5671),o=n(3144),a=n(136),i=n(7277),l=n(7781),d=n(6434),c=n(6871),u=n(1928),g=n(3636),h=n(8342),p=function(e,t){var n=(null===e||void 0===e?void 0:e.getDate())===(null===t||void 0===t?void 0:t.getDate()),s=(null===e||void 0===e?void 0:e.getMonth())===(null===t||void 0===t?void 0:t.getMonth()),r=(null===e||void 0===e?void 0:e.getFullYear())===(null===t||void 0===t?void 0:t.getFullYear());return n&&s&&r},v=n(7696),f=n(4739),m={dialog:"dialog_dialog__vUuZn",noMessages:"dialog_noMessages__d4soM",lastUserActivityDate:"dialog_lastUserActivityDate__-btuj",separationDate:"dialog_separationDate__mO9Cb",sendMessage:"dialog_sendMessage__JYXio",sendMessageBtn:"dialog_sendMessageBtn__jwtNE",loaderText:"dialog_loaderText__sJER6",infiniteScroll:"dialog_infiniteScroll__+o5QX",message:"dialog_message__jI-ZG",sameSender:"dialog_sameSender__9wjkg",left:"dialog_left__wC-k5",avatar:"dialog_avatar__hA+oP",right:"dialog_right__c3tdB",body:"dialog_body__drq1G",info:"dialog_info__vZhkt",name:"dialog_name__cMURG",messageText:"dialog_messageText__8KC6k",messageTextBody:"dialog_messageTextBody__hBvAS",date:"dialog_date__HbNRp",deleteIcon:"dialog_deleteIcon__g86AA",dropdownMenu:"dialog_dropdownMenu__cIJpK",checkmark:"dialog_checkmark__UzI3L",fill_blue:"dialog_fill_blue__TGMBw",fill_gray:"dialog_fill_gray__shR6K"},_=function(e,t){return _=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},_(e,t)};var y=function(){return y=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},y.apply(this,arguments)};var M="Pixel",b="Percent",w={unit:b,value:.8};function x(e){return"number"===typeof e?{unit:b,value:100*e}:"string"===typeof e?e.match(/^(\d*(\.\d+)?)px$/)?{unit:M,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:b,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),w):(console.warn("scrollThreshold should be string or number"),w)}var T,D,j=function(e){function t(t){var n=e.call(this,t)||this;return n.lastScrollTop=0,n.actionTriggered=!1,n.startY=0,n.currentY=0,n.dragging=!1,n.maxPullDownDistance=0,n.getScrollableTarget=function(){return n.props.scrollableTarget instanceof HTMLElement?n.props.scrollableTarget:"string"===typeof n.props.scrollableTarget?document.getElementById(n.props.scrollableTarget):(null===n.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},n.onStart=function(e){n.lastScrollTop||(n.dragging=!0,e instanceof MouseEvent?n.startY=e.pageY:e instanceof TouchEvent&&(n.startY=e.touches[0].pageY),n.currentY=n.startY,n._infScroll&&(n._infScroll.style.willChange="transform",n._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},n.onMove=function(e){n.dragging&&(e instanceof MouseEvent?n.currentY=e.pageY:e instanceof TouchEvent&&(n.currentY=e.touches[0].pageY),n.currentY<n.startY||(n.currentY-n.startY>=Number(n.props.pullDownToRefreshThreshold)&&n.setState({pullToRefreshThresholdBreached:!0}),n.currentY-n.startY>1.5*n.maxPullDownDistance||n._infScroll&&(n._infScroll.style.overflow="visible",n._infScroll.style.transform="translate3d(0px, "+(n.currentY-n.startY)+"px, 0px)")))},n.onEnd=function(){n.startY=0,n.currentY=0,n.dragging=!1,n.state.pullToRefreshThresholdBreached&&(n.props.refreshFunction&&n.props.refreshFunction(),n.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame((function(){n._infScroll&&(n._infScroll.style.overflow="auto",n._infScroll.style.transform="none",n._infScroll.style.willChange="unset")}))},n.onScrollListener=function(e){"function"===typeof n.props.onScroll&&setTimeout((function(){return n.props.onScroll&&n.props.onScroll(e)}),0);var t=n.props.height||n._scrollableNode?e.target:document.documentElement.scrollTop?document.documentElement:document.body;n.actionTriggered||((n.props.inverse?n.isElementAtTop(t,n.props.scrollThreshold):n.isElementAtBottom(t,n.props.scrollThreshold))&&n.props.hasMore&&(n.actionTriggered=!0,n.setState({showLoader:!0}),n.props.next&&n.props.next()),n.lastScrollTop=t.scrollTop)},n.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:t.dataLength},n.throttledOnScrollListener=function(e,t,n,s){var r,o=!1,a=0;function i(){r&&clearTimeout(r)}function l(){var l=this,d=Date.now()-a,c=arguments;function u(){a=Date.now(),n.apply(l,c)}function g(){r=void 0}o||(s&&!r&&u(),i(),void 0===s&&d>e?u():!0!==t&&(r=setTimeout(s?g:u,void 0===s?e-d:e)))}return"boolean"!==typeof t&&(s=n,n=t,t=void 0),l.cancel=function(){i(),o=!0},l}(150,n.onScrollListener).bind(n),n.onStart=n.onStart.bind(n),n.onMove=n.onMove.bind(n),n.onEnd=n.onEnd.bind(n),n}return function(e,t){function n(){this.constructor=e}_(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.componentDidMount=function(){if("undefined"===typeof this.props.dataLength)throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"===typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!==typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},t.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},t.prototype.componentDidUpdate=function(e){this.props.dataLength!==e.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},t.getDerivedStateFromProps=function(e,t){return e.dataLength!==t.prevDataLength?y(y({},t),{prevDataLength:e.dataLength}):null},t.prototype.isElementAtTop=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,s=x(t);return s.unit===M?e.scrollTop<=s.value+n-e.scrollHeight+1:e.scrollTop<=s.value/100+n-e.scrollHeight+1},t.prototype.isElementAtBottom=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,s=x(t);return s.unit===M?e.scrollTop+n>=e.scrollHeight-s.value:e.scrollTop+n>=s.value/100*e.scrollHeight},t.prototype.render=function(){var e=this,t=y({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),n=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),r=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return s.createElement("div",{style:r,className:"infinite-scroll-component__outerdiv"},s.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(t){return e._infScroll=t},style:t},this.props.pullDownToRefresh&&s.createElement("div",{style:{position:"relative"},ref:function(t){return e._pullDown=t}},s.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!n&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},t}(s.Component),S=j,E=n(5705),P=n(132),U=n(7869),L=function(e){var t=new Date,n=new Date((new Date).setDate((new Date).getDate()-1)),s=t.getFullYear()===e.getFullYear(),r=t.getHours()===e.getHours(),o=t.getMinutes()===e.getMinutes(),a=t.getSeconds()===e.getSeconds()||t.getSeconds()-1===e.getSeconds(),i=(0,f.L)(e);return p(e,t)?r&&o&&a?"\u0412 \u0441\u0435\u0442\u0438":"\u0411\u044b\u043b(a) \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u0432 ".concat(i):p(e,n)?"\u0411\u044b\u043b(a) \u0432\u0447\u0435\u0440\u0430 \u0432 ".concat(i):s?"\u0411\u044b\u043b(a) ".concat((0,v.F)(e)):"\u0411\u044b\u043b(a) ".concat((0,v.F)(e)," \u0432 ").concat(e.getFullYear()," \u0433. ")},N=n(2388),I=n(3504),A=n(5236),C=n(8313),O=["title","titleId"];function F(){return F=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},F.apply(this,arguments)}function Y(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function R(e,t){var n=e.title,r=e.titleId,o=Y(e,O);return s.createElement("svg",F({id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 29.96 122.88",ref:t,"aria-labelledby":r},o),n?s.createElement("title",{id:r},n):null,T||(T=s.createElement("defs",null,s.createElement("style",null,".cls-1{fill-rule:evenodd;}"))),D||(D=s.createElement("path",{className:"cls-1",d:"M15,0A15,15,0,1,1,0,15,15,15,0,0,1,15,0Zm0,92.93a15,15,0,1,1-15,15,15,15,0,0,1,15-15Zm0-46.47a15,15,0,1,1-15,15,15,15,0,0,1,15-15Z"})))}var B=s.forwardRef(R),k=(n.p,n(4277)),H=n(184),Z=function(e){var t,n,s=e.senderName,r=e.viewed,o=e.id,a=e.body,i=e.addedAt,l=e.senderId,d=e.chattingUserProfile,c=e.authUserProfile,u=e.isSameSender,g=e.getFormattedDateHMM,h=e.deleteMessage,p=e.messageType,v=c.userId===l;return(0,H.jsxs)("div",{id:o,className:"".concat(m.message," ").concat(v?m.right:m.left," ").concat(u?m.sameSender:""),children:[(0,H.jsx)("div",{className:m.avatar,children:!u&&(0,H.jsxs)(H.Fragment,{children:[v&&(0,H.jsx)(I.rU,{to:"/profile/".concat(c.userId),children:(0,H.jsx)("img",{src:(null===c||void 0===c||null===(t=c.photos)||void 0===t?void 0:t.large)||A,alt:"avatar"})}),!v&&(0,H.jsx)(I.rU,{to:"/profile/".concat(d.userId),children:(0,H.jsx)("img",{src:(null===d||void 0===d||null===(n=d.photos)||void 0===n?void 0:n.small)||A,alt:"avatar"})})]})}),(0,H.jsxs)("div",{className:m.body,children:[!u&&(0,H.jsx)("div",{className:m.info,children:(0,H.jsx)("span",{className:m.name,children:s})}),(0,H.jsxs)("div",{className:m.messageText,children:[(0,H.jsx)("div",{className:m.messageTextBody,dangerouslySetInnerHTML:{__html:a}}),(0,H.jsxs)("div",{className:"".concat(m.checkmark," ").concat(u?m.sameSender:""),children:[(0,H.jsx)("span",{className:m.date,children:g(i)}),(0,H.jsx)(C.r,{className:r?m.fill_blue:m.fill_gray})]}),(0,H.jsx)("div",{className:m.deleteIcon,children:(0,H.jsx)(k.L,{header:(0,H.jsx)(B,{}),menuItems:(0,H.jsx)("div",{className:m.dropdownMenu,children:(0,H.jsx)("div",{className:m.menuItem,children:(0,H.jsx)("p",{onClick:function(){return h(o,p)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0443 \u043c\u0435\u043d\u044f"})})})})})]})]})]})},q=function(e){var t=e.date;return(0,H.jsx)("div",{children:(0,H.jsx)("div",{className:m.separationDate,children:(0,H.jsx)("p",{children:t})})})},G=function(e){var t=e.updatingMessages,n=e.chattingUserProfile,s=e.authUserProfile,r=e.notUpdatingMessages,o=e.fetchNotUpdatingMessages,a=e.currentPage,i=e.totalPagesCount,l=e.sendMessage,d=e.compareDates,c=e.getFormattedDateWithFullMonth,u=e.getFormattedDateHMM,g=e.activeDialog,h=e.deleteMessage,p=t.map((function(e,o){var a=t[o+1]||r[0],i=(null===a||void 0===a?void 0:a.senderId)===e.senderId;return(0,H.jsxs)("div",{children:[!d(e.addedAt,null===a||void 0===a?void 0:a.addedAt)&&(0,H.jsx)(q,{date:c(e.addedAt)}),(0,H.jsx)(Z,{body:e.body,senderName:e.senderName,id:e.id,viewed:e.viewed,addedAt:e.addedAt,senderId:e.senderId,chattingUserProfile:n,authUserProfile:s,isSameSender:i,getFormattedDateHMM:u,deleteMessage:h,messageType:N.z.updatingMessage},e.id)]},e.id)})),v=P.Ry().shape({msgBody:P.Z_().required("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435")});return(0,H.jsxs)("div",{id:"scrollableDiv",className:m.dialog,children:[(null===g||void 0===g?void 0:g.lastUserActivityDate)&&(0,H.jsx)("div",{className:m.lastUserActivityDate,children:(0,H.jsx)("span",{children:L(null===g||void 0===g?void 0:g.lastUserActivityDate)})}),(0,H.jsx)(E.J9,{initialValues:{msgBody:""},validateOnBlur:!1,validateOnChange:!1,validationSchema:v,onSubmit:function(e,t){var n=t.resetForm,s=t.setSubmitting;l(e.msgBody),s(!1),n()},children:function(e){var t=e.values,n=e.handleChange,s=e.touched,r=e.errors,o=e.handleBlur,a=e.handleSubmit;return(0,H.jsx)("form",{onSubmit:a,children:(0,H.jsxs)("div",{className:m.sendMessage,children:[(0,H.jsx)(U.g,{name:"msgBody",hasError:s.msgBody&&r.msgBody,error:r.msgBody,type:"textarea",props:{onBlur:o,value:t.msgBody,onChange:n,placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435..."}}),(0,H.jsx)("button",{className:m.sendMessageBtn,type:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})}}),0!==t.length?p:(0,H.jsx)("span",{className:m.noMessages,children:"\u041d\u0435\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439"}),0!==r.length&&(0,H.jsx)(S,{next:o,inverse:!0,className:m.infiniteScroll,hasMore:a!==i,loader:(0,H.jsx)("h4",{className:m.loaderText,children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),dataLength:r.length,scrollableTarget:"scrollableDiv",children:r.map((function(e,t){var o=r[t+1],a=(null===o||void 0===o?void 0:o.senderId)===e.senderId;return(0,H.jsxs)("div",{children:[!d(e.addedAt,null===o||void 0===o?void 0:o.addedAt)&&(0,H.jsx)(q,{date:c(e.addedAt)}),(0,H.jsx)(Z,{body:e.body,senderName:e.senderName,id:e.id,viewed:e.viewed,addedAt:e.addedAt,senderId:e.senderId,chattingUserProfile:n,authUserProfile:s,isSameSender:a,getFormattedDateHMM:u,deleteMessage:h,messageType:N.z.notUpdatingMessage},e.id)]},e.id)}))})]})},W=function(e){(0,a.Z)(n,e);var t=(0,i.Z)(n);function n(){var e;(0,r.Z)(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).dialogEndRef=s.createRef(),e.messagesRequestTimer=setTimeout((function(){})),e.fetchNotUpdatingMessages=function(){var t=e.props,n=t.setCurrentPage,s=t.getMessages,r=t.currentPage,o=t.pageCount,a=t.activeDialogId;a&&(n(r+1),s(a,r+1,o))},e.sendMessage=function(t){var n=e.props,s=n.sendMessage,r=n.activeDialogId;r&&s(r,t)},e}return(0,o.Z)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.setActiveDialogId,n=e.router;t(Number(n.params.id))}},{key:"componentWillUnmount",value:function(){var e=this.props,t=e.resetMessages,n=e.setActiveDialogId,s=e.getActiveDialog;this.messagesRequestTimer&&clearTimeout(this.messagesRequestTimer),t(),n(null),s(null)}},{key:"UNSAFE_componentWillUpdate",value:function(e){var t=this.props,n=t.updatingMessages,s=t.getMessages,r=t.pageCount,o=t.router,a=t.resetMessages,i=t.activeDialogId,l=t.setActiveDialogId;e.updatingMessages!==n&&(this.messagesRequestTimer&&clearTimeout(this.messagesRequestTimer),i&&(this.messagesRequestTimer=setTimeout((function(){s(i,1,r)}),2e3))),o.params.id!==e.router.params.id&&(a(),l(Number(e.router.params.id)))}},{key:"componentDidUpdate",value:function(e){var t,n=this.props,s=n.activeDialogId,r=n.pageCount,o=n.getActiveDialog,a=n.getTotalPagesCount,i=n.getMessages,l=n.getChattingUserProfile;s!==e.activeDialogId&&(s&&(a(s),i(s,1,r),i(s,2,r),l(s),o(s),null===(t=this.dialogEndRef.current)||void 0===t||t.scrollIntoView({behavior:"smooth"})))}},{key:"render",value:function(){var e=this.props,t=e.updatingMessages,n=e.notUpdatingMessages,s=e.chattingUserProfile,r=e.authUserProfile,o=e.currentPage,a=e.totalPagesCount,i=e.isMessageSending,l=e.router,d=e.activeDialog,u=e.deleteMessage;return l.params.id?(0,H.jsxs)("div",{className:m.dialog,children:[(0,H.jsx)(G,{authUserProfile:r,chattingUserProfile:s,updatingMessages:t,notUpdatingMessages:n,fetchNotUpdatingMessages:this.fetchNotUpdatingMessages,currentPage:o,totalPagesCount:a,sendMessage:this.sendMessage,compareDates:p,getFormattedDateWithFullMonth:v.F,getFormattedDateHMM:f.L,activeDialog:d,deleteMessage:u}),(0,H.jsx)("div",{ref:this.dialogEndRef}),i&&(0,H.jsx)(h.p,{})]}):(0,H.jsx)(c.Fg,{to:"/dialogs"})}}]),n}(s.Component),z=(0,l.qC)(u.E,(0,d.$j)((function(e){return{updatingMessages:e.dialogs.updatingMessages,notUpdatingMessages:e.dialogs.notUpdatingMessages,chattingUserProfile:e.dialogs.chattingUserProfile,authUserProfile:e.auth.authUserProfile,areMessagesFetching:e.dialogs.areMessagesFetching,currentPage:e.dialogs.currentPage,pageCount:e.dialogs.pageCount,totalPagesCount:e.dialogs.totalPagesCount,isMessageSending:e.dialogs.isMessageSending,activeDialogId:e.dialogs.activeDialogId,activeDialog:e.dialogs.activeDialog}}),{getMessages:g._U,getTotalPagesCount:g.Uq,getChattingUserProfile:g.jh,setCurrentPage:g.Gt.setCurrentPage,resetMessages:g.Gt.resetMessages,sendMessage:g.bG,getActiveDialog:g.F$,setActiveDialogId:g.Gt.setActiveDialogId,deleteMessage:g.$Z}))(W),$=function(){return(0,H.jsx)("div",{children:(0,H.jsx)(z,{})})}},4739:function(e,t,n){n.d(t,{L:function(){return s}});var s=function(e){return"".concat(e.getHours(),":").concat((e.getMinutes()<10?"0":"")+e.getMinutes())}},7696:function(e,t,n){n.d(t,{F:function(){return s}});var s=function(e){var t=(new Date).getFullYear(),n=e.toLocaleString("default",{month:"short"}),s="".concat(e.getDate()," ").concat(n),r="".concat(e.getDate()," ").concat(n," ").concat(e.getFullYear());return t===e.getFullYear()?s:r}}}]);
//# sourceMappingURL=65.2796dad7.chunk.js.map