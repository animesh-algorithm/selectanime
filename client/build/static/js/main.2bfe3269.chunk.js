(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n(15),s=n.n(c),a=(n(57),n(58),n(59),n(13)),r=n(6),j=n(92),l=n(18),d=n(22),o=n.n(d),b=n(34),u=n(35),h=n.n(u),O="https://kitsu.io/api/edge/anime",x="FETCH_ANIME_LIST",v="GET_ANIME",m=n(90),p=n(91),f=n(96),g=n(2),k=function(e){var t=e.anime,n=e.attributes;return Object(g.jsxs)(f.a,{className:"my-3 p-3 rounded",children:[Object(g.jsx)(a.Link,{to:"/anime/".concat(t.id),children:Object(g.jsx)(f.a.Img,{src:n.posterImage.medium})}),Object(g.jsxs)(f.a.Body,{children:[Object(g.jsx)(f.a.Title,{as:"h5",children:Object(g.jsx)("strong",{children:n.titles.en_jp})}),Object(g.jsxs)(f.a.Text,{as:"p",children:[Object(g.jsx)("strong",{children:"Episode Count: "})," ",n.episodeCount," ",Object(g.jsx)("br",{}),n.ageRatingGuide]})]})]})},L=function(){var e,t=Object(l.b)(),n=Object(l.c)((function(e){return e.anime}));return Object(i.useEffect)((function(){t(function(){var e=Object(b.a)(o.a.mark((function e(t){var n,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("".concat(O,"?page%5Blimit%5D=20"));case 3:n=e.sent,i=n.data,t({type:x,payload:i}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[t,n]),Object(g.jsx)("div",{children:Object(g.jsx)(m.a,{children:null===n||void 0===n||null===(e=n.data)||void 0===e?void 0:e.map((function(e){return Object(g.jsx)(p.a,{sm:12,md:6,xl:3,children:Object(g.jsx)(k,{attributes:e.attributes,anime:e})},e.id)}))})})},I=n(52),y=n(93),E=n(98),C=n(94),N=function(e){var t,n,c,s,r,d,o,b,u=e.match,h=Object(i.useState)(null),O=Object(I.a)(h,2),x=O[0],v=O[1],f=Object(l.c)((function(e){return e.anime.data})),k=null===f||void 0===f?void 0:f.find((function(e){return e.id===u.params.id}));return Object(i.useEffect)((function(){v(k),console.log(k)}),[k,u]),Object(g.jsxs)(j.a,{className:"container",children:[Object(g.jsx)(a.Link,{to:"/",className:"btn btn-light",children:"Go Back"}),Object(g.jsxs)(m.a,{children:[Object(g.jsx)(p.a,{md:4,children:Object(g.jsx)(y.a,{src:null===x||void 0===x||null===(t=x.attributes)||void 0===t?void 0:t.posterImage.medium,fluid:!0})}),Object(g.jsx)(p.a,{md:3,children:Object(g.jsxs)(E.a,{variant:"flush",children:[Object(g.jsx)(E.a.Item,{children:Object(g.jsx)("h3",{children:null===x||void 0===x||null===(n=x.attributes)||void 0===n?void 0:n.titles.en_jp})}),Object(g.jsxs)(E.a.Item,{children:[Object(g.jsxs)("p",{children:["Rated ",null===x||void 0===x||null===(c=x.attributes)||void 0===c?void 0:c.ageRating]}),Object(g.jsx)("p",{children:null===x||void 0===x||null===(s=x.attributes)||void 0===s?void 0:s.ageRatingGuide}),Object(g.jsxs)("p",{children:["Episodes: ",null===x||void 0===x||null===(r=x.attributes)||void 0===r?void 0:r.episodeCount]}),Object(g.jsxs)("p",{children:["Episode Length: ",null===x||void 0===x||null===(d=x.attributes)||void 0===d?void 0:d.episodeLength," min"]}),Object(g.jsxs)("p",{children:["Status: ","finished"===(null===x||void 0===x||null===(o=x.attributes)||void 0===o?void 0:o.status)?"finished":"Not Finished"]})]}),Object(g.jsx)(E.a.Item,{children:Object(g.jsx)(a.Link,{to:null===x||void 0===x?void 0:x.relationships.streamingLinks.links.self,children:Object(g.jsx)(C.a,{className:"btn-block",type:"button",children:"Stream Link"})})})]})}),Object(g.jsx)(p.a,{md:5,children:Object(g.jsx)(E.a,{variant:"flush",children:Object(g.jsxs)(E.a.Item,{children:[Object(g.jsx)("h2",{children:"Summary"}),Object(g.jsx)("p",{children:null===x||void 0===x||null===(b=x.attributes)||void 0===b?void 0:b.description})]})})})]}),Object(g.jsx)("br",{}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h2",{children:"Similar Animes"}),Object(g.jsx)(L,{})]})]})},S=n(95),T=n(97),B=n(48),w=function(){return Object(g.jsx)("header",{children:Object(g.jsx)(S.a,{bg:"dark",variant:"dark",expand:"lg",collapseOnSelect:!0,children:Object(g.jsxs)(j.a,{children:[Object(g.jsx)(B.LinkContainer,{to:"/",children:Object(g.jsx)(S.a.Brand,{children:"SelectAnime.com"})}),Object(g.jsx)(S.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(g.jsx)(S.a.Collapse,{id:"basic-navbar-nav",children:Object(g.jsxs)(T.a,{className:"mr-auto",children:[Object(g.jsx)(T.a.Link,{children:"About"}),Object(g.jsx)(T.a.Link,{children:"Login"})]})})]})})})},F=function(){return Object(g.jsx)("div",{})};var A=function(){return Object(g.jsxs)(a.BrowserRouter,{children:[Object(g.jsx)(w,{}),Object(g.jsx)("main",{className:"py-3",children:Object(g.jsxs)(j.a,{children:[Object(g.jsx)(r.d,{path:"/",exact:!0,component:L}),Object(g.jsx)(r.d,{path:"/anime/:id",exact:!0,component:N})]})}),Object(g.jsx)(F,{})]})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,99)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),i(e),c(e),s(e),a(e)}))},_=n(20),G=n(51),D=Object(_.b)({anime:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:case v:return t.payload;default:return e}}}),J=Object(_.d)(D,Object(_.c)(Object(_.a)(G.a)));s.a.render(Object(g.jsx)(l.a,{store:J,children:Object(g.jsx)(A,{})}),document.getElementById("root")),R()}},[[88,1,2]]]);
//# sourceMappingURL=main.2bfe3269.chunk.js.map