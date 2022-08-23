function c(t,r=2,o=3,u=".",m=","){let n=parseFloat(t.toString());if(Number.isNaN(n))return"";let p=`\\d(?=(\\d{${o}})+${r>0?"\\D":"$"})`,e=n.toFixed(r).replace(".",m);return e=e.replace(new RegExp(p,"g"),`$&${u}`),e}export{c as a};
//# sourceMappingURL=chunk-MT4R4RAE.js.map
