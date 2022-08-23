import { TEntity } from "@er/types/*";

export const agenda_telefone: TEntity = {
  database: "oftalmo",
  table: "phonebook",
  fields: [
    {
      field: "Nop",
      label: "CFOP",
      name: "cfop",
      primaryKey: true,
      type: "string",
    },
    {
      field: "Descricao",
      label: "Descrição",
      name: "descricao",
      type: "string",
    },
    {
      field: "Estatistica",
      label: "Estatística",
      name: "estatistica",
      type: "string",
    },
    {
      field: "Estoque",
      label: "Estoque",
      name: "estoque",
      type: "string",
    },
  ],
};
