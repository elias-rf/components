import { TEntity } from "@er/types/*";

export const UnidadeProdutiva: TEntity =
  {
  "database": "plano",
  "table": "UnidadeProdutiva",
  "fields": [
    {
      "field": "Identificacao",
      "label": "Identificacao",
      "name": "UnidadeProdutiva_id",
      "type": "string",
      "size": 25,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "CustoLaboratorio",
      "label": "CustoLaboratorio",
      "name": "CustoLaboratorio",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CustoTelemarketing",
      "label": "CustoTelemarketing",
      "name": "CustoTelemarketing",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CustoBalcao",
      "label": "CustoBalcao",
      "name": "CustoBalcao",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CustoControleQualidade",
      "label": "CustoControleQualidade",
      "name": "CustoControleQualidade",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CustoExpedicao",
      "label": "CustoExpedicao",
      "name": "CustoExpedicao",
      "type": "float",
      "size": 8,
      "scale": 4,
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