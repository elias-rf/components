function s(t,n){return t.length===0?n:n.find(r=>r.key===t)}function a(t,n){let r=n.split("/");return r[0]===""&&r.shift(),r.length===0&&r.push(""),r.reduce((e,i)=>i===""?e:s(i,e).child,t)||[]}export{a};
//# sourceMappingURL=chunk-CV4RZ5FW.js.map
