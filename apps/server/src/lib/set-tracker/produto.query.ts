export const produtoQuery: {
  method: string[];
  bindings?: any[];
  sql: string;
  response: any;
}[] = [
  // produto | tbl_Produto
  {
    method: ["select", "insert"],
    sql: "tbl_Produto",
    response: [{ kProduto: 1 }],
  },
  {
    method: ["delete"],
    sql: "tbl_Produto",
    response: 1,
  },
  {
    method: ["update"],
    sql: "tbl_Produto",
    response: [{ kProduto: 2 }],
  },
];
