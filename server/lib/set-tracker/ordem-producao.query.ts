export const ordemProducaoQuery: {
  method: string[];
  bindings?: any[];
  sql: string;
  response: any;
}[] = [
  // ordem-producao | tOrdemProducao
  {
    method: ["select"],
    sql: "tOrdemProducao",
    response: [{ kOp: 100, fkProdutoItem: 1, versao: 1 }],
  },
  {
    method: ["insert"],
    sql: "tOrdemProducao",
    response: [{ kOp: 100 }],
  },
  {
    method: ["delete"],
    sql: "tOrdemProducao",
    response: 1,
  },
  {
    method: ["update"],
    sql: "tOrdemProducao",
    response: [{ kOp: 200 }],
  },
];
