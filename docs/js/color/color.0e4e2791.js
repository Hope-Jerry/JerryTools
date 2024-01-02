import{o as u,c as g,a,K as p,a3 as _,F as w,a8 as v,J as y,ag as m,O as x,P as C,Q as $,V as d,W as B,X as k,d as P}from"../@vue/@vue.bb851dd4.js";import{_ as f}from"../vue-img-cutter/vue-img-cutter.f6f262e7.js";const I={props:{bgColor:{type:Object,default:()=>{}},showColor:{type:Object,default:()=>{}}},data(){return{thumbPosition:{left:"0px",top:"0px"},panelBgInfo:{}}},computed:{background(){let{r:o,g:e,b:t,a:l}=this.bgColor;return`rgba(${o}, ${e}, ${t}, ${l})`}},mounted(){this.calcXY()},methods:{calcXY(){let{left:o,top:e,width:t,height:l}=this.$refs.panelBg.getBoundingClientRect();this.panelBgInfo={l:o,t:e,w:t,h:l};let{r:s,g:r,b:n}=this.showColor,i=Math.max(s,r,n),b=Math.min(s,r,n)/i*t,h=l-i/255*l;this.thumbPosition.left=t-b+"px",this.thumbPosition.top=h+"px"},onMousedown(){let{l:o,t:e,w:t,h:l}=this.panelBgInfo;document.onmousemove=s=>{let{pageX:r,pageY:n}=s,i=r-o,c=n-e;i<=0&&(i=0),i>=t&&(i=t),c<=0&&(c=0),c>=l&&(c=l),this.thumbPosition={left:i+"px",top:c+"px"};let b=t-i,h=c;this.calcWidthColor(b,h)},document.onmouseup=s=>{document.onmousemove=null,document.onmouseup=null}},changeShowColor(){let{l:o,t:e,w:t,h:l}=this.panelBgInfo,{left:s,top:r}=this.thumbPosition;s=parseInt(s.substr(0,s.length-2)),r=parseInt(r.substr(0,r.length-2));let n=t-s,i=r;this.calcWidthColor(n,i,t,l)},calcWidthColor(o,e){let{w:t,h:l}=this.panelBgInfo,s=JSON.parse(JSON.stringify(this.bgColor));delete s.a;for(let r in s){let n=s[r],i=((255-n)*o+n*t)/t;s[r]=i}this.calcHeightColor(o,e,t,l,s)},calcHeightColor(o,e,t,l,s){for(let r in s){let n=s[r],i=(l-e)*n/l,c=parseInt(i);this.showColor[r]=c}},bgClick(o){if(o.target.className==="panel-thumb")return;let{offsetX:e,offsetY:t}=o,{w:l}=this.panelBgInfo;this.thumbPosition={left:e+"px",top:t+"px"};let s=l-e,r=t;this.calcWidthColor(s,r),this.onMousedown()}}},M=a("div",{class:"panel-bg-white"},null,-1),S=a("div",{class:"panel-bg-black"},null,-1);function R(o,e,t,l,s,r){return u(),g("div",{class:"color-panel",ref:"panelBg",style:p({background:r.background}),onMousedown:e[1]||(e[1]=_((...n)=>r.bgClick&&r.bgClick(...n),["stop"]))},[M,S,a("div",{class:"panel-thumb",style:p(s.thumbPosition),onMousedown:e[0]||(e[0]=_((...n)=>r.onMousedown&&r.onMousedown(...n),["stop"]))},null,36)],36)}const O=f(I,[["render",R]]);const H={props:{bgColor:{type:Object,default:()=>{}}},data(){return{thumbPosition:{top:"0px"},sideBarHeight:null}},mounted(){this.sideBarHeight=this.$refs.sideBarBg.getBoundingClientRect().height},methods:{onMousedown(){let{top:o,height:e}=this.$refs.sideBarBg.getBoundingClientRect();document.onmousemove=t=>{let l=t.pageY-o;l>=e&&(l=e),l<=0&&(l=0),this.changeBg(l,e)},document.onmouseup=t=>{document.onmousemove=null,document.onmouseup=null}},changeBg(o,e){this.thumbPosition.top=o+"px";let t=e/6;if(o<=e*1/6){let l=this.getValue(o,t,0);this.setColor(255,l,0)}else if(o<=e*2/6){let l=this.getValue(o,t,1);this.setColor(255-l,255,0)}else if(o<=e*3/6){let l=this.getValue(o,t,2);this.setColor(0,255,l)}else if(o<=e*4/6){let l=this.getValue(o,t,3);this.setColor(0,255-l,255)}else if(o<e*5/6){let l=this.getValue(o,t,4);this.setColor(l,0,255)}else if(o<=e*6/6){let l=this.getValue(o,t,5);this.setColor(255,0,255-l)}this.$emit("changeShow")},barClick(o){let e=this.sideBarHeight,t=o.offsetY;this.changeBg(t,e),this.onMousedown()},getValue(o,e,t){let l=(o-e*t)/e*255;return parseInt(l)},setColor(o,e,t){this.bgColor.r=o,this.bgColor.g=e,this.bgColor.b=t},calcTop(){let{r:o,g:e,b:t}=this.bgColor,l=this.sideBarHeight,s=0,r=l/6;o===255&&t===0&&(s=e/255*r),e===255&&t===0&&(s=(o/255+1)*r),e===255&&o===0&&(s=(t/255+2)*r),t===255&&o===0&&(s=(e/255+3)*r),t===255&&e===0&&(s=(o/255+4)*r),o===255&&e===0&&(s=(t/255+5)*r),this.thumbPosition.top=s+"px"}}},T={class:"color-sidebar"};function V(o,e,t,l,s,r){return u(),g("div",T,[a("div",{class:"side-bar-bg",ref:"sideBarBg",onMousedown:e[0]||(e[0]=(...n)=>r.barClick&&r.barClick(...n))},null,544),a("div",{class:"side-bar-thumb",style:p(s.thumbPosition),onMousedown:e[1]||(e[1]=(...n)=>r.onMousedown&&r.onMousedown(...n))},null,36)])}const N=f(H,[["render",V]]);const X={props:{showColor:{type:Object,default:()=>{}}},data(){return{thumbPosition:{left:"0px"},barInfo:{}}},computed:{background(){let{r:o,g:e,b:t}=this.showColor,l=`rgba(${o},${e},${t},0)`,s=`rgb(${o},${e},${t})`;return{background:`linear-gradient(to right, ${l} 0%, ${s} 100%)`}}},watch:{showColor:{handler(){this.calcOpacity()},deep:!0}},mounted(){this.calcOpacity()},methods:{calcOpacity(){let{left:o,width:e}=this.$refs.opacityBar.getBoundingClientRect();this.barInfo={l:o,w:e};let{left:t}=this.thumbPosition;t=parseInt(t.substr(0,t.length-2)),this.thumbPosition.left=e*this.showColor.a+"px"},barClick(o){let{l:e,w:t}=this.barInfo;this.thumbPosition.left=o.offsetX+"px";let l=(o.offsetX/t).toFixed(2);l==1&&(l=1),this.showColor.a=l,this.onMousedown()},onMousedown(){let{l:o,w:e}=this.barInfo;document.onmousemove=t=>{let l=t.pageX-o;l>=e&&(l=e),l<=0&&(l=0),this.thumbPosition.l=l+"px";let s=(l/e).toFixed(2);s==1&&(s=1),this.showColor.a=s},document.onmouseup=t=>{document.onmousemove=null,document.onmouseup=null}}}},F={class:"color-opacity"};function Y(o,e,t,l,s,r){return u(),g("div",F,[a("div",{class:"color-opacity-bar",ref:"opacityBar",style:p(r.background),onMousedown:e[0]||(e[0]=(...n)=>r.barClick&&r.barClick(...n))},null,36),a("div",{class:"color-opacity-thumb",style:p(s.thumbPosition),onMousedown:e[1]||(e[1]=(...n)=>r.onMousedown&&r.onMousedown(...n))},null,36)])}const j=f(X,[["render",Y]]);const W={props:{showColor:{type:Object,default:()=>{}},calcBg:{type:Function}},data(){return{list:[{r:255,g:69,b:0,a:1},{r:255,g:140,b:0,a:1},{r:255,g:214,b:0,a:1},{r:144,g:238,b:144,a:1},{r:0,g:206,b:209,a:1},{r:30,g:144,b:255,a:1},{r:199,g:21,b:133,a:1},{r:255,g:69,b:0,a:.58},{r:255,g:120,b:0,a:1},{r:250,g:212,b:0,a:1},{r:144,g:240,b:144,a:.5},{r:0,g:186,b:189,a:1},{r:31,g:147,b:255,a:.73},{r:255,g:0,b:0,a:1}]}},methods:{toBg(o){let{r:e,g:t,b:l,a:s}=o;return`rgba(${e},${t},${l},${s})`},selectColor(o){for(let e in o)this.showColor[e]=o[e];this.calcBg()}}},z={class:"color-select"},J=["onClick"];function E(o,e,t,l,s,r){return u(),g("div",z,[(u(!0),g(w,null,v(s.list,(n,i)=>(u(),g("div",{class:y(["color-select-item",{bgImage:n.a<1}]),key:i,onClick:c=>r.selectColor(n)},[a("div",{class:"inner-item",style:p({background:r.toBg(n)})},null,4)],10,J))),128))])}const L=f(W,[["render",E]]);const A={components:{ColorPanel:O,ColorSidebar:N,ColorOpacity:j,ColorSelect:L},model:{prop:"value",event:"change"},props:{value:{type:String,default:"#c83aaa"},show:{type:Boolean,default:!0},colorFormat:{type:String,default:"hex"}},data(){return{bgColor:{r:null,g:null,b:null,a:1},showColor:{r:null,g:null,b:null,a:null},once:!0}},computed:{colorToRgba(){if(this.showColor.r!==null){if(this.colorFormat==="hex")var o=this.RgbToHex();else{let{r:e,g:t,b:l,a:s}=this.showColor;var o=`rgba(${e},${t},${l},${s})`}return o=o.replace(/\s+/g,""),this.value!==o&&this.$emit("change",o),o}}},watch:{showColor:{handler(){if(this.once){this.once=!1;return}if(this.colorFormat==="hex")var o=this.RgbToHex();else{let{r:e,g:t,b:l,a:s}=this.showColor;var o=`rgba(${e},${t},${l},${s})`}this.$emit("change",o)},deep:!0}},mounted(){let o=this.$refs.colorPicker.scrollHeight;this.$refs.colorPicker.style.setProperty("--size",o+"px"),this.onChange()},methods:{onChange(o){let e=o?o.target.value:this.value;if(e=e.replace(/\s+/g,""),e[0]==="#")var t=this.HexToRgb(e);else{e=e.replace(/[a-zA-Z\(\)]/g,"");var t=e.split(",")}if(!t||t.length!==3&&t.length!==4){console.error("数值输入错误");return}this.showColor.r=this.calcColorNumber(t[0]),this.showColor.g=this.calcColorNumber(t[1]),this.showColor.b=this.calcColorNumber(t[2]),this.showColor.a=t[3]||1,this.calcBg()},HexToRgb(o){let e=o.substring(1,o.length);if(!(e.length!==3&&e.length!==6)&&!/[^0-9a-f]/g.test(e)){if(e.length===3){var t=e.replace(/\w(?=(\w{1})+$)/g,"$&,").split(/,/g);t=t.map(s=>parseInt(s+s,16))}else{var t=e.replace(/\w(?=(\w{2})+$)/g,"$&,").split(/,/g);t=t.map(r=>parseInt(r,16))}return t}},RgbToHex(){let o="#";for(let e in this.showColor){if(e==="a")continue;if(this.showColor[e]===null)return;let t=parseInt(this.showColor[e]).toString(16);t.length===1&&(t+=t),o+=t}return o},calcColorNumber(o){return o>255&&(o=255),o<0&&(o=0),o},calcBg(){let{r:o,g:e,b:t}=this.showColor,l=[{name:"r",value:o},{name:"g",value:e},{name:"b",value:t}];l.sort((i,c)=>c.value-i.value);let s=l[0].value,r=l[1].value,n=l[2].value;l[1].value=(n-r)*s/(n-s),l[2].value=0,l[0].value=255,l[1].value=parseInt(255*l[1].value/s),l.forEach(i=>{this.bgColor[i.name]=i.value}),this.$refs.colorPanel.calcXY(),this.$refs.colorSidebar.calcTop()},changeShow(){this.$refs.colorPanel.changeShowColor()},colorRandom(){for(let o in this.showColor)this.showColor[o]=parseInt(Math.random()*255),o==="a"&&(this.showColor[o]=1);this.calcBg()}}},D={class:"color-picker",ref:"colorPicker"},K={class:"color-picker-inner"},Q={class:"color-picker-up"},Z={class:"color-picker-down"},q={class:"color-number"},G=["value"];function U(o,e,t,l,s,r){const n=m("color-panel"),i=m("color-sidebar"),c=m("color-opacity"),b=m("color-select");return u(),x(k,{name:"colorPicker"},{default:C(()=>[$(a("div",D,[a("div",K,[a("div",Q,[d(n,{ref:"colorPanel",bgColor:s.bgColor,showColor:s.showColor},null,8,["bgColor","showColor"]),d(i,{ref:"colorSidebar",bgColor:s.bgColor,onChangeShow:r.changeShow},null,8,["bgColor","onChangeShow"])]),d(c,{showColor:s.showColor},null,8,["showColor"]),d(b,{showColor:s.showColor,calcBg:r.calcBg},null,8,["showColor","calcBg"]),a("div",Z,[a("div",q,[a("input",{type:"text",value:r.colorToRgba,onChange:e[0]||(e[0]=(...h)=>r.onChange&&r.onChange(...h))},null,40,G)]),a("div",{class:"color-random",onClick:e[1]||(e[1]=(...h)=>r.colorRandom&&r.colorRandom(...h))},"随机"),a("div",{class:"color-confirm",onClick:e[2]||(e[2]=h=>o.$emit("update:show",!1))},"确定")])])],512),[[B,t.show]])]),_:1})}const ee=f(A,[["render",U]]),oe={class:"page"},te=P({__name:"color",setup(o){return(e,t)=>{const l=m("el-card");return u(),g("div",oe,[d(l,{shadow:"never",class:"vel_card_override"},{default:C(()=>[d(ee)]),_:1})])}}});const re=f(te,[["__scopeId","data-v-f217e18b"]]);export{re as default};
