import { TTableDef } from "@/types/model";

export const tbl_OP_Operacao: TTableDef = {
  database: "oftalmo",
  table: "tbl_OP_Operacao",
  fields: [
    {
      field: "kOperacao",
      label: "kOperacao",
      name: "kOperacao",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Grupo",
      label: "Grupo",
      name: "Grupo",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Ordem",
      label: "Ordem",
      name: "Ordem",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "ehRetrabalho",
      label: "ehRetrabalho",
      name: "ehRetrabalho",
      typeField: "int",

      allowNull: false,
    },
  ],
};
