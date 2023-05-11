import { TTableDef } from "@/types/model";

export const ItemFormula: TTableDef = {
  database: "plano",
  table: "ItemFormula",
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
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",

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
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "float",

      allowNull: false,
    },
    {
      field: "TipoQuantidade",
      label: "TipoQuantidade",
      name: "TipoQuantidade",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "QuantidadeEfetiva",
      label: "QuantidadeEfetiva",
      name: "QuantidadeEfetiva",
      typeField: "float",

      allowNull: false,
    },
    {
      field: "VlVenda",
      label: "VlVenda",
      name: "VlVenda",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Equivalencia",
      label: "Equivalencia",
      name: "Equivalencia",
      typeField: "float",

      allowNull: false,
    },
    {
      field: "FormulaConversao",
      label: "FormulaConversao",
      name: "FormulaConversao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Correcao",
      label: "Correcao",
      name: "Correcao",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "FgEmbalagem",
      label: "FgEmbalagem",
      name: "FgEmbalagem",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgQsp",
      label: "FgQsp",
      name: "FgQsp",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Diluicao",
      label: "Diluicao",
      name: "Diluicao",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdLote",
      label: "CdLote",
      name: "CdLote",
      typeField: "string",
    },
    {
      field: "FgCapsula",
      label: "FgCapsula",
      name: "FgCapsula",
      typeField: "string",
    },
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "CdFornecedor",
      typeField: "float",

      scale: 4,
    },
  ],
};
