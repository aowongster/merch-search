webpackJsonp([0,2],[,,function(e,t,n){"use strict";var a=n(0),r=n(11),s=n(8),o=n.n(s);a.a.use(r.a),t.a=new r.a({routes:[{path:"/",name:"search",component:o.a}]})},function(e,t,n){n(6);var a=n(1)(n(4),n(9),null,null);e.exports=a.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"main-search",data:function(){return{msg:"Welcome to MerchSearch",searchTerms:"",trending:""}},mounted:function(){},methods:{searchShirts:function(){var e=encodeURI(this.searchTerms),t="https://www.amazon.com/s/ref=as_li_ss_tl?ie=UTF8&field-keywords="+e+"&bbn=12035955011&field-enc-merchantbin=ATVPDKIKX0DER&hidden-keywords=ORCA&rh=i:fashion-novelty&linkCode=ll2&tag=keyword-seach-20&linkId=acec3cfb5d4e3ac750ba5fa28826c13e";window.open(t,"_blank")},searchBrands:function(){var e=encodeURI(this.searchTerms),t="https://www.amazon.com/s/ref=as_li_ss_tl?ie=UTF8&node=7141123011&field-brandtextbin="+e+"&linkCode=ll2&tag=brand-search0c-20&linkId=0ef7ec36c6c8e26e1e0c7fdbf45e5221";window.open(t,"_blank")},searchAll:function(){window.open("https://www.amazon.com/s/ref=as_li_ss_tl?ie=UTF8&field-keywords=&bbn=12035955011&field-enc-merchantbin=ATVPDKIKX0DER&hidden-keywords=ORCA&rh=i:fashion-novelty&linkCode=ll2&tag=allsearch0a-20&linkId=31b711df348a66603f72aa4777bbb493","_blank")}}}},function(e,t){},function(e,t){},function(e,t,n){n(7);var a=n(1)(n(5),n(10),"data-v-3065eb78",null);e.exports=a.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._v(" "),n("p",[e._v("\n    A tool to help you research niches and brand name availability.\n  ")]),e._v(" "),n("ul",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchTerms,expression:"searchTerms"}],attrs:{text:"text",placeholder:"Enter search terms here"},domProps:{value:e.searchTerms},on:{input:function(t){t.target.composing||(e.searchTerms=t.target.value)}}})]),e._v(" "),n("ul",[n("button",{staticClass:"button-blue",attrs:{type:"button",name:"button"},on:{click:e.searchShirts}},[e._v("Keyword Search")]),e._v(" "),n("button",{staticClass:"button-blue",attrs:{type:"button",name:"button"},on:{click:e.searchBrands}},[e._v("Brand Search")])]),e._v(" "),n("h2",[e._v("More Links")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#"},on:{click:e.searchAll}},[e._v("All Merch Shirts")])]),e._v(" "),e._m(0)]),e._v(" "),n("footer")])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("a",{attrs:{href:"https://twitter.com/search-home?lang=en",target:"_blank"}},[e._v("\n      Trending on Twitter")])])}]}},,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=n(3),s=n.n(r),o=n(2);a.a.config.productionTip=!1,new a.a({el:"#app",router:o.a,template:"<App/>",components:{App:s.a}})}],[14]);
//# sourceMappingURL=app.6ad9c6d6b2badb2176a0.js.map