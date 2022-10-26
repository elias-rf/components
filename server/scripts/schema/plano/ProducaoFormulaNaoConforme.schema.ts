import { TEntity } from "../../../../types";

export const ProducaoFormulaNaoConforme: TEntity = {
  database: "plano",
  table: "ProducaoFormulaNaoConforme",
  schema: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "NumFormula",
      label: "NumFormula",
      name: "NumFormula",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "CdOperacao",
      label: "CdOperacao",
      name: "CdOperacao",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "QuantidadeNaoConforme",
      label: "QuantidadeNaoConforme",
      name: "QuantidadeNaoConforme",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "CdNaoConformidade",
      label: "CdNaoConformidade",
      name: "CdNaoConformidade",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "CdCorrecao",
      label: "CdCorrecao",
      name: "CdCorrecao",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      type: "int",
      size: 5,
      allowNull: false,
    },
  ],
};
