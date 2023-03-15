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
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descrição",
      name: "descricao",
      typeField: "string",
    },
    {
      field: "Estatistica",
      label: "Estatística",
      name: "estatistica",
      typeField: "string",
      size: 1,
    },
    {
      field: "Estoque",
      label: "Estoque",
      name: "estoque",
      typeField: "string",
      size: 1,
    },
  ],
};
