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
      size: 16,
      allowNull: false,
    },
    {
      field: "CdFuncao",
      label: "CdFuncao",
      name: "CdFuncao",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "NmFuncao",
      label: "NmFuncao",
      name: "NmFuncao",
      typeField: "string",
      size: 64,
      allowNull: false,
    },
  ],
};
