export const groupSubjectQuery: {
  method: string[];
  bindings?: any[];
  sql: string;
  response: any;
}[] = [
  // group-subject | tbl_Seguranca_Usuario
  {
    method: ["select", "insert"],
    sql: "groupSubject",
    response: [{ idGroup: "dev", idSubject: "form" }],
  },
  {
    method: ["delete"],
    sql: "groupSubject",
    response: 1,
  },
  {
    method: ["update"],
    sql: "groupSubject",
    response: [{ idGroup: "adm" }],
  },
];
