var s=new Map,r=[],o={mock(t,e){e.status=e.status||200,s.set(t,e)},get(t,e){},post(t,e){},history(t){return t!==void 0?r[t]:r},reset(){s.clear(),r=[]},fetch(t,e){return r.push({url:t,options:e}),Promise.resolve({json:()=>{if(!s.has(t))return`${t} n\xE3o encontrado`;let n=s.get(t).body;if(e&&e.body){let a=JSON.parse(e.body);n.id=a.id||""}return Promise.resolve(n)},status:s.has(t)?s.get(t)?.status:404})}};export{o as a};
//# sourceMappingURL=chunk-PI4XH27P.js.map
