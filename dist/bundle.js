!function(e){function n(n){for(var t,o,_=n[0],i=n[1],u=0,c=[];u<_.length;u++)o=_[u],r[o]&&c.push(r[o][0]),r[o]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);for(a&&a(n);c.length;)c.shift()()}var t={},r={0:0};var o={};var _={2:function(){return{"./rust_webpack":{__wbindgen_object_drop_ref:function(e){return t[1].exports.__wbindgen_object_drop_ref(e)},__wbg_alert_f072368adaecb8e8:function(e,n){return t[1].exports.__wbg_alert_f072368adaecb8e8(e,n)},__wbg_error_cc95a3d302735ca3:function(e,n){return t[1].exports.__wbg_error_cc95a3d302735ca3(e,n)},__widl_instanceof_Window:function(e){return t[1].exports.__widl_instanceof_Window(e)},__widl_f_create_element_Document:function(e,n,r,o){return t[1].exports.__widl_f_create_element_Document(e,n,r,o)},__widl_f_body_Document:function(e){return t[1].exports.__widl_f_body_Document(e)},__widl_f_append_child_Node:function(e,n,r){return t[1].exports.__widl_f_append_child_Node(e,n,r)},__widl_f_set_text_content_Node:function(e,n,r){return t[1].exports.__widl_f_set_text_content_Node(e,n,r)},__widl_f_document_Window:function(e){return t[1].exports.__widl_f_document_Window(e)},__wbg_call_1b57a5436caf5f18:function(e,n,r){return t[1].exports.__wbg_call_1b57a5436caf5f18(e,n,r)},__wbg_newnoargs_f8ea760b78e4efee:function(e,n){return t[1].exports.__wbg_newnoargs_f8ea760b78e4efee(e,n)},__wbindgen_object_clone_ref:function(e){return t[1].exports.__wbindgen_object_clone_ref(e)},__wbindgen_throw:function(e,n){return t[1].exports.__wbindgen_throw(e,n)},__wbindgen_rethrow:function(e){return t[1].exports.__wbindgen_rethrow(e)}}}}};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var u=new Promise(function(n,o){t=r[e]=[n,o]});n.push(t[2]=u);var c,f=document.getElementsByTagName("head")[0],a=document.createElement("script");a.charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.src=function(e){return i.p+""+e+".bundle.js"}(e),c=function(n){a.onerror=a.onload=null,clearTimeout(l);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),_=n&&n.target&&n.target.src,i=new Error("Loading chunk "+e+" failed.\n("+o+": "+_+")");i.type=o,i.request=_,t[1](i)}r[e]=void 0}};var l=setTimeout(function(){c({type:"timeout",target:a})},12e4);a.onerror=a.onload=c,f.appendChild(a)}return({1:[2]}[e]||[]).forEach(function(e){var t=o[e];if(t)n.push(t);else{var r,u=_[e](),c=fetch(i.p+""+{2:"f2c7c35560b0ae1c79c7"}[e]+".module.wasm");if(u instanceof Promise&&"function"==typeof WebAssembly.compileStreaming)r=Promise.all([WebAssembly.compileStreaming(c),u]).then(function(e){return WebAssembly.instantiate(e[0],e[1])});else if("function"==typeof WebAssembly.instantiateStreaming)r=WebAssembly.instantiateStreaming(c,u);else{r=c.then(function(e){return e.arrayBuffer()}).then(function(e){return WebAssembly.instantiate(e,u)})}n.push(o[e]=r.then(function(n){return i.w[e]=(n.instance||n).exports}))}}),Promise.all(n)},i.m=e,i.c=t,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e},i.w={};var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=n,u=u.slice();for(var f=0;f<u.length;f++)n(u[f]);var a=c;i(i.s=0)}([function(e,n,t){t.e(1).then(t.bind(null,1)).then(e=>{e.run(),e.greet("WebAssembly")})}]);