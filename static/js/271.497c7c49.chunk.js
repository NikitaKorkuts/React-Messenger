"use strict";(self.webpackChunkmessanger=self.webpackChunkmessanger||[]).push([[271],{3300:function(e,r,s){s.d(r,{D:function(){return c}});var n=s(1413),t=s(3366);s(2791);var i=s(6871),a=s(8687),l=s(184),o=["isAuth"],u=function(e){return{isAuth:e.auth.isAuth}},c=function(e){return(0,a.$j)(u)((function(r){r.isAuth;var s=function(e,r){if(null==e)return{};var s,n,i=(0,t.Z)(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)s=a[n],r.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(i[s]=e[s])}return i}(r,o);return r.isAuth?(0,l.jsx)(e,(0,n.Z)({},s)):(0,l.jsx)(i.Fg,{to:"/login"})}))}},9271:function(e,r,s){s.r(r),s.d(r,{default:function(){return U}});var n=s(2791),t=s(1413),i=s(5671),a=s(3144),l=s(136),o=s(7277),u=s(8687),c=s(7781),f=s(8342),d=s(1928),h=s(4578),g=s(3300),m=s(5236),_="pagination_pagination__e9Hgy",v="pagination_active__EI-Rh",p=s(184),j=function(e){var r=e.filter,s=e.totalItemsCount,n=e.currentPage,t=e.onPageChanged,i=e.pageSize,a=e.halfPaginationSize,l=void 0===a?4:a,o=Math.ceil(s/i),u=n-l;u<1&&(u=1);var c=n+l;c>o&&(c=o);var f=n-1;f<1&&(f=1);var d=n+1;d>o&&(d=n);for(var h=[],g=function(e){var s=(0,p.jsx)("span",{onClick:function(){return t(e,r)},className:e===n?v:void 0,children:e},e);h.push(s)},m=u;m<=c;m++)g(m);return(0,p.jsxs)("div",{className:"".concat(_),children:[(0,p.jsx)("span",{onClick:function(){return t(1,r)},children:"First"}),"\xa0",(0,p.jsx)("span",{onClick:function(){return t(f,r)},children:"\xab"}),h,(0,p.jsx)("span",{onClick:function(){return t(d,r)},children:"\xbb"}),"\xa0",(0,p.jsx)("span",{onClick:function(){return t(o,r)},children:"Last"})]})},x=s(3504),S={users:"user_users__d37Wh",user:"user_user__Rq5E8",actions:"user_actions__mWJdj",follow:"user_follow__Kb5h5",followBtn:"user_followBtn__6xzwv",startChatting:"user_startChatting__jZgD-",startChattingBtn:"user_startChattingBtn__0JhlK",mainPart:"user_mainPart__Mc3vr",leftSide:"user_leftSide__Ur7NI",userInfo:"user_userInfo__dDNif",infoName:"user_infoName__bpwYs",profileLink:"user_profileLink__GckpN",infoStatus:"user_infoStatus__9Cu8P",status:"user_status__GMYiA",isFollowing:"user_isFollowing__ax6JA",userAvatar:"user_userAvatar__baMz2",avatarImg:"user_avatarImg__e5aVY"},w=function(e){var r=e.imgUrl,s=e.name,n=e.isFriend,t=e.isFollowingInProgress,i=e.follow,a=e.id,l=e.unfollow,o=e.status,u=function(){i(a)},c=function(){l(a)};return(0,p.jsxs)("div",{className:S.user,children:[(0,p.jsxs)("div",{className:S.mainPart,children:[(0,p.jsxs)("div",{className:S.leftSide,children:[(0,p.jsx)("div",{className:S.userAvatar,children:(0,p.jsx)(x.rU,{to:"/profile/".concat(a),children:(0,p.jsx)("img",{className:S.avatarImg,alt:"UserAvatar",src:r})})}),(0,p.jsxs)("div",{className:S.userInfo,children:[(0,p.jsx)("div",{className:S.infoName,children:(0,p.jsx)(x.rU,{className:S.profileLink,to:"/profile/".concat(a),children:(0,p.jsx)("p",{children:s})})}),(0,p.jsx)("div",{className:S.infoStatus,children:(0,p.jsx)("p",{className:S.status,children:null===o||void 0===o?void 0:o.slice(0,20)})})]})]}),(0,p.jsx)("div",{className:S.isFollowing,children:function(){if(n)return(0,p.jsx)("span",{className:S.yourFriend,children:"\u2713 \u0412\u044b \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u044b"})}()})]}),(0,p.jsxs)("div",{className:S.actions,children:[n?(0,p.jsx)("div",{className:S.follow,children:(0,p.jsx)("button",{disabled:t.some((function(e){return e===a})),onClick:c,className:S.followBtn,children:"\u041e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"})}):(0,p.jsx)("div",{className:S.follow,children:(0,p.jsx)("button",{disabled:t.some((function(e){return e===e})),onClick:u,className:S.followBtn,children:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"})}),(0,p.jsx)("div",{className:S.startChatting,children:(0,p.jsx)(x.rU,{to:"/dialog/".concat(a),children:(0,p.jsx)("button",{className:S.startChattingBtn,children:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"})})})]})]})},N=s(5705),C=s(1958),P={usersSearch:"usersSearchForm_usersSearch__xOesh",searchIcon:"usersSearchForm_searchIcon__S9SDG",searchForm:"usersSearchForm_searchForm__T8WnQ",searchOptions:"usersSearchForm_searchOptions__CNr3a"},b=function(e){var r=e.onFilterChanged,s=e.filter,n=function(e,s){var n,t=s.setSubmitting;switch(e.friend){case"null":n=null;break;case"false":n=!1;break;case"true":n=!0}var i={term:e.term,friend:n};r(i),t(!1)};return(0,p.jsx)("div",{className:P.usersSearchForm,children:(0,p.jsx)(N.J9,{enableReinitialize:!0,initialValues:{term:s.term,friend:String(s.friend)},onSubmit:n,children:function(e){var r=e.isSubmitting,s=e.values,i=e.setSubmitting;return(0,p.jsxs)(N.l0,{className:P.usersSearch,children:[(0,p.jsx)(C.r,{className:P.searchIcon,onClick:r?function(){}:function(){return n(s,{setSubmitting:i})}}),(0,p.jsx)(N.gN,{placeholder:"\u0418\u0441\u043a\u0430\u0442\u044c...",className:P.searchForm,type:"",name:"term",autoFocus:!0}),(0,p.jsxs)(N.gN,{name:"friend",as:"select",className:P.searchOptions,onChange:function(e){!function(e,r){var s=r.isSubmitting,i=r.values,a=r.setSubmitting;e.persist(),s||n((0,t.Z)((0,t.Z)({},i),{},{friend:e.target.value}),{setSubmitting:a})}(e,{setSubmitting:i,isSubmitting:r,values:s})},children:[(0,p.jsx)("option",{className:P.searchOption,value:"null",children:"\u0412\u0441\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"}),(0,p.jsx)("option",{className:P.searchOption,value:"true",children:"\u0421\u0440\u0435\u0434\u0438 \u043f\u043e\u0434\u043f\u0438\u0441\u043e\u043a"}),(0,p.jsx)("option",{className:P.searchOption,value:"false",children:"\u041a\u0440\u043e\u043c\u0435 \u043f\u043e\u0434\u043f\u0438\u0441\u043e\u043a"})]})]})}})})},F=function(e){var r=e.users,s=e.requestUsers,n=e.filter,t=e.setCurrentPage,i=e.totalUsersCount,a=e.pageSize,l=e.currentPage,o=e.isFollowingInProgress,u=e.unfollow,c=e.follow,f=r.map((function(e){return(0,p.jsx)(w,{id:e.id,imgUrl:null!==e.photos.small?e.photos.small:m,name:e.name,isFriend:e.followed,isFollowingInProgress:o,unfollow:u,follow:c,status:e.status},e.id)}));return(0,p.jsxs)("div",{children:[(0,p.jsx)(b,{onFilterChanged:function(e){s(1,a,e)},filter:n}),i/a>1&&(0,p.jsx)(j,{totalItemsCount:i,currentPage:l,onPageChanged:function(e){t(e),s(e,a,n)},pageSize:a,filter:n}),(0,p.jsx)("div",{className:S.users,children:f})]})},k=function(e){(0,l.Z)(s,e);var r=(0,o.Z)(s);function s(){return(0,i.Z)(this,s),r.apply(this,arguments)}return(0,a.Z)(s,[{key:"componentDidMount",value:function(){var e=this.props,r=e.filter,s=e.currentPage,n=e.pageSize,i=e.router,a=e.requestUsers,l=new URLSearchParams(i.location.search),o=s,u=r;switch(l.get("page")&&(o=Number(l.get("page"))),l.get("term")&&(u=(0,t.Z)((0,t.Z)({},u),{},{term:l.get("term")})),l.get("friend")){case"null":u=(0,t.Z)((0,t.Z)({},u),{},{friend:null});break;case"false":u=(0,t.Z)((0,t.Z)({},u),{},{friend:!1});break;case"true":u=(0,t.Z)((0,t.Z)({},u),{},{friend:!0})}a(o,n,u)}},{key:"componentDidUpdate",value:function(e){var r=this.props,s=r.filter,n=r.currentPage,t=r.router;if(s!==e.filter||n!==e.currentPage){var i={};s.term&&(i.term=s.term),null!==s.friend&&(i.friend=String(s.friend)),1!==n&&(i.page=String(n));var a=new URLSearchParams(i).toString();t.navigate({search:"?"+a})}}},{key:"render",value:function(){var e=this.props,r=e.isFetching,s=e.users,n=e.totalUsersCount,t=e.currentPage,i=e.pageSize,a=e.filter,l=e.setCurrentPage,o=e.requestUsers,u=e.isFollowingInProgress,c=e.unfollow,d=e.follow;return r?(0,p.jsx)(f.p,{}):(0,p.jsx)(F,{users:s,totalUsersCount:n,currentPage:t,pageSize:i,filter:a,setCurrentPage:l,requestUsers:o,isFollowingInProgress:u,unfollow:c,follow:d})}}]),s}(n.Component),I=(0,c.qC)(d.E,g.D,(0,u.$j)((function(e){return{isFetching:e.users.isFetching,users:e.users.users,totalUsersCount:e.users.totalUsersCount,currentPage:e.users.currentPage,pageSize:e.users.pageSize,filter:e.users.filter,isFollowingInProgress:e.users.isFollowingInProgress}}),{requestUsers:h.D7,setCurrentPage:h._B.setCurrentPage,follow:h.ZN,unfollow:h.fv}))(k),U=function(){return(0,p.jsx)("div",{children:(0,p.jsx)(I,{})})}}}]);
//# sourceMappingURL=271.497c7c49.chunk.js.map