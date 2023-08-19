import { TTableDef } from "@/types";

export const nf_cfop: TTableDef = {
  database: "plano",
  table: "NatOpe",
  fields: [
    {
      field: "Nop",
      label: "CFOP",
      name: "cfop",
      primaryKey: true,
      typeField: "int",

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
    },
    {
      field: "Estoque",
      label: "Estoque",
      name: "estoque",
      typeField: "string",
    },
  ],
};
