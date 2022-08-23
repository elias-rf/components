import { TEntity } from "@er/types/*";

export const ProbRelSaudeExames: TEntity =
  {
  "database": "plano",
  "table": "ProbRelSaudeExames",
  "fields": [
    {
      "field": "CdPrs",
      "label": "CdPrs",
      "name": "CdPrs",
      "type": "string",
      "size": 8
    },
    {
      "field": "Data",
      "label": "Data",
      "name": "Data",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "CdCliente",
      "label": "CdCliente",
      "name": "CdCliente",
      "type": "string",
      "size": 15
    }
  ]
}
