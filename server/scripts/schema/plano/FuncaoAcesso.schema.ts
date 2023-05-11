import { TTableDef } from "@/types/model";

export const FuncaoAcesso: TTableDef = {
  database: "plano",
  table: "FuncaoAcesso",
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
      field: "NmFuncao",
      label: "NmFuncao",
      name: "NmFuncao",
      typeField: "string",

      allowNull: false,
    },
  ],
};
