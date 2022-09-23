export const nfEntradaQuery: {
  method: string[];
  bindings?: any[];
  sql: string;
  response: any;
}[] = [
  // nf-entrada | NfMestre
  {
    method: ["select"],
    sql: "NfMestre",
    bindings: ["18007600"],
    response: [],
  },
  {
    method: ["select"],
    sql: "NfMestre",
    bindings: ["-100"],
    response: [{ CdEmpresa: 1, NroNf: "-100", Serie: "X", Modelo: 1 }],
  },
  {
    method: ["insert"],
    sql: "NfMestre",
    response: [{ CdEmpresa: 1, NroNf: "-100", Serie: "X", Modelo: 1 }],
  },
  {
    method: ["insert"],
    sql: "NfMestre",
    bindings: ["-100"],
    response: [{ CdEmpresa: 1, NroNf: "-100", Serie: "X", Modelo: 1 }],
  },
  {
    method: ["delete"],
    sql: "NfMestre",
    bindings: ["-100"],
    response: 1,
  },
  {
    method: ["update"],
    sql: "NfMestre",
    bindings: ["-100"],
    response: [{ CdEmpresa: 1, NroNf: "-100", Serie: "X", Modelo: 1 }],
  },
];
