import { TTableDef } from "@/types/model";

export const MestreNotaImpostoRetido: TTableDef = {
  database: "plano",
  table: "MestreNotaImpostoRetido",
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
      field: "VlPISRetido",
      label: "VlPISRetido",
      name: "VlPISRetido",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlCOFINSRetido",
      label: "VlCOFINSRetido",
      name: "VlCOFINSRetido",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlCSLLRetido",
      label: "VlCSLLRetido",
      name: "VlCSLLRetido",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlBaseCalculoIRRF",
      label: "VlBaseCalculoIRRF",
      name: "VlBaseCalculoIRRF",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlIRRFRetido",
      label: "VlIRRFRetido",
      name: "VlIRRFRetido",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlBaseCalculoPrevidencia",
      label: "VlBaseCalculoPrevidencia",
      name: "VlBaseCalculoPrevidencia",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlPrevidenciaRetido",
      label: "VlPrevidenciaRetido",
      name: "VlPrevidenciaRetido",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
  ],
};
