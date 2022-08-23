import { TEntity } from "@er/types/*";

export const tEtiqueta: TEntity =
  {
  "database": "oftalmo",
  "table": "tEtiqueta",
  "fields": [
    {
      "field": "controle",
      "label": "controle",
      "name": "tEtiqueta_id",
      "type": "string",
      "size": 18,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "qtdImpressao",
      "label": "qtdImpressao",
      "name": "qtdImpressao",
      "type": "int",
      "size": 4,
      "allowNull": false,
      "defaultValue": "1"
    },
    {
      "field": "dataFabricacao",
      "label": "dataFabricacao",
      "name": "dataFabricacao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    }
  ]
}
