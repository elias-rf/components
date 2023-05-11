import { TTableDef } from "@/types/model";

export const NotaDadosExportacao: TTableDef = {
  database: "plano",
  table: "NotaDadosExportacao",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "UfEmbarque",
      label: "UfEmbarque",
      name: "UfEmbarque",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "LocalEmbarque",
      label: "LocalEmbarque",
      name: "LocalEmbarque",
      typeField: "string",

      allowNull: false,
    },
  ],
};
