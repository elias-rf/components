import { TEntity } from "../types";

export const nf_cfop: TEntity = {
  database: "plano",
  table: "NatOpe",
  schema: [
    {
      field: "Nop",
      label: "CFOP",
      name: "cfop",
      primaryKey: true,
      type: "int",
      size: 4,
      allowNull: false,
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
      size: 1,
    },
    {
      field: "Estoque",
      label: "Estoque",
      name: "estoque",
      type: "string",
      size: 1,
    },
  ],
};
