import { TEntity } from "../../../../types";

export const PlanoContas: TEntity = {
  database: "plano",
  table: "PlanoContas",
  schema: [
    {
      field: "NumConta",
      label: "NumConta",
      name: "PlanoContas_id",
      type: "int",
      size: 9,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      type: "string",
      size: 128,
      allowNull: false,
    },
    {
      field: "CdReduzido",
      label: "CdReduzido",
      name: "CdReduzido",
      type: "int",
      size: 4,
    },
    {
      field: "TipoConta",
      label: "TipoConta",
      name: "TipoConta",
      type: "string",
      size: 1,
    },
    {
      field: "CdCorrelacionado",
      label: "CdCorrelacionado",
      name: "CdCorrelacionado",
      type: "int",
      size: 9,
    },
    {
      field: "CdNatureza",
      label: "CdNatureza",
      name: "CdNatureza",
      type: "int",
      size: 4,
    },
  ],
};
