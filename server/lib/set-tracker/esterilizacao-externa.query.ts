export const esterilizacaoExternaQuery: {
  method: string[];
  bindings?: any[];
  sql: string;
  response: any;
}[] = [
  // esterilizacao-externa | tEsterilizacaoexterna
  {
    method: ["select"],
    sql: "tEsterilizacaoexterna",
    bindings: ["2020-01-01"],
    response: [{ quantidade: 1 }],
  },
  {
    method: ["select"],
    sql: "tEsterilizacaoexterna",
    bindings: ["2020-01"],
    response: [{ quantidade: 1 }],
  },
];
