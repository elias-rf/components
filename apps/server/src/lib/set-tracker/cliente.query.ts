export const clienteQuery: {
  method: string[];
  bindings?: any[];
  sql: string;
  response: any;
}[] = [
  // cliente | CadCli
  {
    method: ["select", "insert"],
    sql: "CadCli",
    bindings: [-10],
    response: [{ CdCliente: 10 }],
  },
  {
    method: ["delete"],
    sql: "CadCli",
    response: 1,
  },
  {
    method: ["update"],
    sql: "CadCli",
    response: [{ CdCliente: 2 }],
  },
];
