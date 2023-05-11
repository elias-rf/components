import { TTableDef } from "@/types/model";

export const Autorizacao: TTableDef = {
  database: "plano",
  table: "Autorizacao",
  fields: [
    {
      field: "CdSistema",
      label: "CdSistema",
      name: "CdSistema",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdFuncao",
      label: "CdFuncao",
      name: "CdFuncao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "SgUsuario",
      label: "SgUsuario",
      name: "SgUsuario",
      typeField: "string",

      allowNull: false,
    },
  ],
};
