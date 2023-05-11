import { TTableDef } from "@/types/model";

export const MestreNotaServicoSubstituido: TTableDef = {
  database: "plano",
  table: "MestreNotaServicoSubstituido",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",

      scale: 4,
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
      field: "NumeroSubstituido",
      label: "NumeroSubstituido",
      name: "NumeroSubstituido",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "SerieSubstituido",
      label: "SerieSubstituido",
      name: "SerieSubstituido",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "TipoSubstituido",
      label: "TipoSubstituido",
      name: "TipoSubstituido",
      typeField: "int",

      allowNull: false,
    },
  ],
};
