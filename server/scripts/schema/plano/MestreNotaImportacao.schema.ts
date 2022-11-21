import { TTable } from "../../../../types";

export const MestreNotaImportacao: TTable = {
  database: "plano",
  table: "MestreNotaImportacao",
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
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      type: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      type: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "VlCustosDiversos",
      label: "VlCustosDiversos",
      name: "VlCustosDiversos",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};
