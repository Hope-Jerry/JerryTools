import{T as c,E as u}from"../@wangeditor/@wangeditor.654f9dc1.js";import{_}from"../vue-img-cutter/vue-img-cutter.3d5e4c17.js";import{E as g}from"../element-plus/element-plus.33c2f463.js";import{s as f,r as v,B as h,ah as b,c as y,W as l,Q as C,a as x,V as w,o as E,u as s}from"../@vue/@vue.5ea14220.js";import"../lodash-es/lodash-es.21c98b27.js";import"../@vueuse/@vueuse.71e72d96.js";import"../@element-plus/@element-plus.99d8e261.js";import"../@popperjs/@popperjs.c75af06c.js";import"../@ctrl/@ctrl.f8748455.js";import"../dayjs/dayjs.10495895.js";import"../@kangc/@kangc.f59435d2.js";import"../vue/vue.1c0a12e0.js";import"../async-validator/async-validator.dee29e8b.js";import"../memoize-one/memoize-one.297ddbcb.js";import"../escape-html/escape-html.66262ebd.js";import"../normalize-wheel-es/normalize-wheel-es.ed76fb12.js";import"../@floating-ui/@floating-ui.72671fae.js";const V={class:"page"},B={__name:"page-editor",setup(S){const a=f(),r=v("<p>hello</p>"),i={toolbarKeys:["headerSelect","|","bold","italic","through","underline","color","bgColor","fontSize","blockquote","insertTable","|","uploadImage"]},n={placeholder:"请输入内容...",MENU_CONF:{uploadImage:{base64LimitSize:5*1024,async customUpload(e,o){d(e,t=>{o(t,"","javascript:(0);")})}}},hoverbarKeys:{image:{menuKeys:[]}}},d=(e,o)=>{let t=1048576;if(console.log(e),e.size>t){g.error("单张图片不能大于1M！");return}o("https://www.wangeditor.com/image/logo.png")},p=e=>{a.value=e};return h(()=>{const e=a.value;e!=null&&e.destroy()}),(e,o)=>{const t=b("el-card");return E(),y("div",V,[l(t,{shadow:"never",class:"vel_card_override"},{default:C(()=>[l(s(c),{style:{"border-bottom":"1px solid #e0e0e0"},editor:a.value,defaultConfig:i,mode:"simple"},null,8,["editor"]),l(s(u),{style:{height:"500px","overflow-y":"hidden"},modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=m=>r.value=m),defaultConfig:n,mode:"simple",onOnCreated:p},null,8,["modelValue"])]),_:1}),x("textarea",null,w(r.value),1)])}}},W=_(B,[["__scopeId","data-v-e95e6919"]]);export{W as default};
