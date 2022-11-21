export const produtoItemQuery: {
  method: string[];
  bindings?: any[];
  sql: string;
  response: any;
}[] = [
  // produto-item | tbl_Produto_Item
  {
    method: ["select"],
    sql: "tbl_Produto_Item",
    response: [{ kProdutoItem: 1, IdVisiontech: " 1 ", fkProduto: 1 }],
  },
  {
    method: ["insert"],
    sql: "tbl_Produto_Item",
    response: [{ kProdutoItem: 1 }],
  },
  {
    method: ["delete"],
    sql: "tbl_Produto_Item",
    response: 1,
  },
  {
    method: ["update"],
    sql: "tbl_Produto_Item",
    response: [{ kProdutoItem: 2 }],
  },
];
