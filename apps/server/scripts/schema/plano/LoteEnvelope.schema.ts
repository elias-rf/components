import { TEntity } from "@er/types/*";

export const LoteEnvelope: TEntity =
  {
  "database": "plano",
  "table": "LoteEnvelope",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "NumInicial",
      "label": "NumInicial",
      "name": "NumInicial",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "NumFinal",
      "label": "NumFinal",
      "name": "NumFinal",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "DtRemessa",
      "label": "DtRemessa",
      "name": "DtRemessa",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    }
  ]
}