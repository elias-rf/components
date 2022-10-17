export const estoqueQuery: {
  method: string[];
  bindings?: any[];
  sql: string;
  response: any;
}[] = [
  // estoque | Estoque
  {
    method: ["select", "insert"],
    sql: 'from "Estoque"',
    response: [{ id: "A" }],
  },
  {
    method: ["delete"],
    sql: "Estoque",
    response: 1,
  },
  {
    method: ["update"],
    sql: "Estoque",
    response: [{ id: "B" }],
  },
];
