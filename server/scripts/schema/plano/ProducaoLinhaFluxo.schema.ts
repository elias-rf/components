import { TTableDef } from "@/types/model";

export const ProducaoLinhaFluxo: TTableDef = {
  database: "plano",
  table: "ProducaoLinhaFluxo",
  fields: [
    {
      field: "CdLinhaProducao",
      label: "CdLinhaProducao",
      name: "CdLinhaProducao",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdOperacao",
      label: "CdOperacao",
      name: "CdOperacao",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "FgCondicional",
      label: "FgCondicional",
      name: "FgCondicional",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgAmostragem",
      label: "FgAmostragem",
      name: "FgAmostragem",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgRetrabalho",
      label: "FgRetrabalho",
      name: "FgRetrabalho",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgEtiquetaInterna",
      label: "FgEtiquetaInterna",
      name: "FgEtiquetaInterna",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgEsterilizacaoInterna",
      label: "FgEsterilizacaoInterna",
      name: "FgEsterilizacaoInterna",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgEsterilizacaoExterna",
      label: "FgEsterilizacaoExterna",
      name: "FgEsterilizacaoExterna",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgContinuidade",
      label: "FgContinuidade",
      name: "FgContinuidade",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgEtiquetaExterna",
      label: "FgEtiquetaExterna",
      name: "FgEtiquetaExterna",
      typeField: "string",

      allowNull: false,
    },
  ],
};
