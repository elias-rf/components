export const phonebookQuery: {
  method: string[];
  bindings?: any[];
  sql: string;
  response: any;
}[] = [
  // phonebook | phonebook
  {
    method: ["select", "insert"],
    sql: "phonebook",
    response: [{ id: 171 }],
  },
  {
    method: ["delete"],
    sql: "phonebook",
    response: 1,
  },
  {
    method: ["update"],
    sql: "phonebook",
    response: [{ id: 172 }],
  },
];
