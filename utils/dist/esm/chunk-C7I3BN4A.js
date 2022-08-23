function p(t,e=2,h=",",b="."){try{e=Math.abs(e),e=isNaN(e)?2:e;let s=t<0?"-":"",r=parseInt(t=Math.abs(Number(t)||0).toFixed(e)).toString(),g=r.length>3?r.length%3:0;return s+(g?r.substr(0,g)+b:"")+r.substr(g).replace(/(\d{3})(?=\d)/g,"$1"+b)+(e?h+Math.abs(t-parseInt(r)).toFixed(e).slice(2):"")}catch(s){console.log(s)}}export{p as a};
//# sourceMappingURL=chunk-C7I3BN4A.js.map
