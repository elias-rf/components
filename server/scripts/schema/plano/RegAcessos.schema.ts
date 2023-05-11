import { TTableDef } from "@/types/model";

export const RegAcessos: TTableDef = {
  database: "plano",
  table: "RegAcessos",
  fields: [
    {
      field: "Estacao",
      label: "Estacao",
      name: "Estacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Modulo",
      label: "Modulo",
      name: "Modulo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DataAcesso",
      label: "DataAcesso",
      name: "DataAcesso",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "QtdeAcessos",
      label: "QtdeAcessos",
      name: "QtdeAcessos",
      typeField: "string",

      allowNull: false,
    },
  ],
};
