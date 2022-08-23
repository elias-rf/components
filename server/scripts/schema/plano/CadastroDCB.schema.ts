import { TEntity } from "@er/types/*";

export const CadastroDCB: TEntity =
  {
  "database": "plano",
  "table": "CadastroDCB",
  "fields": [
    {
      "field": "CdDCB",
      "label": "CdDCB",
      "name": "CadastroDCB_id",
      "type": "string",
      "size": 16,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "DescricaoDCB",
      "label": "DescricaoDCB",
      "name": "DescricaoDCB",
      "type": "string",
      "size": 40
    },
    {
      "field": "Observacao",
      "label": "Observacao",
      "name": "Observacao",
      "type": "string",
      "size": 1024
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
