"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{9736:function(n,t,e){e.r(t),e.d(t,{default:function(){return S}});var r,a=e(5861),c=e(9439),i=e(7757),s=e.n(i),o=e(2791),u=e(1087),p=e(7689),x=e(785),d=e(6355),l=e(168),h=e(6444),f=(0,h.ZP)(u.rU)(r||(r=(0,l.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 15px;\n  margin: 10px;\n  font-weight: 700;\n  color: #555;\n  text-decoration: none;\n  border-radius: 5px;\n  background-color: #fcfcfc;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.1),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.07), 0px 1px 10px 0px rgba(0, 0, 0, 0.05);\n  transition: 300ms;\n  &:hover,\n  &:focus {\n    transition: 300ms;\n    scale: 1.05;\n    font-weight: 500;\n    color: yellow;\n    background-color: #3f51b5;\n    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  }\n"]))),v=e(184);function g(n){var t=n.to,e=n.children;return(0,v.jsxs)(f,{to:t,children:[(0,v.jsx)(d.x_l,{}),e]})}var m,w,b,j,Z,k=e(1230),y=h.ZP.div(m||(m=(0,l.Z)(["\n  max-width: 1000px;\n  padding: 20px 0;\n  border-top: 2px solid #888;\n"]))),_=h.ZP.div(w||(w=(0,l.Z)(["\n  display: flex;\n"]))),P=h.ZP.img(b||(b=(0,l.Z)(["\n  width: 250px;\n  height: fit-content;\n  @media (max-width: 768px) {\n    width: 150px;\n  }\n"]))),U=h.ZP.div(j||(j=(0,l.Z)(["\n  padding: 20px;\n"]))),C=h.ZP.h3(Z||(Z=(0,l.Z)(["\n  margin: 0;\n  font-size: 24px;\n  text-align: center;\n  text-decoration: underline;\n"]))),R=e(8502);function S(){var n,t,e=(0,o.useState)({}),r=(0,c.Z)(e,2),i=r[0],d=r[1],l=(0,p.UO)().movieId,h=(0,p.TH)(),f=(0,o.useRef)(null!==(n=null===(t=h.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/"),m=i.poster_path,w=i.title,b=i.vote_average,j=i.overview,Z=i.release_date,S=i.genres,W=new Date(Z).getFullYear();return(0,o.useEffect)((function(){function n(){return(n=(0,a.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,x.p)(l);case 3:t=n.sent,d(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[l]),(0,v.jsxs)(R.W,{children:[(0,v.jsx)(g,{to:f.current,children:"Go back"}),(0,v.jsx)(y,{children:(0,v.jsxs)(_,{children:[(0,v.jsx)(P,{src:m?"https://image.tmdb.org/t/p/w300/".concat(m):"https://via.placeholder.com/250x375",alt:"".concat(w)}),(0,v.jsxs)(U,{children:[(0,v.jsxs)(C,{children:["".concat(w," (").concat(W,")")," "]}),(0,v.jsxs)("p",{children:["User Score: ","".concat(Math.round(10*b)),"%"]}),(0,v.jsx)("h3",{children:"Owerview"}),(0,v.jsx)("p",{children:"".concat(j)}),(0,v.jsx)("h3",{children:"Genres"}),S&&(0,v.jsx)("p",{children:S.map((function(n){return n.name})).join(" ")})]})]})}),(0,v.jsxs)(y,{children:[(0,v.jsx)("h3",{children:"Additional information"}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(u.rU,{to:"cast",children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(u.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,v.jsx)(o.Suspense,{fallback:(0,v.jsx)(k.h,{}),children:(0,v.jsx)(y,{children:(0,v.jsx)(p.j3,{})})})]})}},8502:function(n,t,e){e.d(t,{W:function(){return c}});var r,a=e(168),c=e(6444).ZP.div(r||(r=(0,a.Z)(["\n  max-width: 1000px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 24px;\n"])))},785:function(n,t,e){e.d(t,{HW:function(){return s},Je:function(){return l},cz:function(){return u},lj:function(){return f},p:function(){return x}});var r=e(5861),a=e(7757),c=e.n(a),i=e(1243);function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/movie/day");case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function u(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie?query=".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/credits"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/reviews"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}i.Z.defaults.baseURL="https://api.themoviedb.org/3",i.Z.defaults.params={api_key:"7408b4f50805114f113b5482c05df3a7"}}}]);
//# sourceMappingURL=736.614dab60.chunk.js.map