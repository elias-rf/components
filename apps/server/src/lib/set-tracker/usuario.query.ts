export const usuarioQuery: {
  method: string[];
  bindings?: any[];
  sql: string;
  response: any;
}[] = [
  // group-subject | tbl_Seguranca_Usuario
  {
    method: ["select", "insert"],
    sql: "tbl_Seguranca_Usuario",
    response: [{ kUsuario: 1, idGroup: "dev" }],
  },
  {
    method: ["delete"],
    sql: "tbl_Seguranca_Usuario",
    response: 1,
  },
  {
    method: ["update"],
    sql: "tbl_Seguranca_Usuario",
    response: [{ kUsuario: 2 }],
  },
];
