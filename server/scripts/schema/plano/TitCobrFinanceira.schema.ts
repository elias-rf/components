import { TEntity } from "@er/types/*";

export const TitCobrFinanceira: TEntity =
  {
  "database": "plano",
  "table": "TitCobrFinanceira",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "NumDocumento",
      "label": "NumDocumento",
      "name": "NumDocumento",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "Serie",
      "label": "Serie",
      "name": "Serie",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "Modelo",
      "label": "Modelo",
      "name": "Modelo",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "SiglaDoc",
      "label": "SiglaDoc",
      "name": "SiglaDoc",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "ItemDoc",
      "label": "ItemDoc",
      "name": "ItemDoc",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "CdFinanceira",
      "label": "CdFinanceira",
      "name": "CdFinanceira",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "NumParcelas",
      "label": "NumParcelas",
      "name": "NumParcelas",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "VlParcela",
      "label": "VlParcela",
      "name": "VlParcela",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "DtUltAtualizacao",
      "label": "DtUltAtualizacao",
      "name": "DtUltAtualizacao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    }
  ]
}
