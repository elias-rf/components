export const cidadeQuery: {
  method: string[];
  bindings?: any[];
  sql: string;
  response: any;
}[] = [
  // cidade | cidadesERF
  {
    method: ["select", "insert"],
    sql: "cidadesERF",
    response: [{ ufOld: "ES" }],
  },
  {
    method: ["delete"],
    sql: "cidadesERF",
    response: 1,
  },
  {
    method: ["update"],
    sql: "cidadesERF",
    response: [{ ufOld: "MG" }],
  },
];
