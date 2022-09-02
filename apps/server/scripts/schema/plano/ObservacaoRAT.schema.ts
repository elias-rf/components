import { TEntity } from "@er/types/*";

export const ObservacaoRAT: TEntity =
  {
  "database": "plano",
  "table": "ObservacaoRAT",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "NumeroRAT",
      "label": "NumeroRAT",
      "name": "NumeroRAT",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "Ocorrencia",
      "label": "Ocorrencia",
      "name": "Ocorrencia",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "Observacao",
      "label": "Observacao",
      "name": "Observacao",
      "type": "string",
      "size": 1024
    }
  ]
}
