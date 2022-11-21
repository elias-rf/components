export const produtoPlanoQuery: {
  method: string[];
  bindings?: any[];
  sql: string;
  response: any;
}[] = [
  // produto | CadPro
  {
    method: ["select", "insert"],
    sql: `from "CadPro"`,
    response: [{ CdProduto: 1 }],
  },
  {
    method: ["delete"],
    sql: "CadPro",
    response: 1,
  },
  {
    method: ["update"],
    sql: "CadPro",
    response: [{ CdProduto: 2 }],
  },
];
