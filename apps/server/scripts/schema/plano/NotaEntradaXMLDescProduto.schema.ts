import { TEntity } from "@er/types/*";

export const NotaEntradaXMLDescProduto: TEntity =
  {
  "database": "plano",
  "table": "NotaEntradaXMLDescProduto",
  "fields": [
    {
      "field": "CdEmpresa",
      "label": "CdEmpresa",
      "name": "CdEmpresa",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "NumeroNota",
      "label": "NumeroNota",
      "name": "NumeroNota",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "SerieNota",
      "label": "SerieNota",
      "name": "SerieNota",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "ModeloNota",
      "label": "ModeloNota",
      "name": "ModeloNota",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "CdFornecedor",
      "label": "CdFornecedor",
      "name": "CdFornecedor",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "Sequencia",
      "label": "Sequencia",
      "name": "Sequencia",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "DescricaoProdutoXML",
      "label": "DescricaoProdutoXML",
      "name": "DescricaoProdutoXML",
      "type": "string",
      "size": 120,
      "allowNull": false
    }
  ]
}