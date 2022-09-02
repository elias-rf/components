import { TEntity } from "@er/types/*";

export const ProbRelSaudeInterv: TEntity =
  {
  "database": "plano",
  "table": "ProbRelSaudeInterv",
  "fields": [
    {
      "field": "CdIntervencao",
      "label": "CdIntervencao",
      "name": "CdIntervencao",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CdCliente",
      "label": "CdCliente",
      "name": "CdCliente",
      "type": "float",
      "size": 8,
      "scale": 4
    },
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
      "field": "DtUltAlteracao",
      "label": "DtUltAlteracao",
      "name": "DtUltAlteracao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    }
  ]
}
