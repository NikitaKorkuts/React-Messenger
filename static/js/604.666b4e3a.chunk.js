"use strict";(self.webpackChunkmessanger=self.webpackChunkmessanger||[]).push([[604],{4107:function(e,r,t){t.d(r,{g:function(){return o}});t(2791);var s="field_formControl__Vhfti",n="field_error__Bxe+r",a=t(184),o=function(e){var r=e.children,t=e.hasError,o=void 0!==t&&t,i=e.error,l=void 0===i?"":i;return(0,a.jsx)("div",{className:s+" "+(o?n:""),children:(0,a.jsxs)(a.Fragment,{children:[r,o&&(0,a.jsx)("span",{children:l})]})})}},3873:function(e,r,t){t.d(r,{I:function(){return o}});var s=t(1413),n=(t(2791),t(4107)),a=t(184),o=function(e){var r=e.type,t=void 0===r?"text":r,o=e.name,i=e.checked,l=e.hasError,c=void 0!==l&&l,u=e.error,d=void 0===u?"":u,f=e.props,p=void 0===f?{}:f,h={};return"checkbox"===t&&!0===i&&(h.checked=!0),(0,a.jsx)(n.g,{error:d,hasError:c,children:(0,a.jsx)("input",(0,s.Z)((0,s.Z)({type:t,name:o},p),h))})}},7869:function(e,r,t){t.d(r,{g:function(){return o}});var s=t(1413),n=(t(2791),t(4107)),a=t(184),o=function(e){var r=e.name,t=e.hasError,o=void 0!==t&&t,i=e.error,l=void 0===i?"":i,c=e.props,u=void 0===c?{}:c;return(0,a.jsx)(n.g,{error:l,hasError:o,children:(0,a.jsx)("textarea",(0,s.Z)({name:r},u))})}},4836:function(e,r,t){t.r(r),t.d(r,{default:function(){return ye}});var s=t(2791),n=t(5671),a=t(3144),o=t(136),i=t(7277),l=t(7781),c=t(6434),u=t(6871),d=t(4165),f=t(5861),p=t(1467),h=t(3700),v=t(182),m=t(4942),x=t(1413),_=function(e){var r=/\(([^)]+)\)/,t={};return e.map((function(e){var s=r.exec(e),n=e.replace(r,"");if(s&&-1!==s[1].search(/->/)){var a=s[1].split("->").map((function(e){return e.charAt(0).toLowerCase()+e.slice(1)}));t[a[0]]=(0,x.Z)((0,x.Z)({},t[a[0]]),{},(0,m.Z)({},a[1],n))}else if(s){var o=s[1].charAt(0).toLowerCase()+s[1].slice(1);t[o]=n}else t._error=n})),t},j=t(6267),g=t(3851),A={setUserStatus:function(e){return{type:g.FT,status:e}},setUserAvatar:function(e){return{type:g.wr,photos:e}},setProfileUpdatingStatus:function(e){return{type:g.Ke,profileUpdatingStatus:e}},setUserProfile:function(e){return{type:g.PU,profile:e}},setIsFriend:function(e){return{type:g.tK,isFriend:e}}},N=function(e){return function(){var r=(0,f.Z)((0,d.Z)().mark((function r(t){var s;return(0,d.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,p.N.getUserProfile(e);case 2:s=r.sent,t(A.setUserProfile(s));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},b=t(1928),F=t(4578),k=t(3504),U=t(8342),S="profile_profileHeader__O+03h",w="profile_profileButtons__T0TaE",y="profile_editProfile__yfzqT",Z="profile_editProfileBtn__RJSAC",I="profile_writeMessage__Xb9Yg",C="profile_writeMessageBtn__2Fcvq",P="profile_follow__ewjtS",M="profile_followBtn__b+y5D",E="profile_profile__nMFFU",D="profile_header__xNDJN",B="profile_jobSearchStatus__hE3Ln",J="profile_activelyLooking__Xruaa",H="profile_notLooking__tJLEj",L="profile_user__ACyIr",O="profile_avatar__vtir3",V="profile_userAvatar__nQmE0",K="profile_avatarImg__-uAFn",R="profile_ownerAvatar__zAQ4Q",q="profile_uploadFileArea__V7uI6",Y="profile_addIcon__JSfWI",z="profile_userInfo__pZoC7",T="profile_status__E2k24",Q="profile_ownerStatus__y2DSn",G="profile_aboutMeText__VUiP2",W="profile_statusEditIcon__YxVF7",X="profile_editStatusForm__lFhK-",$="profile_infoName__uf5Rr",ee="profile_profileInfo__lxbLb",re="profile_contact__bf4aJ",te="profile_contactHeader__clCuH",se="profile_contactLink__cBABY",ne="profile_contentBlock__sGmrC",ae="profile_aboutUserBlock__OqvQ3",oe="profile_contactsBlock__aQcqc",ie=t(184),le=function(e){var r=e.aboutMe,t=e.lookingForAJobDescription;return r||t?(0,ie.jsxs)("div",{className:"".concat(ne," ").concat(ae),children:[r&&(0,ie.jsxs)("div",{children:[(0,ie.jsx)("h1",{className:D,children:"\u041e\u0431\u043e \u043c\u043d\u0435"}),(0,ie.jsx)("p",{className:G,children:r})]}),t&&(0,ie.jsxs)("div",{children:[(0,ie.jsx)("h1",{className:D,children:"\u041c\u043e\u0438 \u043d\u0430\u0432\u044b\u043a\u0438"}),(0,ie.jsx)("p",{className:G,children:t})]})]}):(0,ie.jsx)(ie.Fragment,{})},ce=function(e){var r=e.contacts,t=[];for(var s in r)if(r[s]){var n=(0,ie.jsxs)("div",{className:re,children:[(0,ie.jsx)("p",{className:te,children:"".concat(s)}),(0,ie.jsxs)("a",{href:r[s],className:se,children:[r[s]," \u279a"]})]},s);t.push(n)}return t.length>0?(0,ie.jsxs)("div",{className:"".concat(ne," ").concat(oe),children:[(0,ie.jsx)("h1",{className:D,children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),t]}):(0,ie.jsx)(ie.Fragment,{})},ue=t(5705),de=t(132),fe=t(3873),pe=t(7869),he="ProfileEditDataForm_formLogin__HXNAp",ve="ProfileEditDataForm_formLogInWithEmail__KL0gl",me="ProfileEditDataForm_formRow__DmOA1",xe="ProfileEditDataForm_formTitleRow__bC4D8",_e="ProfileEditDataForm_formCheckbox__kSeQ2",je="ProfileEditDataForm_formErrorText__vS-HC",ge=function(e){var r=e.profile,t=e.submit,s={fullName:r.fullName,aboutMe:r.aboutMe,lookingForAJob:r.lookingForAJob,lookingForAJobDescription:r.lookingForAJobDescription,contacts:{}},n={};for(var a in r.contacts)n[a]=de.Z_().max(200,"\u0412\u0432\u0435\u0434\u0435\u043d \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u043b\u0438\u043d\u043d\u044b\u0439 url \u0430\u0434\u0440\u0435\u0441\u0441").url("\u0412\u0432\u0435\u0434\u0435\u043d \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 url \u0430\u0434\u0440\u0435\u0441\u0441"),r.contacts[a]?Object.defineProperty(s.contacts,a,{value:r.contacts[a],enumerable:!0}):Object.defineProperty(s.contacts,a,{value:"",enumerable:!0});var o={fullName:de.Z_().max(20,"\u0412\u044b \u0432\u0432\u0435\u043b\u0438 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u043b\u0438\u043d\u043d\u043e\u0435 \u0438\u043c\u044f").required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"),aboutMe:de.Z_().max(1e3,"\u0412\u044b \u0432\u0432\u0435\u043b\u0438 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u043b\u0438\u043d\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c").required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0441\u0435\u0431\u0435"),lookingForAJobDescription:de.Z_().max(1e3,"\u0412\u044b \u0432\u0432\u0435\u043b\u0438 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u043b\u0438\u043d\u043d\u044b\u0439 \u043a\u043e\u0434 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f").required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0438 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u0432\u044b\u043a\u0438"),contacts:de.Ry().shape(n)};return(0,ie.jsx)("div",{children:(0,ie.jsx)(ue.J9,{initialValues:s,validateOnBlur:!0,onSubmit:function(e,r){var s=r.setStatus,n=r.setErrors;return t(e,s,n)},validationSchema:de.Ry().shape(o),children:function(e){var t=e.values,s=e.handleChange,n=e.touched,a=e.errors,o=e.handleBlur,i=e.handleSubmit,l=e.status;return(0,ie.jsx)("div",{children:(0,ie.jsx)("form",{className:he,onSubmit:i,children:(0,ie.jsxs)("div",{className:ve,children:[(0,ie.jsx)("div",{className:xe,children:(0,ie.jsx)("h1",{children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u041f\u0440\u043e\u0444\u0438\u043b\u044c"})}),(0,ie.jsx)("div",{className:me,children:(0,ie.jsxs)("label",{children:[(0,ie.jsx)("p",{children:"\u0418\u043c\u044f"}),(0,ie.jsx)(fe.I,{name:"fullName",hasError:n.fullName&&a.fullName,error:a.fullName,props:{onBlur:o,value:t.fullName,onChange:s}})]})}),(0,ie.jsx)("div",{className:me,children:(0,ie.jsxs)("label",{children:[(0,ie.jsx)("p",{children:"\u041e\u0431\u043e \u041c\u043d\u0435"}),(0,ie.jsx)(pe.g,{name:"aboutMe",hasError:n.aboutMe&&a.aboutMe,error:a.aboutMe,props:{onBlur:o,value:t.aboutMe,onChange:s}})]})}),(0,ie.jsx)("div",{className:me,children:(0,ie.jsxs)("label",{className:_e,children:[(0,ie.jsx)("p",{children:"\u0418\u0449\u0443 \u0420\u0430\u0431\u043e\u0442\u0443"}),(0,ie.jsx)(fe.I,{name:"lookingForAJob",type:"checkbox",checked:t.lookingForAJob,props:{onBlur:o,onChange:s}})]})}),(0,ie.jsx)("div",{className:me,children:(0,ie.jsxs)("label",{children:[(0,ie.jsx)("p",{children:"\u041c\u043e\u0438 \u041d\u0430\u0432\u044b\u043a\u0438"}),(0,ie.jsx)(pe.g,{name:"lookingForAJobDescription",hasError:n.lookingForAJobDescription&&a.lookingForAJobDescription,error:a.lookingForAJobDescription,props:{onBlur:o,value:t.lookingForAJobDescription,onChange:s}})]})}),(0,ie.jsx)("div",{className:xe,children:(0,ie.jsx)("h1",{children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})}),Object.keys(r.contacts).map((function(e){if(t.contacts)return(0,ie.jsx)("div",{className:me,children:(0,ie.jsxs)("label",{children:[(0,ie.jsx)("p",{children:e}),(0,ie.jsx)(fe.I,{hasError:(0,ue.u9)(n.contacts,e)&&(0,ue.u9)(a.contacts,e),error:(0,ue.u9)(a.contacts,e),name:"contacts."+e,props:{onBlur:o,value:t.contacts[e],onChange:s}})]})},e)})),(null===l||void 0===l?void 0:l.error)&&(0,ie.jsx)("div",{className:me,children:(0,ie.jsx)("label",{children:(0,ie.jsx)("span",{className:je,children:null===l||void 0===l?void 0:l.error})})}),(0,ie.jsx)("div",{className:me,children:(0,ie.jsx)("button",{type:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f"})})]})})})}})})},Ae=function(e){return e.areLookingForJob?(0,ie.jsx)("div",{className:B,children:(0,ie.jsxs)("h2",{children:["\u0421\u0442\u0430\u0442\u0443\u0441 \u043f\u043e\u0438\u0441\u043a\u0430 \u0440\u0430\u0431\u043e\u0442\u044b: ",(0,ie.jsx)("span",{className:J,children:"\u0412 \u0410\u043a\u0442\u0438\u0432\u043d\u043e\u043c \u041f\u043e\u0438\u0441\u043a\u0435"})]})}):(0,ie.jsx)("div",{className:B,children:(0,ie.jsxs)("h2",{children:["\u0421\u0442\u0430\u0442\u0443\u0441 \u043f\u043e\u0438\u0441\u043a\u0430 \u0440\u0430\u0431\u043e\u0442\u044b: ",(0,ie.jsx)("span",{className:H,children:"\u041d\u0435 \u0432 \u043f\u043e\u0438\u0441\u043a\u0435"})]})})},Ne=t(5236),be=t.p+"static/media/upload-avatar.c7ca80c71153b8f39a0e.png",Fe=function(e){(0,o.Z)(t,e);var r=(0,i.Z)(t);function t(){var e;(0,n.Z)(this,t);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(e=r.call.apply(r,[this].concat(a))).state={editMode:!1,status:e.props.status},e.activateEditMode=function(){e.setState({editMode:!0})},e.deactivateEditMode=function(){var r=e.props.updateStatus;e.setState({editMode:!1}),r(e.state.status)},e.onStatusChange=function(r){e.setState({status:r.currentTarget.value})},e}return(0,a.Z)(t,[{key:"componentDidUpdate",value:function(e,r){var t=this.props.status;e.status!==t&&this.setState({status:t})}},{key:"render",value:function(){var e=this.props,r=e.status;return e.isOwner?(0,ie.jsxs)(ie.Fragment,{children:[!this.state.editMode&&(0,ie.jsx)("div",{className:"".concat(T," ").concat(Q),children:(0,ie.jsxs)("span",{className:G,onClick:this.activateEditMode,children:[r||"no status",(0,ie.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAArAAAAKwBhgk01AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAADzSURBVEiJ7dTPKoVBGAfghywtXYGjlA0L5QIcl6AssTtLW1uKS3AB5y6syM5Clnb4SnZ0Fih/joWRzzjfoZlJKVNv0zT1/N55F0O5tYFzHGGuoAu20K/VLRZK4ZsR/l43mC8RMIPrhpCzHHgH69+EXKTiuwF4HhJyh8UUfDvq8gWdcDeNq4C3czqPK35JUudNeD1kLQXm61gGVfJY/vHfx+OP6+/gs3j6Ab6Ugo+HfWVISDI+ghNMhfMyHgfgSWPh7YPqo2oIycJh1UenFVq1kF4uDns+j+MSk+FuIheH0yjgHl2MlsDHwr6PQxzgGA8lcHgFYaqt+amxWNEAAAAASUVORK5CYII=",alt:"edit-icon",className:W})]})}),this.state.editMode&&(0,ie.jsx)("div",{children:(0,ie.jsx)("input",{className:X,type:"text",onChange:this.onStatusChange,autoFocus:!0,onBlur:this.deactivateEditMode,value:this.state.status})})]}):(0,ie.jsx)("div",{className:T,children:(0,ie.jsx)("p",{className:G,children:r||"no status"})})}}]),t}(s.Component),ke=function(e){var r,t,s=e.profile,n=e.updateAvatar,a=e.updateStatus,o=e.status,i=e.isOwner;return(0,ie.jsxs)("div",{className:L,children:[i&&(0,ie.jsxs)("div",{className:"".concat(R," ").concat(O),children:[(0,ie.jsx)("img",{className:K,src:(null===s||void 0===s||null===(r=s.photos)||void 0===r?void 0:r.large)||Ne,alt:"avatar"}),(0,ie.jsx)("img",{className:Y,src:be,alt:"addIcon"}),(0,ie.jsxs)("label",{children:[(0,ie.jsx)("div",{className:q}),(0,ie.jsx)("input",{type:"file",onChange:function(e){var r;null!==(r=e.target.files)&&void 0!==r&&r.length&&n(e.target.files[0])},hidden:!0})]})]}),!i&&(0,ie.jsx)("div",{className:"".concat(V," ").concat(O),children:(0,ie.jsx)("img",{className:K,src:(null===s||void 0===s||null===(t=s.photos)||void 0===t?void 0:t.large)||Ne,alt:"avatar"})}),(0,ie.jsxs)("div",{className:z,children:[(0,ie.jsx)("div",{className:$,children:(0,ie.jsx)("p",{children:null===s||void 0===s?void 0:s.fullName})}),(0,ie.jsx)("div",{children:(0,ie.jsx)(Fe,{isOwner:i,status:o,updateStatus:a})})]})]})},Ue=function(e){(0,o.Z)(t,e);var r=(0,i.Z)(t);function t(){var e;(0,n.Z)(this,t);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(e=r.call.apply(r,[this].concat(a))).state={editMode:!1},e}return(0,a.Z)(t,[{key:"_setEditMode",value:function(e){this.setState((function(){return{editMode:e}}))}},{key:"onSubmit",value:function(e,r,t){var s=this;(0,this.props.updateProfile)(e,r,t).then((function(){s._setEditMode(!1)}))}},{key:"handleFollow",value:function(){var e=this.props,r=e.follow,t=e.setIsFriend,s=e.profile;r(null===s||void 0===s?void 0:s.userId),t(!0)}},{key:"handleUnfollow",value:function(){var e=this.props,r=e.unfollow,t=e.setIsFriend,s=e.profile;r(null===s||void 0===s?void 0:s.userId),t(!1)}},{key:"getFollowBtn",value:function(){var e=this,r=this.props,t=r.isFriend;if(!r.isOwner)return t?(0,ie.jsx)("div",{className:P,children:(0,ie.jsx)("button",{className:M,onClick:function(){return e.handleUnfollow()},children:"\u041e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"})}):(0,ie.jsx)("div",{className:P,children:(0,ie.jsx)("button",{className:M,onClick:function(){return e.handleFollow()},children:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"})})}},{key:"render",value:function(){var e=this,r=this.props,t=r.isOwner,s=r.profile,n=r.status,a=r.updateUserAvatar,o=(r.profileUpdatingStatus,r.updateUserStatus);r.setProfileUpdatingStatus;return s?this.state.editMode?(0,ie.jsx)(ge,{submit:this.onSubmit.bind(this),profile:s}):(0,ie.jsxs)("div",{className:E,children:[(0,ie.jsxs)("div",{className:S,children:[(0,ie.jsx)(ke,{isOwner:t,profile:s,updateStatus:o,updateAvatar:a,status:n}),(0,ie.jsxs)("div",{className:w,children:[t?(0,ie.jsx)("div",{className:y,children:(0,ie.jsx)("button",{className:Z,onClick:function(){e._setEditMode(!0)},children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u041f\u0440\u043e\u0444\u0438\u043b\u044c"})}):(0,ie.jsx)("div",{className:I,children:(0,ie.jsx)(k.rU,{to:"/dialog/".concat(s.userId),children:(0,ie.jsx)("button",{className:C,children:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"})})}),this.getFollowBtn()]})]}),(0,ie.jsx)(Ae,{areLookingForJob:s.lookingForAJob}),(0,ie.jsxs)("div",{className:ee,children:[(0,ie.jsx)(le,{aboutMe:s.aboutMe,lookingForAJobDescription:s.lookingForAJobDescription}),(0,ie.jsx)(ce,{contacts:s.contacts})]})]}):(0,ie.jsx)(U.p,{})}}]),t}(s.Component),Se=function(e){(0,o.Z)(t,e);var r=(0,i.Z)(t);function t(){return(0,n.Z)(this,t),r.apply(this,arguments)}return(0,a.Z)(t,[{key:"__refreshUserProfile",value:function(){var e=this.props,r=e.getUserProfile,t=e.getUserStatus,s=e.router,n=e.authUserId,a=e.getIsFriend,o=s.params.id||n;o&&(r(o),t(o),a(o))}},{key:"componentDidMount",value:function(){this.__refreshUserProfile()}},{key:"componentDidUpdate",value:function(e){e.router.params.id!==this.props.router.params.id&&this.__refreshUserProfile()}},{key:"render",value:function(){var e=this.props,r=e.isAuth,t=e.authUserId,s=e.router,n=e.profile,a=e.status,o=e.profileUpdatingStatus,i=e.updateUserStatus,l=e.setProfileUpdatingStatus,c=e.updateProfile,d=e.updateUserAvatar,f=e.isFriend,p=e.follow,h=e.unfollow,v=e.setIsFriend;if(!r&&!s.params.id)return(0,ie.jsx)(u.Fg,{to:"/login"});var m=Number(s.params.id)===t||!s.params.id;return(0,ie.jsx)(Ue,{isOwner:m,profile:n,status:a,profileUpdatingStatus:o,updateUserStatus:i,updateProfile:c,updateUserAvatar:d,setProfileUpdatingStatus:l,isFriend:f,follow:p,unfollow:h,setIsFriend:v})}}]),t}(s.Component),we=(0,l.qC)(b.E,(0,c.$j)((function(e){return{authUserId:e.auth.userId,isAuth:e.auth.isAuth,profile:e.profile.profile,status:e.profile.status,profileUpdatingStatus:e.profile.profileUpdatingStatus,isFriend:e.profile.isFriend}}),{getUserProfile:N,getUserStatus:function(e){return function(){var r=(0,f.Z)((0,d.Z)().mark((function r(t){var s;return(0,d.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,p.N.getUserStatus(e);case 2:s=r.sent,t(A.setUserStatus(s));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},updateUserStatus:function(e){return function(){var r=(0,f.Z)((0,d.Z)().mark((function r(t){return(0,d.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,p.N.updateUserStatus(e);case 2:0===r.sent.resultCode&&t(A.setUserStatus(e));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},updateUserAvatar:function(e){return function(){var r=(0,f.Z)((0,d.Z)().mark((function r(t){var s;return(0,d.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,p.N.setUserAvatar(e);case 2:0===(s=r.sent).resultCode&&(t(A.setUserAvatar(s.data.photos)),t(h.YV.setAuthUserAvatar(s.data.photos)));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},updateProfile:function(e,r,t){return function(){var s=(0,f.Z)((0,d.Z)().mark((function s(n,a){var o,i,l;return(0,d.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return o=a().auth.userId,s.next=3,p.N.setUserProfile(e);case 3:if((i=s.sent).resultCode!==v.M.Success){s.next=10;break}n(A.setProfileUpdatingStatus("success")),n(N(o)),n((0,h.RK)()),s.next=16;break;case 10:if(i.resultCode!==v.M.Error){s.next=16;break}return(l=_(i.messages))._error&&r({error:l._error}),t(l),n(A.setProfileUpdatingStatus("error")),s.abrupt("return",Promise.reject(i.messages[0]));case 16:case"end":return s.stop()}}),s)})));return function(e,r){return s.apply(this,arguments)}}()},setProfileUpdatingStatus:A.setProfileUpdatingStatus,getIsFriend:function(e){return function(){var r=(0,f.Z)((0,d.Z)().mark((function r(t){var s;return(0,d.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!e){r.next=7;break}return r.next=3,j.y.getIsFriend(e);case 3:s=r.sent,t(A.setIsFriend(s)),r.next=8;break;case 7:t(A.setIsFriend(null));case 8:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},follow:F.ZN,unfollow:F.fv,setIsFriend:A.setIsFriend}))(Se),ye=function(){return(0,ie.jsx)("div",{children:(0,ie.jsx)(we,{})})}}}]);
//# sourceMappingURL=604.666b4e3a.chunk.js.map