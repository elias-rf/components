import { TEntity } from "@er/types/*";

export const ItemFormula: TEntity =
  {
  "database": "plano",
  "table": "ItemFormula",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "NumFormula",
      "label": "NumFormula",
      "name": "NumFormula",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "CdProduto",
      "type": "string",
      "size": 15,
      "allowNull": false
    },
    {
      "field": "Sequencia",
      "label": "Sequencia",
      "name": "Sequencia",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "Quantidade",
      "label": "Quantidade",
      "name": "Quantidade",
      "type": "float",
      "size": 8,
      "allowNull": false
    },
    {
      "field": "TipoQuantidade",
      "label": "TipoQuantidade",
      "name": "TipoQuantidade",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "QuantidadeEfetiva",
      "label": "QuantidadeEfetiva",
      "name": "QuantidadeEfetiva",
      "type": "float",
      "size": 8,
      "allowNull": false
    },
    {
      "field": "VlVenda",
      "label": "VlVenda",
      "name": "VlVenda",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "Equivalencia",
      "label": "Equivalencia",
      "name": "Equivalencia",
      "type": "float",
      "size": 8,
      "allowNull": false
    },
    {
      "field": "FormulaConversao",
      "label": "FormulaConversao",
      "name": "FormulaConversao",
      "type": "string",
      "size": 20,
      "allowNull": false
    },
    {
      "field": "Correcao",
      "label": "Correcao",
      "name": "Correcao",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "FgEmbalagem",
      "label": "FgEmbalagem",
      "name": "FgEmbalagem",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgQsp",
      "label": "FgQsp",
      "name": "FgQsp",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "Diluicao",
      "label": "Diluicao",
      "name": "Diluicao",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CdLote",
      "label": "CdLote",
      "name": "CdLote",
      "type": "string",
      "size": 32
    },
    {
      "field": "FgCapsula",
      "label": "FgCapsula",
      "name": "FgCapsula",
      "type": "string",
      "size": 1
    },
    {
      "field": "CdFornecedor",
      "label": "CdFornecedor",
      "name": "CdFornecedor",
      "type": "float",
      "size": 8,
      "scale": 4
    }
  ]
}
