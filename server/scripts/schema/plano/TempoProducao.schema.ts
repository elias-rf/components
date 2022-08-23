import { TEntity } from "@er/types/*";

export const TempoProducao: TEntity =
  {
  "database": "plano",
  "table": "TempoProducao",
  "fields": [
    {
      "field": "NumItens",
      "label": "NumItens",
      "name": "TempoProducao_id",
      "type": "int",
      "size": 2,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "NumCapsulas",
      "label": "NumCapsulas",
      "name": "NumCapsulas",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "TempoLaboratorio",
      "label": "TempoLaboratorio",
      "name": "TempoLaboratorio",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "TempoTelemarketing",
      "label": "TempoTelemarketing",
      "name": "TempoTelemarketing",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "TempoBalcao",
      "label": "TempoBalcao",
      "name": "TempoBalcao",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "TempoControleQualidade",
      "label": "TempoControleQualidade",
      "name": "TempoControleQualidade",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "DtUltAlteracao",
      "label": "DtUltAlteracao",
      "name": "DtUltAlteracao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    }
  ]
}
