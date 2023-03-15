import { TTable } from "../../../../types/model";

export const VersaoLiberada: TTable = {
  database: "plano",
  table: "VersaoLiberada",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "Versao",
      label: "Versao",
      name: "Versao",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "Release",
      label: "Release",
      name: "Release",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
  ],
};
