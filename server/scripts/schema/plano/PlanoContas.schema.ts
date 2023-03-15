import { TTable } from "../../../../types/model";

export const PlanoContas: TTable = {
  database: "plano",
  table: "PlanoContas",
  fields: [
    {
      field: "NumConta",
      label: "NumConta",
      name: "PlanoContas_id",
      typeField: "int",
      size: 9,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 128,
      allowNull: false,
    },
    {
      field: "CdReduzido",
      label: "CdReduzido",
      name: "CdReduzido",
      typeField: "int",
      size: 4,
    },
    {
      field: "TipoConta",
      label: "TipoConta",
      name: "TipoConta",
      typeField: "string",
      size: 1,
    },
    {
      field: "CdCorrelacionado",
      label: "CdCorrelacionado",
      name: "CdCorrelacionado",
      typeField: "int",
      size: 9,
    },
    {
      field: "CdNatureza",
      label: "CdNatureza",
      name: "CdNatureza",
      typeField: "int",
      size: 4,
    },
  ],
};
