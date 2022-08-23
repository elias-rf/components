import { TEntity } from "@er/types/*";

export const NotaPartilhaICMSMestre: TEntity =
  {
  "database": "plano",
  "table": "NotaPartilhaICMSMestre",
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
      "field": "VlBaseCalculoICMS",
      "label": "VlBaseCalculoICMS",
      "name": "VlBaseCalculoICMS",
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
