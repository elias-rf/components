import { TEntity } from "@er/types/*";

export const tPlanComponente: TEntity =
  {
  "database": "oftalmo",
  "table": "tPlanComponente",
  "fields": [
    {
      "field": "kPlanComponente",
      "label": "kPlanComponente",
      "name": "tPlanComponente_id",
      "type": "int",
      "size": 4,
      "autoIncrement": true,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "fkPlanItem",
      "label": "fkPlanItem",
      "name": "fkPlanItem",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "NomeComponente",
      "label": "NomeComponente",
      "name": "NomeComponente",
      "type": "string",
      "size": 100,
      "allowNull": false
    },
    {
      "field": "BaseFrequencia",
      "label": "BaseFrequencia",
      "name": "BaseFrequencia",
      "type": "string",
      "size": 3,
      "allowNull": false,
      "defaultValue": "Dia"
    },
    {
      "field": "Frequencia",
      "label": "Frequencia",
      "name": "Frequencia",
      "type": "int",
      "size": 4,
      "allowNull": false,
      "defaultValue": "1"
    },
    {
      "field": "TempoAviso",
      "label": "TempoAviso",
      "name": "TempoAviso",
      "type": "int",
      "size": 2,
      "allowNull": false,
      "defaultValue": "1"
    }
  ]
}
