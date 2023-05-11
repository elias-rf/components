import { TTableDef } from "@/types/model";

export const MestreNotaImportacao: TTableDef = {
  database: "plano",
  table: "MestreNotaImportacao",
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
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
      typeField: "int",

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
      field: "VlCustosDiversos",
      label: "VlCustosDiversos",
      name: "VlCustosDiversos",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
  ],
};
