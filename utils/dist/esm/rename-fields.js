import{r as f,s as u}from"./chunk-L4TNZVRN.js";import{a as c}from"./chunk-SNM2DAHE.js";import"./chunk-ON5OQYWL.js";function s(e="",r,t){let n=r.indexOf(e);return n>=0?t[n]:e}function R(e,r,t){return c(e)?e:e.map(n=>(n[0]=s(n[0],r,t),n))}function p(e,r,t){return c(e)?e:e.map(n=>(n[0]=s(n[0],r,t),n))}function O(e,r,t){return c(e)?e:e.map(n=>{let i=r.indexOf(n);return i>-1&&(n=t[i]),n})}function m(e,r,t){if(!f(e))return e;let n={};return Object.keys(e).map(i=>{let o=s(i,r,t);n[o]=e[i]}),n}function b(e,r,t){if(!f(e))return e;let n={};return Object.keys(e).map(i=>{let o=s(i,r,t);n[o]=e[i]}),n}function j(e,r,t){return u(e)?e.map(n=>m(n,r,t)):e}export{b as renameData,j as renameDataArray,p as renameOrder,m as renamePk,O as renameSelect,s as renameString,R as renameWhere};
//# sourceMappingURL=rename-fields.js.map
