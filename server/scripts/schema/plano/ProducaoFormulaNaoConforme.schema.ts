import { TTableDef } from "../../../../types/model";

export const ProducaoFormulaNaoConforme: TTableDef = {
  database: "plano",
  table: "ProducaoFormulaNaoConforme",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "NumFormula",
      label: "NumFormula",
      name: "NumFormula",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "CdOperacao",
      label: "CdOperacao",
      name: "CdOperacao",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "QuantidadeNaoConforme",
      label: "QuantidadeNaoConforme",
      name: "QuantidadeNaoConforme",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "CdNaoConformidade",
      label: "CdNaoConformidade",
      name: "CdNaoConformidade",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "CdCorrecao",
      label: "CdCorrecao",
      name: "CdCorrecao",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
  ],
};
