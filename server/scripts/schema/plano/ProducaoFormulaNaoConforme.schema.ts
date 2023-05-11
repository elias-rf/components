import { TTableDef } from "@/types/model";

export const ProducaoFormulaNaoConforme: TTableDef = {
  database: "plano",
  table: "ProducaoFormulaNaoConforme",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumFormula",
      label: "NumFormula",
      name: "NumFormula",
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
      field: "QuantidadeNaoConforme",
      label: "QuantidadeNaoConforme",
      name: "QuantidadeNaoConforme",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdNaoConformidade",
      label: "CdNaoConformidade",
      name: "CdNaoConformidade",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdCorrecao",
      label: "CdCorrecao",
      name: "CdCorrecao",
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
  ],
};
