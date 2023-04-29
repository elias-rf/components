import { TTableDef } from "@mono/types/model";

export const RegAcessos: TTableDef = {
  database: "plano",
  table: "RegAcessos",
  fields: [
    {
      field: "Estacao",
      label: "Estacao",
      name: "Estacao",
      typeField: "string",
      size: 60,
      allowNull: false,
    },
    {
      field: "Modulo",
      label: "Modulo",
      name: "Modulo",
      typeField: "string",
      size: 60,
      allowNull: false,
    },
    {
      field: "DataAcesso",
      label: "DataAcesso",
      name: "DataAcesso",
      typeField: "string",
      size: 60,
      allowNull: false,
    },
    {
      field: "QtdeAcessos",
      label: "QtdeAcessos",
      name: "QtdeAcessos",
      typeField: "string",
      size: 60,
      allowNull: false,
    },
  ],
};
