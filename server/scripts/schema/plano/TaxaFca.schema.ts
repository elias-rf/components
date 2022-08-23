import { TEntity } from "@er/types/*";

export const TaxaFca: TEntity =
  {
  "database": "plano",
  "table": "TaxaFca",
  "fields": [
    {
      "field": "DataFca",
      "label": "DataFca",
      "name": "TaxaFca_id",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "IndiceFca",
      "label": "IndiceFca",
      "name": "IndiceFca",
      "type": "float",
      "size": 8,
      "scale": 4
    }
  ]
}
