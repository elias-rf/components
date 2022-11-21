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
    response: [
      {
        kUsuario: 1,
        idGroup: "dev",
        nome: "Fulano",
        NomeUsuario: "fulano",
        hash: "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3",
      },
    ],
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
