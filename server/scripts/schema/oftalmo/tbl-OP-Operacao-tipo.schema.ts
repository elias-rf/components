import { TTableDef } from "@/types/model";

export const tbl_OP_Operacao_tipo: TTableDef = {
  database: "oftalmo",
  table: "tbl_OP_Operacao_tipo",
  fields: [
    {
      field: "kOperacao",
      label: "kOperacao",
      name: "tbl_OP_Operacao_tipo_id",
      typeField: "int",

      primaryKey: true,
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
      defaultValue: "0",
    },
    {
      field: "Ordem",
      label: "Ordem",
      name: "Ordem",
      typeField: "int",

      allowNull: false,
      defaultValue: "0",
    },
    {
      field: "ProxOP",
      label: "ProxOP",
      name: "ProxOP",
      typeField: "int",
    },
    {
      field: "ProxOPPU",
      label: "ProxOPPU",
      name: "ProxOPPU",
      typeField: "int",
    },
    {
      field: "ProxOPRet",
      label: "ProxOPRet",
      name: "ProxOPRet",
      typeField: "int",
    },
    {
      field: "ehRetrabalho",
      label: "ehRetrabalho",
      name: "ehRetrabalho",
      typeField: "int",

      allowNull: false,
      defaultValue: "0",
    },
  ],
};
