import { TEntity } from "@er/types/*";

export const ProgramaObservacao: TEntity =
  {
  "database": "plano",
  "table": "ProgramaObservacao",
  "fields": [
    {
      "field": "CdPrograma",
      "label": "CdPrograma",
      "name": "ProgramaObservacao_id",
      "type": "int",
      "size": 2,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "Observacao",
      "label": "Observacao",
      "name": "Observacao",
      "type": "string",
      "size": 1024,
      "allowNull": false
    }
  ]
}