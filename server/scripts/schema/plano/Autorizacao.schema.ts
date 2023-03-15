import { TTable } from "../../../../types/model";

export const Autorizacao: TTable = {
  database: "plano",
  table: "Autorizacao",
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
      field: "SgUsuario",
      label: "SgUsuario",
      name: "SgUsuario",
      typeField: "string",
      size: 64,
      allowNull: false,
    },
  ],
};
