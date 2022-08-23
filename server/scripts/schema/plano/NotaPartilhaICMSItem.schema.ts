import { TEntity } from "@er/types/*";

export const NotaPartilhaICMSItem: TEntity =
  {
  "database": "plano",
  "table": "NotaPartilhaICMSItem",
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
      "field": "NumNota",
      "label": "NumNota",
      "name": "NumNota",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "Serie",
      "label": "Serie",
      "name": "Serie",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "Modelo",
      "label": "Modelo",
      "name": "Modelo",
      "type": "string",
      "size": 3,
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
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "CdProduto",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "VlBaseCalculoICMS",
      "label": "VlBaseCalculoICMS",
      "name": "VlBaseCalculoICMS",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "PercICMSOperacao",
      "label": "PercICMSOperacao",
      "name": "PercICMSOperacao",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "PercICMSDestino",
      "label": "PercICMSDestino",
      "name": "PercICMSDestino",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "PercPartilha",
      "label": "PercPartilha",
      "name": "PercPartilha",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlICMSUFOrigem",
      "label": "VlICMSUFOrigem",
      "name": "VlICMSUFOrigem",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlICMSUFDestino",
      "label": "VlICMSUFDestino",
      "name": "VlICMSUFDestino",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "PercCombatePobrezaDestino",
      "label": "PercCombatePobrezaDestino",
      "name": "PercCombatePobrezaDestino",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlCombatePobrezaDestino",
      "label": "VlCombatePobrezaDestino",
      "name": "VlCombatePobrezaDestino",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    }
  ]
}
