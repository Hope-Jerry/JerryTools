import{g as s}from"../@kangc/@kangc.b905bff9.js";var h={exports:{}};/*
 * @version    1.4.0
 * @date       2015-10-26
 * @stability  3 - Stable
 * @author     Lauri Rooden (https://github.com/litejs/natural-compare-lite)
 * @license    MIT License
 */var g=function(p,m){var a,n,t=1,f=0,x=0,C=String.alphabet;function i(u,l,r){if(r){for(a=l;r=i(u,a),r<76&&r>65;)++a;return+u.slice(l-1,a)}return r=C&&C.indexOf(u.charAt(l)),r>-1?r+76:(r=u.charCodeAt(l)||0,r<45||r>127?r:r<46?65:r<48?r-1:r<58?r+18:r<65?r-11:r<91?r+11:r<97?r-37:r<123?r+5:r-63)}if((p+="")!=(m+="")){for(;t;)if(n=i(p,f++),t=i(m,x++),n<76&&t<76&&n>66&&t>66&&(n=i(p,f,f),t=i(m,x,f=a),x=a),n!=t)return n<t?-1:1}return 0};try{h.exports=g}catch{String.naturalCompare=g}var e=h.exports;const A=s(e);export{A as e};
