import { TTable } from "../../../../types/model";

export const ItemFormula: TTable = {
  database: "plano",
  table: "ItemFormula",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NumFormula",
      label: "NumFormula",
      name: "NumFormula",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "float",
      size: 8,
      allowNull: false,
    },
    {
      field: "TipoQuantidade",
      label: "TipoQuantidade",
      name: "TipoQuantidade",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "QuantidadeEfetiva",
      label: "QuantidadeEfetiva",
      name: "QuantidadeEfetiva",
      typeField: "float",
      size: 8,
      allowNull: false,
    },
    {
      field: "VlVenda",
      label: "VlVenda",
      name: "VlVenda",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "Equivalencia",
      label: "Equivalencia",
      name: "Equivalencia",
      typeField: "float",
      size: 8,
      allowNull: false,
    },
    {
      field: "FormulaConversao",
      label: "FormulaConversao",
      name: "FormulaConversao",
      typeField: "string",
      size: 20,
      allowNull: false,
    },
    {
      field: "Correcao",
      label: "Correcao",
      name: "Correcao",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "FgEmbalagem",
      label: "FgEmbalagem",
      name: "FgEmbalagem",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "FgQsp",
      label: "FgQsp",
      name: "FgQsp",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "Diluicao",
      label: "Diluicao",
      name: "Diluicao",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "CdLote",
      label: "CdLote",
      name: "CdLote",
      typeField: "string",
      size: 32,
    },
    {
      field: "FgCapsula",
      label: "FgCapsula",
      name: "FgCapsula",
      typeField: "string",
      size: 1,
    },
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "CdFornecedor",
      typeField: "float",
      size: 8,
      scale: 4,
    },
  ],
};
