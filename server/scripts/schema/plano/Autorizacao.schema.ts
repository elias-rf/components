import { TEntity } from "../../../../types";

export const Autorizacao: TEntity = {
  database: "plano",
  table: "Autorizacao",
  fields: [
    {
      field: "CdSistema",
      label: "CdSistema",
      name: "CdSistema",
      type: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "CdFuncao",
      label: "CdFuncao",
      name: "CdFuncao",
      type: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "SgUsuario",
      label: "SgUsuario",
      name: "SgUsuario",
      type: "string",
      size: 64,
      allowNull: false,
    },
  ],
};
