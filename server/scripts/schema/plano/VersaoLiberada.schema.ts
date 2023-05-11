import { TTableDef } from "@/types/model";

export const VersaoLiberada: TTableDef = {
  database: "plano",
  table: "VersaoLiberada",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Versao",
      label: "Versao",
      name: "Versao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Release",
      label: "Release",
      name: "Release",
      typeField: "string",

      allowNull: false,
    },
  ],
};
