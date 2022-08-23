import { TEntity } from "@er/types/*";

export const ParametrosFiscais: TEntity =
  {
  "database": "plano",
  "table": "ParametrosFiscais",
  "fields": [
    {
      "field": "IdParametro",
      "label": "IdParametro",
      "name": "ParametrosFiscais_id",
      "type": "int",
      "size": 2,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "Descricao",
      "label": "Descricao",
      "name": "Descricao",
      "type": "string",
      "size": 50,
      "allowNull": false
    },
    {
      "field": "TipoMovimentacao",
      "label": "TipoMovimentacao",
      "name": "TipoMovimentacao",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "CriterioSubstituicao",
      "label": "CriterioSubstituicao",
      "name": "CriterioSubstituicao",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgDetalhaItem",
      "label": "FgDetalhaItem",
      "name": "FgDetalhaItem",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgAtualizaTabela",
      "label": "FgAtualizaTabela",
      "name": "FgAtualizaTabela",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgAtualizaAtacado",
      "label": "FgAtualizaAtacado",
      "name": "FgAtualizaAtacado",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgAtualizaCusto",
      "label": "FgAtualizaCusto",
      "name": "FgAtualizaCusto",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgAtualizaPreco",
      "label": "FgAtualizaPreco",
      "name": "FgAtualizaPreco",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgConferePreco",
      "label": "FgConferePreco",
      "name": "FgConferePreco",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgPedido",
      "label": "FgPedido",
      "name": "FgPedido",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgIntegraCP",
      "label": "FgIntegraCP",
      "name": "FgIntegraCP",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgIntegraCR",
      "label": "FgIntegraCR",
      "name": "FgIntegraCR",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "LimiteArredondamento",
      "label": "LimiteArredondamento",
      "name": "LimiteArredondamento",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    }
  ]
}
