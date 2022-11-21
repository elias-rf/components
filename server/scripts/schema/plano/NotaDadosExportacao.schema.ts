import { TTable } from "../../../../types";

export const NotaDadosExportacao: TTable = {
  database: "plano",
  table: "NotaDadosExportacao",
  fields: [
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
      type: "float",
      size: 8,
      scale: 4,
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
      field: "UfEmbarque",
      label: "UfEmbarque",
      name: "UfEmbarque",
      type: "string",
      size: 2,
      allowNull: false,
    },
    {
      field: "LocalEmbarque",
      label: "LocalEmbarque",
      name: "LocalEmbarque",
      type: "string",
      size: 64,
      allowNull: false,
    },
  ],
};
