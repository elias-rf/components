import { TTableDef } from "@/types/model";

export const MestreNotaServicoIntermediario: TTableDef = {
  database: "plano",
  table: "MestreNotaServicoIntermediario",
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
      field: "RazaoSocialIntermediario",
      label: "RazaoSocialIntermediario",
      name: "RazaoSocialIntermediario",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CPFCNPJIntermediario",
      label: "CPFCNPJIntermediario",
      name: "CPFCNPJIntermediario",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "InscMunicipalIntermediario",
      label: "InscMunicipalIntermediario",
      name: "InscMunicipalIntermediario",
      typeField: "string",

      allowNull: false,
    },
  ],
};
