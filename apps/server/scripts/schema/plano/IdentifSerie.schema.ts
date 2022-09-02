import { TEntity } from "@er/types/*";

export const IdentifSerie: TEntity =
  {
  "database": "plano",
  "table": "IdentifSerie",
  "fields": [
    {
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "CdProduto",
      "type": "string",
      "size": 15,
      "allowNull": false
    },
    {
      "field": "NumSerieProduto",
      "label": "NumSerieProduto",
      "name": "NumSerieProduto",
      "type": "string",
      "size": 20,
      "allowNull": false
    },
    {
      "field": "DtLimiteGarantia",
      "label": "DtLimiteGarantia",
      "name": "DtLimiteGarantia",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "Prazo",
      "label": "Prazo",
      "name": "Prazo",
      "type": "int",
      "size": 4
    },
    {
      "field": "DtLimiteGarantiaVenda",
      "label": "DtLimiteGarantiaVenda",
      "name": "DtLimiteGarantiaVenda",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "Status",
      "label": "Status",
      "name": "Status",
      "type": "string",
      "size": 1
    }
  ]
}
