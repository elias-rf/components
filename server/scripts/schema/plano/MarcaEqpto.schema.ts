import { TEntity } from "@er/types/*";

export const MarcaEqpto: TEntity =
  {
  "database": "plano",
  "table": "MarcaEqpto",
  "fields": [
    {
      "field": "CdMarcaEqpto",
      "label": "CdMarcaEqpto",
      "name": "MarcaEqpto_id",
      "type": "int",
      "size": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "NmMarcaEqpto",
      "label": "NmMarcaEqpto",
      "name": "NmMarcaEqpto",
      "type": "string",
      "size": 40,
      "allowNull": false
    }
  ]
}
