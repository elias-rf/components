import { TTable } from "../../../../types/model";

export const NotaDadosExportacao: TTable = {
  database: "plano",
  table: "NotaDadosExportacao",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "UfEmbarque",
      label: "UfEmbarque",
      name: "UfEmbarque",
      typeField: "string",
      size: 2,
      allowNull: false,
    },
    {
      field: "LocalEmbarque",
      label: "LocalEmbarque",
      name: "LocalEmbarque",
      typeField: "string",
      size: 64,
      allowNull: false,
    },
  ],
};
