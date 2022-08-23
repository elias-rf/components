import { TEntity } from "@er/types/*";

export const ModeloEqpto: TEntity =
  {
  "database": "plano",
  "table": "ModeloEqpto",
  "fields": [
    {
      "field": "CdModeloEqpto",
      "label": "CdModeloEqpto",
      "name": "ModeloEqpto_id",
      "type": "int",
      "size": 2,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "NmModeloEqpto",
      "label": "NmModeloEqpto",
      "name": "NmModeloEqpto",
      "type": "string",
      "size": 40,
      "allowNull": false
    }
  ]
}
