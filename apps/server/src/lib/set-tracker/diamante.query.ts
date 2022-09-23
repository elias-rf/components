export const diamanteQuery: {
  method: string[];
  bindings?: any[];
  sql: string;
  response: any;
}[] = [
  // diamante | diamante
  {
    method: ["select", "insert"],
    sql: "diamante",
    response: [{ id: "A" }],
  },
  {
    method: ["delete"],
    sql: "diamante",
    response: 1,
  },
  {
    method: ["update"],
    sql: "diamante",
    response: [{ id: "B" }],
  },
];
