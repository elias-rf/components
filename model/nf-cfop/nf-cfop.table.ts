import { TTable } from "../../types";

export const nf_cfop: TTable = {
  database: "plano",
  table: "NatOpe",
  fields: [
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
