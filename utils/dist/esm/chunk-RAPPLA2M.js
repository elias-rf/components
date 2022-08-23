function t(o,n){return n.filter(e=>Object.keys(e)[0]===o)}function c(o){return n=>{let e=o;t("knex",n).forEach(r=>{e=e.from(r.knex)}),t("where",n).forEach(r=>{r.where.forEach(a=>e=e.where(a))}),t("orderBy",n).forEach(r=>{r.orderBy.forEach(a=>e=e.order(a))}),t("select",n).forEach(r=>{e=e.select(r.select)});let y=e.get();return e.reset(),y}}export{c as a};
//# sourceMappingURL=chunk-RAPPLA2M.js.map
