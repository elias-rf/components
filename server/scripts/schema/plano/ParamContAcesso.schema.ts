import { TEntity } from "@er/types/*";

export const ParamContAcesso: TEntity =
  {
  "database": "plano",
  "table": "ParamContAcesso",
  "fields": [
    {
      "field": "Base",
      "label": "Base",
      "name": "Base",
      "type": "string",
      "size": 512,
      "allowNull": false
    },
    {
      "field": "Estacao",
      "label": "Estacao",
      "name": "Estacao",
      "type": "string",
      "size": 512,
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
    },
    {
      "field": "Observacao",
      "label": "Observacao",
      "name": "Observacao",
      "type": "string",
      "size": 512
    }
  ]
}
