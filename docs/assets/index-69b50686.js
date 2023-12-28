import{ah as c,o as d,P as x,r as I,j as C,f as ee,c as y,W as n,Q as s,L as F,a as f,R as Se,X as Ee,V as $,F as U,a9 as G,S as N,U as T,i as te,T as xe,aC as Ce,b as Ie,bi as _e,bg as ue,at as Re}from"../js/@vue/@vue.3dda84a1.js";import{_ as L}from"../js/vue-img-cutter/vue-img-cutter.2bc658a8.js";import{c as Le,d as B}from"../js/pinia/pinia.aa80a072.js";import{u as Q,a as ke,c as Pe,b as Te}from"../js/vue-router/vue-router.3db44e60.js";import{l as D}from"../js/localforage/localforage.d1bba74f.js";import{a as oe}from"../js/js-cookie/js-cookie.edb2da2a.js";import{a as H,L as Ve,f as Oe,B as Ae}from"../js/@tauri-apps/@tauri-apps.11f9d180.js";import{a as $e}from"../js/axios/axios.47b9d439.js";import{E as se,i as Ne}from"../js/element-plus/element-plus.5a404924.js";import{N as ne}from"../js/nprogress/nprogress.13f0dffc.js";import{c as De}from"../js/vue-i18n/vue-i18n.aff420db.js";import{Q as Fe}from"../js/@element-plus/@element-plus.e546425c.js";import{V as le,b as je}from"../js/@kangc/@kangc.b905bff9.js";import{h as ze}from"../js/highlight.js/highlight.js.d7f0f8ee.js";import"../js/lodash-es/lodash-es.73b757c4.js";import"../js/@vueuse/@vueuse.6c9ad468.js";import"../js/@popperjs/@popperjs.c45de710.js";import"../js/@ctrl/@ctrl.f8748455.js";import"../js/dayjs/dayjs.3b8e0730.js";import"../js/async-validator/async-validator.7f96df71.js";import"../js/memoize-one/memoize-one.297ddbcb.js";import"../js/escape-html/escape-html.45073d95.js";import"../js/normalize-wheel-es/normalize-wheel-es.ed76fb12.js";import"../js/@floating-ui/@floating-ui.72671fae.js";import"../js/@intlify/@intlify.df011fbe.js";import"../js/vue/vue.0cda2ac5.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function a(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(l){if(l.ep)return;l.ep=!0;const r=a(l);fetch(l.href,r)}})();const He={};function Ue(t,e){const a=c("router-view");return d(),x(a)}const Me=L(He,[["render",Ue]]),Be=Le(),We="modulepreload",Je=function(t,e){return new URL(t,e).href},re={},w=function(e,a,o){if(!a||a.length===0)return e();const l=document.getElementsByTagName("link");return Promise.all(a.map(r=>{if(r=Je(r,o),r in re)return;re[r]=!0;const u=r.endsWith(".css"),b=u?'[rel="stylesheet"]':"";if(!!o)for(let p=l.length-1;p>=0;p--){const S=l[p];if(S.href===r&&(!u||S.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${b}`))return;const v=document.createElement("link");if(v.rel=u?"stylesheet":We,u||(v.as="script",v.crossOrigin=""),v.href=r,document.head.appendChild(v),u)return new Promise((p,S)=>{v.addEventListener("load",p),v.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e()).catch(r=>{const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=r,window.dispatchEvent(u),!u.defaultPrevented)throw r})},q=B("collapseStateStore",()=>{const t=I(!1);return{collapseState:t,setCollapseState:a=>t.value=a}});const Ge={__name:"vel-menu-header",setup(t){const e=q(),a=C(()=>e.collapseState),o=C(()=>e.collapseState?"60px":"125px"),l=C(()=>e.collapseState?30:44),r=C(()=>e.collapseState?"0px":"10px"),u=C(()=>e.collapseState?"0px":"24px"),b=I(!0);return ee(a,m=>{m?b.value=!1:setTimeout(()=>{b.value=!0},200)}),(m,v)=>{const p=c("Sugar"),S=c("el-icon");return d(),y("section",{class:"vel_menu_header",style:F({height:o.value})},[n(S,{size:l.value,color:"#FFFFFF",style:F({marginBottom:r.value})},{default:s(()=>[n(p)]),_:1},8,["size","style"]),f("div",{class:"vel_menu_header_txt",style:F({height:u.value})},[Se(f("span",null,$(m.$t("app.name")),513),[[Ee,b.value]])],4)],4)}}},Qe=L(Ge,[["__scopeId","data-v-88188a80"]]),j=B("routesStore",()=>{const t=I([]),e=I([]),a=I(!1);return{routes:t,menus:e,hasLoadRoutes:a}}),W=B("navStore",()=>{const t=I({}),e=o=>t.value=o,a=I([]);return{routeInfo:t,setRouteInfo:e,includes:a}});const qe={__name:"vel-menu",setup(t){const e=Q(),a=j(),o=W(),l=q(),r=C(()=>l.collapseState),u=C(()=>l.collapseState?"64px":"220px"),b=C(()=>l.collapseState?"60px":"135px"),m=C(()=>a.menus),v=C(()=>o.routeInfo.id),p=S=>e.push(S);return(S,k)=>{const E=c("el-icon"),P=c("el-menu-item"),i=c("el-sub-menu"),_=c("el-menu"),h=c("el-scrollbar");return d(),y("section",{class:"vel_menu",style:F({width:u.value,backgroundColor:"#191a23"})},[n(Qe),f("div",{class:"vel_menu_panel",style:F({height:"calc(100vh - "+b.value+")"})},[n(h,null,{default:s(()=>[n(_,{class:"el_menu_override","default-active":v.value,"default-openeds":["1"],collapse:r.value,"background-color":"#191a23","text-color":"#d9d8d8"},{default:s(()=>[(d(!0),y(U,null,G(m.value,g=>(d(),y(U,{key:g.id},[g.children?(d(),x(i,{key:0,index:g.id},{title:s(()=>[n(E,null,{default:s(()=>[(d(),x(N(g.icon)))]),_:2},1024),f("span",null,$(g.label),1)]),default:s(()=>[(d(!0),y(U,null,G(g.children,R=>(d(),y("div",{key:R.id},[R.children?(d(),x(i,{key:0,index:R.id},{title:s(()=>[n(E,null,{default:s(()=>[(d(),x(N(R.icon)))]),_:2},1024),f("span",null,$(R.label),1)]),default:s(()=>[(d(!0),y(U,null,G(R.children,V=>(d(),x(P,{onClick:ae=>p(V.path),index:V.id,key:V.id},{title:s(()=>[T($(V.label),1)]),default:s(()=>[n(E,null,{default:s(()=>[(d(),x(N(V.icon)))]),_:2},1024)]),_:2},1032,["onClick","index"]))),128))]),_:2},1032,["index"])):(d(),x(P,{key:1,onClick:V=>p(R.path),index:R.id},{title:s(()=>[T($(R.label),1)]),default:s(()=>[n(E,null,{default:s(()=>[(d(),x(N(R.icon)))]),_:2},1024)]),_:2},1032,["onClick","index"]))]))),128))]),_:2},1032,["index"])):(d(),x(P,{key:1,onClick:R=>p(g.path),index:g.id},{title:s(()=>[T($(g.label),1)]),default:s(()=>[n(E,null,{default:s(()=>[(d(),x(N(g.icon)))]),_:2},1024)]),_:2},1032,["onClick","index"]))],64))),128))]),_:1},8,["default-active","collapse"])]),_:1})],4)],4)}}},Ke=L(qe,[["__scopeId","data-v-16a16999"]]),de=B("userInfoStore",()=>{const t=I({});return{userInfo:t,setUserInfo:a=>t.value=a}}),Ye=()=>{let t={userName:"jerry",token:"jerry",userNick:"Jerry"},e=oe.get("token");return e||(pe(t),t)},Xe=async()=>{oe.remove("token"),await D.removeItem("userInfo"),await D.removeItem("routes");let t=j();t.menus=[],t.routes=[],t.hasLoadRoutes=!1},pe=async t=>{oe.set("token",t.token,{expires:1}),await D.setItem("userInfo",t)},M={isAuthenticated:Ye,logout:Xe,cacheUserInfo:pe};const Ze={class:"vel_container_header_menu","data-tauri-drag-region":""},et={class:"vel_container_header_menu_left"},tt={class:"vel_container_header_menu_right"},ot={class:"vel_header_item vel_container_header_menu_right_nick"},nt={__name:"vel-container-header-menu",setup(t){Q();const e=W(),a=de(),o=q();te(()=>{D.getItem("userInfo").then(p=>{a.setUserInfo(p)})});const l=C(()=>o.collapseState);C(()=>e.routeInfo.breadcrumb),C(()=>a.userInfo.userNick);const r=()=>{o.setCollapseState(!l.value)},u=()=>{},b=async()=>{await H.minimize()},m=async()=>{let p=await H.isMaximized();console.log(p),p?H.setSize(new Ve(1e3,800)):await H.maximize()},v=()=>{H.hide()};return(p,S)=>{const k=c("el-icon"),E=c("Sunny"),P=c("el-button"),i=c("el-dropdown"),_=c("Minus"),h=c("CopyDocument"),g=c("CloseBold");return d(),y("section",Ze,[f("div",et,[f("div",{onClick:r,class:"vel_header_item vel_container_header_menu_left_collapse"},[n(k,{size:18},{default:s(()=>[(d(),x(N(l.value?"Expand":"Fold")))]),_:1})])]),f("div",tt,[f("div",ot,[n(i,{class:"el_dropdown_override margin_left"},{default:s(()=>[n(P,{type:p.primary,text:"",size:"small",onClick:u},{default:s(()=>[n(k,{color:"#409EFC",class:"no-inherit"},{default:s(()=>[n(E)]),_:1})]),_:1},8,["type"])]),_:1}),n(i,{class:"el_dropdown_override margin_left"},{default:s(()=>[n(P,{type:p.primary,text:"",size:"small",onClick:b},{default:s(()=>[n(k,{color:"#409EFC",class:"no-inherit"},{default:s(()=>[n(_)]),_:1})]),_:1},8,["type"])]),_:1}),n(i,{class:"el_dropdown_override margin_left"},{default:s(()=>[n(P,{type:p.primary,text:"",size:"small",onClick:m},{default:s(()=>[n(k,{color:"#E6A23C",class:"no-inherit"},{default:s(()=>[n(h)]),_:1})]),_:1},8,["type"])]),_:1}),n(i,{class:"el_dropdown_override margin_left"},{default:s(()=>[n(P,{type:p.primary,text:"",size:"small",onClick:v},{default:s(()=>[n(k,{color:"#F56C6C",class:"no-inherit"},{default:s(()=>[n(g)]),_:1})]),_:1},8,["type"])]),_:1})])])])}}},at=L(nt,[["__scopeId","data-v-e55a3300"]]);const st={class:"vel_container_header_navbar"},lt={class:"vel_navbar_panel"},rt={class:"vel_navbar_operation"},ct={__name:"vel-container-header-navbar",setup(t){const e=Q(),a=W(),o=I([]),l=I("");te(()=>{let i=a.routeInfo;r(i)}),ee(()=>a.routeInfo,i=>{r(i)});const r=i=>{if(Object.keys(i).length===0)return;let _=o.value.find(h=>h.path===i.path);_?l.value=_.path:(o.value.push({label:i.label,path:i.path,closable:i.path!=="/welcome"}),l.value=i.path)},u=i=>{e.push(i.props.name)},b=i=>{l.value===i&&o.value.forEach((_,h)=>{if(_.path===i){let g=o.value[h+1]||o.value[h-1];g&&e.push(g.path)}}),m(i),o.value.length===0&&e.push("/welcome")},m=i=>{o.value=o.value.filter(h=>h.path!==i);let _=a.includes.filter(h=>h.path!==i);a.includes=_},v=()=>{let i=[];o.value.forEach(_=>{_.path!==l.value&&i.push(_.path)}),i.forEach(_=>{m(_)})},p=()=>{let i=[];for(let _=0;_<o.value.length;_++){let h=o.value[_].path;if(h!==l.value)i.push(h);else break}i.forEach(_=>{m(_)})},S=()=>{let i=[];for(let _=o.value.length-1;_>=0;_--){let h=o.value[_].path;if(h!==l.value)i.push(h);else break}i.forEach(_=>{m(_)})};let k=()=>{let i=[];for(let _=0;_<o.value.length;_++){let h=o.value[_].path;h!=="/welcome"&&i.push(h)}i.forEach(_=>{m(_)})};const E=new Map;E.set("closeOther",v),E.set("closeLeft",p),E.set("closeRight",S),E.set("closeAll",k);const P=i=>{E.get(i)(),o.value.length===0&&e.push("/welcome")};return(i,_)=>{const h=c("HomeFilled"),g=c("el-icon"),R=c("el-tab-pane"),V=c("el-tabs"),ae=c("ArrowDown"),he=c("Close"),J=c("el-dropdown-item"),fe=c("ArrowLeft"),ge=c("ArrowRight"),be=c("CircleClose"),we=c("el-dropdown-menu"),ye=c("el-dropdown");return d(),y("section",st,[f("div",lt,[n(V,{modelValue:l.value,"onUpdate:modelValue":_[0]||(_[0]=O=>l.value=O),onTabClick:u,onTabRemove:b,class:"vel_el_tabs_override"},{default:s(()=>[(d(!0),y(U,null,G(o.value,O=>(d(),x(R,{name:O.path,closable:O.closable,key:O.path},{label:s(()=>[O.path=="/welcome"?(d(),x(g,{key:0,class:"vel_el_icon_home",size:16},{default:s(()=>[n(h)]),_:1})):xe("",!0),f("span",null,$(O.label),1)]),_:2},1032,["name","closable"]))),128))]),_:1},8,["modelValue"])]),f("div",rt,[n(ye,{onCommand:P},{dropdown:s(()=>[n(we,null,{default:s(()=>[n(J,{command:"closeOther"},{default:s(()=>[n(g,null,{default:s(()=>[n(he)]),_:1}),T(" 关闭其他 ")]),_:1}),n(J,{command:"closeLeft"},{default:s(()=>[n(g,null,{default:s(()=>[n(fe)]),_:1}),T(" 关闭左边 ")]),_:1}),n(J,{command:"closeRight"},{default:s(()=>[n(g,null,{default:s(()=>[n(ge)]),_:1}),T(" 关闭右边 ")]),_:1}),n(J,{command:"closeAll"},{default:s(()=>[n(g,null,{default:s(()=>[n(be)]),_:1}),T(" 关闭全部 ")]),_:1})]),_:1})]),default:s(()=>[f("span",null,[n(g,{class:"vel_navbar_operation_icon"},{default:s(()=>[n(ae)]),_:1})])]),_:1})])])}}},it=L(ct,[["__scopeId","data-v-a5e4beeb"]]);const _t={class:"vel_container_header"},ut={__name:"vel-container-header",setup(t){return(e,a)=>(d(),y("section",_t,[n(at),n(it)]))}},dt=L(ut,[["__scopeId","data-v-d8825016"]]);const pt={class:"vel_container_page"},mt={__name:"vel-container-page",setup(t){const e=W(),a=C(()=>{let o=e.includes,l=[];return o.forEach(r=>{l.push(r.cptName)}),l});return(o,l)=>{const r=c("router-view"),u=c("el-scrollbar");return d(),y("section",pt,[n(u,null,{default:s(()=>[n(r,null,{default:s(({Component:b})=>[(d(),x(Ce,{include:a.value},[(d(),x(N(b)))],1032,["include"]))]),_:1})]),_:1})])}}},vt=L(mt,[["__scopeId","data-v-517f9e8a"]]);const ht={__name:"vel-container",setup(t){const e=q(),a=C(()=>e.collapseState?"64px":"220px");return(o,l)=>(d(),y("section",{class:"vel_container",style:F({paddingLeft:a.value})},[n(dt),n(vt)],4))}},ft=L(ht,[["__scopeId","data-v-c8c5ea7a"]]),gt=B("documentWHStore",()=>({wh:I({w:0,h:0})}));const bt={class:"vel_frame_main"},wt={__name:"vel-frame-main",setup(t){const e=j(),a=W(),o=gt(),l=ke();te(()=>{r(l.path),b(),window.addEventListener("resize",()=>{b()})}),ee(()=>l.path,m=>{m!=="/login"&&r(m)});const r=m=>{let v=e.routes.find(p=>p.path===m);a.setRouteInfo(v),u()},u=()=>{let m=l.matched,v=m[m.length-1],p=v.components.default.__name,S=a.includes;S.find(k=>k.cptName===p)||S.push({path:v.path,cptName:p})},b=()=>{o.wh.w=document.documentElement.clientWidth,o.wh.h=document.documentElement.clientHeight};return(m,v)=>(d(),y("section",bt,[n(Ke),n(ft)]))}},yt=L(wt,[["__scopeId","data-v-d496c912"]]),St="https://mutolee.github.io/vel-admin-web",ce={SUCCESS:200,WARNING:201,NO_MORE:202,ERROR:300,NO_LOGIN:301,NO_PERM:302},me=$e.create({baseURL:St,timeout:10*1e3});me.interceptors.request.use(t=>{if(t.url.indexOf("/data/login.json")===-1){let e=M.isAuthenticated();e?t.headers.Authorization=`Bearer ${e}`:M.logout()}return t},t=>Promise.reject(t));me.interceptors.response.use(t=>{let e=t.data;return e.statusCode===ce.NO_LOGIN?M.logout():e.statusCode===ce.NO_PERM&&se.error("没有权限，请联系管理员！"),t},t=>(se.error("操作失败，请刷新浏览器再次尝试，或联系管理员！"+t),Promise.reject(t)));const Et="",xt=`${Et}/api/v1`,Ct={Form:"Form",Json:"Json",Text:"Text",Bytes:"Bytes"},It={timeout:60},Rt=t=>/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t),Lt=(t,e)=>e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t,kt=(t,e)=>t&&!Rt(e)?Lt(t,e):e,Pt=(t,e)=>{if(!e)return t;const a=JSON.stringify(e);return a&&(t+=(t.indexOf("?")===-1?"?":"&")+a),t},ve=(t,e={})=>{const a={...e.params};return e.headers||(e.headers={}),e?.body&&e.body.type===Ct.Form&&(e.headers["Content-Type"]="multipart/form-data"),e={...It,...e},Oe(Pt(kt(xt,t),a),e).then(({status:o,data:l})=>o>=200&&o<400?{data:l}:Promise.reject({status:o,data:l})).catch(o=>(console.error(o),Promise.reject(o)))},Tt="https://mutolee.github.io/vel-admin-web",Vt="http://localhost:5173";function Ot(t,e){return ve(t,{method:"get",params:e})}function At(t,e){const a=Ae.json(e);return ve(t,{method:"post",body:a})}const X={get:Ot,post:At,HTTP_BASE_URL:Tt,HTTP_BASE_URL_DEV:Vt};const $t={class:"vel_login"},Nt={__name:"vel-frame-login",setup(t){const e=Q(),a=I(!1),o=I({userName:"",passWord:""}),l=()=>{a.value=!0,X.get("/data/login.json",{...o.value}).then(async r=>{await M.cacheUserInfo(r.data.data),await new Promise(u=>setTimeout(u,1e3)),e.push("/")}).catch(r=>{a.value=!1,console.error(r)}).finally(()=>{})};return(r,u)=>{const b=c("ElementPlus"),m=c("el-icon"),v=c("el-input"),p=c("el-form-item"),S=c("el-button"),k=c("el-form");return d(),y("section",$t,[n(k,{model:o.value,class:"el_form_override"},{default:s(()=>[f("h3",null,[n(m,{size:36,color:"#409EFF"},{default:s(()=>[n(b)]),_:1}),T(" Jerry工具箱 ")]),n(p,null,{default:s(()=>[n(v,{modelValue:o.value.userName,"onUpdate:modelValue":u[0]||(u[0]=E=>o.value.userName=E),placeholder:"用户名",size:"large","prefix-icon":"UserFilled",clearable:""},null,8,["modelValue"])]),_:1}),n(p,null,{default:s(()=>[n(v,{modelValue:o.value.passWord,"onUpdate:modelValue":u[1]||(u[1]=E=>o.value.passWord=E),placeholder:"密码",type:"password",size:"large","prefix-icon":"Lock","show-password":""},null,8,["modelValue"])]),_:1}),n(p,null,{default:s(()=>[n(S,{type:"primary",loading:a.value,onClick:l,size:"large",style:{width:"100%"}},{default:s(()=>[T(" 登录 ")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])}}},Dt=L(Nt,[["__scopeId","data-v-5c0806d2"]]);const Ft={style:{height:"260px"}},jt=Ie('<table class="table" data-v-154e97d1><tr data-v-154e97d1><td data-v-154e97d1>vue</td><td data-v-154e97d1>^3.3.4</td><td data-v-154e97d1>vite</td><td data-v-154e97d1>^4.4.11</td></tr><tr data-v-154e97d1><td data-v-154e97d1>vue-router</td><td data-v-154e97d1>^4.2.5</td><td data-v-154e97d1>pinia</td><td data-v-154e97d1>^2.1.7</td></tr><tr data-v-154e97d1><td data-v-154e97d1>element-plus</td><td data-v-154e97d1>^2.4.2</td><td data-v-154e97d1>axios</td><td data-v-154e97d1>^1.6.0</td></tr><tr data-v-154e97d1><td data-v-154e97d1>echarts</td><td data-v-154e97d1>^5.4.3</td><td data-v-154e97d1>localforage</td><td data-v-154e97d1>^1.10.0</td></tr><tr data-v-154e97d1><td data-v-154e97d1>js-cookie</td><td data-v-154e97d1>^3.0.5</td><td data-v-154e97d1>nprogress</td><td data-v-154e97d1>^0.2.0</td></tr></table>',1),zt=[jt],Ht={__name:"table-demo-1",setup(t){return I("https://github.com/mutolee/vel-admin-web"),(e,a)=>(d(),y("div",Ft,zt))}},Ut=L(Ht,[["__scopeId","data-v-154e97d1"]]);const Mt=t=>(_e("data-v-1749ccd2"),t=t(),ue(),t),Bt={class:"welcome_panel"},Wt={class:"card-header"},Jt={class:"vel_card_header_left"},Gt=Mt(()=>f("span",null,"软件信息",-1)),Qt={class:"vel_card_header_right"},qt={__name:"vel-frame-welcome",setup(t){const e=de();return X.baseURL,X.baseURL+"",C(()=>e.userInfo.userNick),(a,o)=>{const l=c("Sugar"),r=c("el-icon"),u=c("el-tag"),b=c("el-card"),m=c("el-col"),v=c("el-row");return d(),y("div",Bt,[n(v,null,{default:s(()=>[n(m,{xs:24,sm:24,md:24,lg:10,xl:10},{default:s(()=>[n(b,{shadow:"hover",class:"vel_el_card_override"},{header:s(()=>[f("div",Wt,[f("div",Jt,[n(r,{size:20},{default:s(()=>[n(l)]),_:1}),Gt]),f("div",Qt,[n(u,{type:"info"},{default:s(()=>[T("V 0.0.1")]),_:1})])])]),default:s(()=>[n(Ut)]),_:1})]),_:1})]),_:1})])}}},Kt=L(qt,[["__scopeId","data-v-1749ccd2"]]);const Yt={},Xt=t=>(_e("data-v-1c954acb"),t=t(),ue(),t),Zt={class:"notfound_panel"},eo={class:"notfound_panel_left"},to=Xt(()=>f("div",{class:"notfound_panel_right"},[f("h2",null,"404 NotFound"),f("p",null,"1. 请确定浏览器地址栏URL是否正确"),f("p",null,"2. 联系管理员，确定是否拥有该URL的访问权限")],-1));function oo(t,e){const a=c("el-empty"),o=c("el-card");return d(),y("div",Zt,[n(o,{shadow:"never",class:"vel_card_override"},{default:s(()=>[f("div",eo,[n(a,{description:" "})]),to]),_:1})])}const ie=L(Yt,[["render",oo],["__scopeId","data-v-1c954acb"]]),no={app:{name:"叮当工具箱"},menus:{shortcut:"快捷",developmentTool:"开发工具",jsonCompiler:"json编译器",colorpicker:"颜色选择器",qrcode:"二维码",cronSelect:"cron表达式"}},ao={app:{name:"Dingdang tools"},menus:{shortcut:"Shortcut",developmentTool:"Development tool",jsonCompiler:"Json compiler",colorpicker:"Color picker",qrcode:"Qrcode",cronSelect:"Cron"}},so={en:ao,zh:no};let lo="zh";const A=new De({globalInjection:!0,locale:lo,messages:so}),Y={pages:[{id:"0-1",label:"个人中心",icon:"",path:"/user/userInfo",component:"/user/page-userinfo"}],menus:[{id:"2",label:A.global.t("menus.shortcut"),icon:"Sunrise",path:"/shortcut/mi",component:"/shortcut/shortcut-mi"},{id:"100",label:A.global.t("menus.developmentTool"),icon:"Dish",children:[{id:"100-1",label:A.global.t("menus.jsonCompiler"),icon:"Lollipop",path:"/compiler/json",component:"/compiler/json/json"},{id:"100-4",label:A.global.t("menus.qrcode"),icon:"Orange",path:"/jieshao",component:"/page-jieshao"},{id:"100-5",label:A.global.t("menus.colorpicker"),icon:"Apple",path:"/colorpicker",component:"/compiler/color/color"},{id:"100-6",label:A.global.t("menus.cronSelect"),icon:"Apple",path:"/cron",component:"/compiler/cron/cron"}]}]},ro=[{name:"gen",path:"/",component:yt,redirect:"/welcome",children:[{path:"/welcome",component:Kt},{path:"/404",component:ie}]},{path:"/login",component:Dt},{path:"/:pathMatch(.*)*",component:ie}],K=Pe({history:Te(),routes:ro});K.beforeEach(async t=>{ne.start();let e=M.isAuthenticated();if(!e&&t.path!=="/login")return"/login";if(e&&t.path==="/login")return"/";if(e){if(!j().hasLoadRoutes)return await co()?t.fullPath:!1;if(!uo(t))return"/404"}});K.afterEach(()=>{ne.done()});const co=async()=>{let t=await D.getItem("routes");return t==null?(console.log(Y),t=await D.setItem("routes",Y)):t=await D.setItem("routes",Y),t!=null?(io(t),!0):!1},io=t=>{let e=[];Z(e,t.menus),Z(e,t.pages),e.push({label:"404",path:"/404",breadcrumb:["404页面"]},{label:"Welcome",path:"/welcome",breadcrumb:["欢迎页面"]});let a=j();a.routes=e,a.menus=t.menus,_o(e),a.hasLoadRoutes=!0},Z=(t,e,a)=>{for(let o=0;o<e.length;o++)e[o].children&&e[o].children.length>0?(a?e[o].breadcrumb=[].concat(a):e[o].breadcrumb=[],e[o].breadcrumb.push(e[o].label),Z(t,e[o].children,e[o].breadcrumb)):e[o].path&&(a?e[o].breadcrumb=[].concat(a):e[o].breadcrumb=[],e[o].breadcrumb.push(e[o].label),t.push(e[o]))},_o=t=>{let e=Object.assign({"/src/views/compiler/color/color.vue":()=>w(()=>import("../js/color/color.99e9fbf5.js"),["..\\js\\color\\color.99e9fbf5.js","..\\js\\index\\index.e5a75230.js","..\\js\\@vue\\@vue.3dda84a1.js","..\\js\\vue-img-cutter\\vue-img-cutter.2bc658a8.js","./vue-img-cutter-63dd7fd0.css","./index-495c7e50.css","./color-147d76ae.css"],import.meta.url),"/src/views/compiler/cron/cron.vue":()=>w(()=>import("../js/cron/cron.e0b595c7.js"),["..\\js\\cron\\cron.e0b595c7.js","..\\js\\index\\index.e5a75230.js","..\\js\\@vue\\@vue.3dda84a1.js","..\\js\\vue-img-cutter\\vue-img-cutter.2bc658a8.js","./vue-img-cutter-63dd7fd0.css","./index-495c7e50.css","./cron-1e07e386.css"],import.meta.url),"/src/views/compiler/json/json.vue":()=>w(()=>import("../js/json/json.3f7185b7.js"),["..\\js\\json\\json.3f7185b7.js","..\\js\\json-source-map\\json-source-map.81e84092.js","..\\js\\@fortawesome\\@fortawesome.bbfce0e2.js","..\\js\\natural-compare-lite\\natural-compare-lite.a0ad4530.js","..\\js\\@kangc\\@kangc.b905bff9.js","..\\js\\vue\\vue.0cda2ac5.js","..\\js\\@vue\\@vue.3dda84a1.js","./@kangc-eb5bbcfa.css","..\\js\\memoize-one\\memoize-one.297ddbcb.js","..\\js\\@codemirror\\@codemirror.e164719c.js","..\\js\\@lezer\\@lezer.415bab8d.js","..\\js\\crelt\\crelt.7bb88e1d.js","..\\js\\style-mod\\style-mod.fd510d21.js","..\\js\\w3c-keyname\\w3c-keyname.9fb136d3.js","..\\js\\@replit\\@replit.5bbdb1a8.js","..\\js\\codemirror-wrapped-line-indent\\codemirror-wrapped-line-indent.1ab4ba66.js","..\\js\\ajv\\ajv.fdafbe4b.js","..\\js\\fast-deep-equal\\fast-deep-equal.883119f3.js","..\\js\\uri-js\\uri-js.c53746ad.js","..\\js\\jmespath\\jmespath.4b50c1ce.js","..\\js\\immutable-json-patch\\immutable-json-patch.d2cfd1fd.js","..\\js\\lodash-es\\lodash-es.73b757c4.js","..\\js\\jsonrepair\\jsonrepair.034a35db.js","..\\js\\vue-img-cutter\\vue-img-cutter.2bc658a8.js","./vue-img-cutter-63dd7fd0.css","..\\js\\pinia\\pinia.aa80a072.js","..\\js\\vue-router\\vue-router.3db44e60.js","..\\js\\localforage\\localforage.d1bba74f.js","..\\js\\js-cookie\\js-cookie.edb2da2a.js","..\\js\\@tauri-apps\\@tauri-apps.11f9d180.js","..\\js\\axios\\axios.47b9d439.js","..\\js\\element-plus\\element-plus.5a404924.js","..\\js\\@vueuse\\@vueuse.6c9ad468.js","..\\js\\@element-plus\\@element-plus.e546425c.js","..\\js\\@popperjs\\@popperjs.c45de710.js","..\\js\\@ctrl\\@ctrl.f8748455.js","..\\js\\dayjs\\dayjs.3b8e0730.js","..\\js\\async-validator\\async-validator.7f96df71.js","..\\js\\escape-html\\escape-html.45073d95.js","..\\js\\normalize-wheel-es\\normalize-wheel-es.ed76fb12.js","..\\js\\@floating-ui\\@floating-ui.72671fae.js","./element-plus-c84293a0.css","..\\js\\nprogress\\nprogress.13f0dffc.js","./nprogress-771398e6.css","..\\js\\vue-i18n\\vue-i18n.aff420db.js","..\\js\\@intlify\\@intlify.df011fbe.js","..\\js\\highlight.js\\highlight.js.d7f0f8ee.js","./json-0acbfaaf.css"],import.meta.url),"/src/views/example/page-editor.vue":()=>w(()=>import("../js/example/page-editor.1fceca8c.js"),["..\\js\\example\\page-editor.1fceca8c.js","..\\js\\@wangeditor\\@wangeditor.d2efa31c.js","..\\js\\@vue\\@vue.3dda84a1.js","./@wangeditor-9593e9ac.css","..\\js\\vue-img-cutter\\vue-img-cutter.2bc658a8.js","./vue-img-cutter-63dd7fd0.css","..\\js\\element-plus\\element-plus.5a404924.js","..\\js\\lodash-es\\lodash-es.73b757c4.js","..\\js\\@vueuse\\@vueuse.6c9ad468.js","..\\js\\@element-plus\\@element-plus.e546425c.js","..\\js\\@popperjs\\@popperjs.c45de710.js","..\\js\\@ctrl\\@ctrl.f8748455.js","..\\js\\dayjs\\dayjs.3b8e0730.js","..\\js\\@kangc\\@kangc.b905bff9.js","..\\js\\vue\\vue.0cda2ac5.js","./@kangc-eb5bbcfa.css","..\\js\\async-validator\\async-validator.7f96df71.js","..\\js\\memoize-one\\memoize-one.297ddbcb.js","..\\js\\escape-html\\escape-html.45073d95.js","..\\js\\normalize-wheel-es\\normalize-wheel-es.ed76fb12.js","..\\js\\@floating-ui\\@floating-ui.72671fae.js","./element-plus-c84293a0.css","./page-editor-9a9e664e.css"],import.meta.url),"/src/views/example/page-goods-manager.vue":()=>w(()=>import("../js/example/page-goods-manager.43675585.js"),["..\\js\\example\\page-goods-manager.43675585.js","..\\js\\@vue\\@vue.3dda84a1.js","..\\js\\@wangeditor\\@wangeditor.d2efa31c.js","./@wangeditor-9593e9ac.css","..\\js\\sku-single\\sku-single.69c2737f.js","..\\js\\vue-img-cutter\\vue-img-cutter.2bc658a8.js","./vue-img-cutter-63dd7fd0.css","./sku-single-9b762595.css","..\\js\\@element-plus\\@element-plus.e546425c.js","..\\js\\image-cutter-dialog\\image-cutter-dialog.f52aa190.js","./image-cutter-dialog-e8315879.css","..\\js\\pinia\\pinia.aa80a072.js","..\\js\\vue-router\\vue-router.3db44e60.js","..\\js\\localforage\\localforage.d1bba74f.js","..\\js\\@kangc\\@kangc.b905bff9.js","..\\js\\vue\\vue.0cda2ac5.js","./@kangc-eb5bbcfa.css","..\\js\\js-cookie\\js-cookie.edb2da2a.js","..\\js\\@tauri-apps\\@tauri-apps.11f9d180.js","..\\js\\axios\\axios.47b9d439.js","..\\js\\element-plus\\element-plus.5a404924.js","..\\js\\lodash-es\\lodash-es.73b757c4.js","..\\js\\@vueuse\\@vueuse.6c9ad468.js","..\\js\\@popperjs\\@popperjs.c45de710.js","..\\js\\@ctrl\\@ctrl.f8748455.js","..\\js\\dayjs\\dayjs.3b8e0730.js","..\\js\\async-validator\\async-validator.7f96df71.js","..\\js\\memoize-one\\memoize-one.297ddbcb.js","..\\js\\escape-html\\escape-html.45073d95.js","..\\js\\normalize-wheel-es\\normalize-wheel-es.ed76fb12.js","..\\js\\@floating-ui\\@floating-ui.72671fae.js","./element-plus-c84293a0.css","..\\js\\nprogress\\nprogress.13f0dffc.js","./nprogress-771398e6.css","..\\js\\vue-i18n\\vue-i18n.aff420db.js","..\\js\\@intlify\\@intlify.df011fbe.js","..\\js\\highlight.js\\highlight.js.d7f0f8ee.js","./page-goods-manager-ded3ddc8.css"],import.meta.url),"/src/views/example/page-img-cutter.vue":()=>w(()=>import("../js/example/page-img-cutter.7144d345.js"),["..\\js\\example\\page-img-cutter.7144d345.js","..\\js\\image-cutter-dialog\\image-cutter-dialog.f52aa190.js","..\\js\\vue-img-cutter\\vue-img-cutter.2bc658a8.js","..\\js\\@vue\\@vue.3dda84a1.js","./vue-img-cutter-63dd7fd0.css","./image-cutter-dialog-e8315879.css","./page-img-cutter-b8b4f65e.css"],import.meta.url),"/src/views/example/page-index-manager.vue":()=>w(()=>import("../js/example/page-index-manager.405ce277.js"),["..\\js\\example\\page-index-manager.405ce277.js","..\\js\\vue-draggable-plus\\vue-draggable-plus.c0918d65.js","..\\js\\@vue\\@vue.3dda84a1.js","..\\js\\vue-img-cutter\\vue-img-cutter.2bc658a8.js","./vue-img-cutter-63dd7fd0.css","..\\js\\pinia\\pinia.aa80a072.js","..\\js\\vue-router\\vue-router.3db44e60.js","..\\js\\localforage\\localforage.d1bba74f.js","..\\js\\@kangc\\@kangc.b905bff9.js","..\\js\\vue\\vue.0cda2ac5.js","./@kangc-eb5bbcfa.css","..\\js\\js-cookie\\js-cookie.edb2da2a.js","..\\js\\@tauri-apps\\@tauri-apps.11f9d180.js","..\\js\\axios\\axios.47b9d439.js","..\\js\\element-plus\\element-plus.5a404924.js","..\\js\\lodash-es\\lodash-es.73b757c4.js","..\\js\\@vueuse\\@vueuse.6c9ad468.js","..\\js\\@element-plus\\@element-plus.e546425c.js","..\\js\\@popperjs\\@popperjs.c45de710.js","..\\js\\@ctrl\\@ctrl.f8748455.js","..\\js\\dayjs\\dayjs.3b8e0730.js","..\\js\\async-validator\\async-validator.7f96df71.js","..\\js\\memoize-one\\memoize-one.297ddbcb.js","..\\js\\escape-html\\escape-html.45073d95.js","..\\js\\normalize-wheel-es\\normalize-wheel-es.ed76fb12.js","..\\js\\@floating-ui\\@floating-ui.72671fae.js","./element-plus-c84293a0.css","..\\js\\nprogress\\nprogress.13f0dffc.js","./nprogress-771398e6.css","..\\js\\vue-i18n\\vue-i18n.aff420db.js","..\\js\\@intlify\\@intlify.df011fbe.js","..\\js\\highlight.js\\highlight.js.d7f0f8ee.js","./page-index-manager-61e6a18c.css"],import.meta.url),"/src/views/example/page-markdown.vue":()=>w(()=>import("../js/example/page-markdown.adbbe6e9.js"),["..\\js\\example\\page-markdown.adbbe6e9.js","..\\js\\vue-img-cutter\\vue-img-cutter.2bc658a8.js","..\\js\\@vue\\@vue.3dda84a1.js","./vue-img-cutter-63dd7fd0.css","./page-markdown-887c9685.css"],import.meta.url),"/src/views/example/page-shop-type.vue":()=>w(()=>import("../js/example/page-shop-type.fcf6eb2c.js"),["..\\js\\example\\page-shop-type.fcf6eb2c.js","..\\js\\image-cutter-dialog\\image-cutter-dialog.f52aa190.js","..\\js\\vue-img-cutter\\vue-img-cutter.2bc658a8.js","..\\js\\@vue\\@vue.3dda84a1.js","./vue-img-cutter-63dd7fd0.css","./image-cutter-dialog-e8315879.css","..\\js\\pinia\\pinia.aa80a072.js","..\\js\\vue-router\\vue-router.3db44e60.js","..\\js\\localforage\\localforage.d1bba74f.js","..\\js\\@kangc\\@kangc.b905bff9.js","..\\js\\vue\\vue.0cda2ac5.js","./@kangc-eb5bbcfa.css","..\\js\\js-cookie\\js-cookie.edb2da2a.js","..\\js\\@tauri-apps\\@tauri-apps.11f9d180.js","..\\js\\axios\\axios.47b9d439.js","..\\js\\element-plus\\element-plus.5a404924.js","..\\js\\lodash-es\\lodash-es.73b757c4.js","..\\js\\@vueuse\\@vueuse.6c9ad468.js","..\\js\\@element-plus\\@element-plus.e546425c.js","..\\js\\@popperjs\\@popperjs.c45de710.js","..\\js\\@ctrl\\@ctrl.f8748455.js","..\\js\\dayjs\\dayjs.3b8e0730.js","..\\js\\async-validator\\async-validator.7f96df71.js","..\\js\\memoize-one\\memoize-one.297ddbcb.js","..\\js\\escape-html\\escape-html.45073d95.js","..\\js\\normalize-wheel-es\\normalize-wheel-es.ed76fb12.js","..\\js\\@floating-ui\\@floating-ui.72671fae.js","./element-plus-c84293a0.css","..\\js\\nprogress\\nprogress.13f0dffc.js","./nprogress-771398e6.css","..\\js\\vue-i18n\\vue-i18n.aff420db.js","..\\js\\@intlify\\@intlify.df011fbe.js","..\\js\\highlight.js\\highlight.js.d7f0f8ee.js","./page-shop-type-50ad4976.css"],import.meta.url),"/src/views/example/page-sku-single.vue":()=>w(()=>import("../js/example/page-sku-single.091f946f.js"),["..\\js\\example\\page-sku-single.091f946f.js","..\\js\\sku-single\\sku-single.69c2737f.js","..\\js\\vue-img-cutter\\vue-img-cutter.2bc658a8.js","..\\js\\@vue\\@vue.3dda84a1.js","./vue-img-cutter-63dd7fd0.css","./sku-single-9b762595.css","./page-sku-single-fd22a46c.css"],import.meta.url),"/src/views/other/page-chart.vue":()=>w(()=>import("../js/other/page-chart.efe95f37.js"),["..\\js\\other\\page-chart.efe95f37.js","..\\js\\vue-img-cutter\\vue-img-cutter.2bc658a8.js","..\\js\\@vue\\@vue.3dda84a1.js","./vue-img-cutter-63dd7fd0.css","./page-chart-f16231d5.css"],import.meta.url),"/src/views/other/page-json.vue":()=>w(()=>import("../js/other/page-json.2d286a3b.js"),["..\\js\\other\\page-json.2d286a3b.js","..\\js\\vue-img-cutter\\vue-img-cutter.2bc658a8.js","..\\js\\@vue\\@vue.3dda84a1.js","./vue-img-cutter-63dd7fd0.css","./page-json-e2b63fef.css"],import.meta.url),"/src/views/page-api.vue":()=>w(()=>import("../js/views/page-api.ea78c3bf.js"),["..\\js\\views\\page-api.ea78c3bf.js","..\\js\\vue-img-cutter\\vue-img-cutter.2bc658a8.js","..\\js\\@vue\\@vue.3dda84a1.js","./vue-img-cutter-63dd7fd0.css","./page-api-0fee5d08.css"],import.meta.url),"/src/views/page-jieshao.vue":()=>w(()=>import("../js/views/page-jieshao.7cb8bb79.js"),["..\\js\\views\\page-jieshao.7cb8bb79.js","..\\js\\vue-img-cutter\\vue-img-cutter.2bc658a8.js","..\\js\\@vue\\@vue.3dda84a1.js","./vue-img-cutter-63dd7fd0.css","./page-jieshao-8bcbc6b4.css"],import.meta.url),"/src/views/page-luyou.vue":()=>w(()=>import("../js/views/page-luyou.0989d2e2.js"),["..\\js\\views\\page-luyou.0989d2e2.js","..\\js\\vue-img-cutter\\vue-img-cutter.2bc658a8.js","..\\js\\@vue\\@vue.3dda84a1.js","./vue-img-cutter-63dd7fd0.css","./page-luyou-f270f893.css"],import.meta.url),"/src/views/shortcut/shortcut-mi.vue":()=>w(()=>import("../js/shortcut/shortcut-mi.e69deb2f.js"),["..\\js\\shortcut\\shortcut-mi.e69deb2f.js","..\\js\\vue-img-cutter\\vue-img-cutter.2bc658a8.js","..\\js\\@vue\\@vue.3dda84a1.js","./vue-img-cutter-63dd7fd0.css","./shortcut-mi-5d418513.css"],import.meta.url),"/src/views/user/page-message.vue":()=>w(()=>import("../js/user/page-message.9a5a6ac0.js"),["..\\js\\user\\page-message.9a5a6ac0.js","..\\js\\vue-img-cutter\\vue-img-cutter.2bc658a8.js","..\\js\\@vue\\@vue.3dda84a1.js","./vue-img-cutter-63dd7fd0.css","./page-message-b31799f7.css"],import.meta.url),"/src/views/user/page-userinfo.vue":()=>w(()=>import("../js/user/page-userinfo.49fded89.js"),["..\\js\\user\\page-userinfo.49fded89.js","..\\js\\vue-img-cutter\\vue-img-cutter.2bc658a8.js","..\\js\\@vue\\@vue.3dda84a1.js","./vue-img-cutter-63dd7fd0.css","./page-userinfo-8ce07b33.css"],import.meta.url)});for(let a=0;a<t.length;a++){let o=t[a];o.path==="/404"||o.path==="/welcome"||K.addRoute("gen",{path:o.path,component:e["/src/views"+o.component+".vue"]})}},uo=t=>j().routes.find(o=>o.path===t.path),po=t=>{t.use(Ne,{size:"medium",zIndex:3e3});for(const[e,a]of Object.entries(Fe))t.component(e,a);ne.configure({showSpinner:!1,speed:600}),le.use(je,{Hljs:ze}),t.use(le)},mo=t=>{},z=Re(Me);z.use(po);z.use(mo);z.use(Be);z.use(K);z.use(A);z.mount("#app");export{w as _,X as t,gt as u};
