import { TTable } from "../../../../types";

export const VersaoLiberada: TTable = {
  database: "plano",
  table: "VersaoLiberada",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      type: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "Versao",
      label: "Versao",
      name: "Versao",
      type: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "Release",
      label: "Release",
      name: "Release",
      type: "string",
      size: 16,
      allowNull: false,
    },
  ],
};
