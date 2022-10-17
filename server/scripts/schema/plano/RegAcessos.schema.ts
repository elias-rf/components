import { TEntity } from "../../../../types";

export const RegAcessos: TEntity = {
  database: "plano",
  table: "RegAcessos",
  fields: [
    {
      field: "Estacao",
      label: "Estacao",
      name: "Estacao",
      type: "string",
      size: 60,
      allowNull: false,
    },
    {
      field: "Modulo",
      label: "Modulo",
      name: "Modulo",
      type: "string",
      size: 60,
      allowNull: false,
    },
    {
      field: "DataAcesso",
      label: "DataAcesso",
      name: "DataAcesso",
      type: "string",
      size: 60,
      allowNull: false,
    },
    {
      field: "QtdeAcessos",
      label: "QtdeAcessos",
      name: "QtdeAcessos",
      type: "string",
      size: 60,
      allowNull: false,
    },
  ],
};
