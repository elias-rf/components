function n(e){return Object.prototype.toString.call(e)==="[object Object]"}function i(e){var r,t;return n(e)===!1?!1:(r=e.constructor,r===void 0?!0:(t=r.prototype,!(n(t)===!1||t.hasOwnProperty("isPrototypeOf")===!1)))}function s(e){return JSON.stringify(e,(r,t)=>n(t)?Object.keys(t).sort().reduce((o,f)=>(o[f]=t[f],o),{}):t)}export{i as a,s as b};
//# sourceMappingURL=chunk-OEAMZCPD.js.map
