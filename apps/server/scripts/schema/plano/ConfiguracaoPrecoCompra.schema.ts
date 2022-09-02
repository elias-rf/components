import { TEntity } from "@er/types/*";

export const ConfiguracaoPrecoCompra: TEntity =
  {
  "database": "plano",
  "table": "ConfiguracaoPrecoCompra",
  "fields": [
    {
      "field": "CdEmpresa",
      "label": "CdEmpresa",
      "name": "ConfiguracaoPrecoCompra_id",
      "type": "int",
      "size": 9,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "FgVlTabela",
      "label": "FgVlTabela",
      "name": "FgVlTabela",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgVlCusto",
      "label": "FgVlCusto",
      "name": "FgVlCusto",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgVlAtacado",
      "label": "FgVlAtacado",
      "name": "FgVlAtacado",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgVlVarejo",
      "label": "FgVlVarejo",
      "name": "FgVlVarejo",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgCalculoVlCusto",
      "label": "FgCalculoVlCusto",
      "name": "FgCalculoVlCusto",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgLogPreco",
      "label": "FgLogPreco",
      "name": "FgLogPreco",
      "type": "string",
      "size": 1,
      "allowNull": false
    }
  ]
}
