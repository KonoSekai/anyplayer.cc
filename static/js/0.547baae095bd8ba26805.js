webpackJsonp([0],{YV7O:function(t,e,i){"use strict";var n={name:"banner",props:{title:String,src:String},data:function(){return{tipStyle:"",tipHidden:!0,tipIsLeftOrRight:!0}},computed:{bannerStyle:function(){return"background: url("+this.src+") center / cover no-repeat"}},methods:{mouseover:function(t){null!=this.title&&(this.updateTipPosition(t.x,t.y),this.tipHidden=!1)},mouseout:function(){this.tipHidden=!0},mousemove:function(t){null!=this.title&&this.updateTipPosition(t.x,t.y)},updateTipPosition:function(t,e){e-=10,t>window.screen.width/2?(t-=170,this.tipIsLeftOrRight=!1):(t+=20,this.tipIsLeftOrRight=!0),this.tipStyle="left:"+t+"px;top:"+e+"px"}}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"blog-banner",style:t.bannerStyle,on:{mouseover:t.mouseover,mouseout:t.mouseout,mousemove:t.mousemove}},[i("span",{class:[{"blog-banner-tip":!0},{"blog-banner-tip-hidden":t.tipHidden},{"blog-banner-tip-left":t.tipIsLeftOrRight},{"blog-banner-tip-right":!t.tipIsLeftOrRight}],style:t.tipStyle},[t._v(t._s(t.title))]),t._v(" "),t._t("default")],2)},staticRenderFns:[]};var s=i("VU/8")(n,o,!1,function(t){i("twjD")},"data-v-47e04bd8",null);e.a=s.exports},twjD:function(t,e){}});
//# sourceMappingURL=0.547baae095bd8ba26805.js.map