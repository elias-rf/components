import { TTableDef } from "@/types/model";

export const PlanoContas: TTableDef = {
  database: "plano",
  table: "PlanoContas",
  fields: [
    {
      field: "NumConta",
      label: "NumConta",
      name: "PlanoContas_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdReduzido",
      label: "CdReduzido",
      name: "CdReduzido",
      typeField: "int",
    },
    {
      field: "TipoConta",
      label: "TipoConta",
      name: "TipoConta",
      typeField: "string",
    },
    {
      field: "CdCorrelacionado",
      label: "CdCorrelacionado",
      name: "CdCorrelacionado",
      typeField: "int",
    },
    {
      field: "CdNatureza",
      label: "CdNatureza",
      name: "CdNatureza",
      typeField: "int",
    },
  ],
};
