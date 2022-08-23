import { TEntity } from "@er/types/*";

export const ConfiguracaoImpPreco: TEntity =
  {
  "database": "plano",
  "table": "ConfiguracaoImpPreco",
  "fields": [
    {
      "field": "IdModeloArquivo",
      "label": "IdModeloArquivo",
      "name": "ConfiguracaoImpPreco_id",
      "type": "string",
      "size": 20,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "PosicaoProduto",
      "label": "PosicaoProduto",
      "name": "PosicaoProduto",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "TamanhoProduto",
      "label": "TamanhoProduto",
      "name": "TamanhoProduto",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "PosicaoTabela",
      "label": "PosicaoTabela",
      "name": "PosicaoTabela",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "TamanhoTabela",
      "label": "TamanhoTabela",
      "name": "TamanhoTabela",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "DecimaisTabela",
      "label": "DecimaisTabela",
      "name": "DecimaisTabela",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "PosicaoVenda",
      "label": "PosicaoVenda",
      "name": "PosicaoVenda",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "TamanhoVenda",
      "label": "TamanhoVenda",
      "name": "TamanhoVenda",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "DecimaisVenda",
      "label": "DecimaisVenda",
      "name": "DecimaisVenda",
      "type": "int",
      "size": 2,
      "allowNull": false
    }
  ]
}
