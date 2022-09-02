import { TEntity } from "@er/types/*";

export const SpedItemDescComp: TEntity =
  {
  "database": "plano",
  "table": "SpedItemDescComp",
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
      "field": "CdEmitente",
      "label": "CdEmitente",
      "name": "CdEmitente",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "TipoEmitente",
      "label": "TipoEmitente",
      "name": "TipoEmitente",
      "type": "string",
      "size": 1,
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
      "field": "SubSerie",
      "label": "SubSerie",
      "name": "SubSerie",
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
      "field": "NumECF",
      "label": "NumECF",
      "name": "NumECF",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "Sequencia",
      "label": "Sequencia",
      "name": "Sequencia",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "DescComplementar",
      "label": "DescComplementar",
      "name": "DescComplementar",
      "type": "string",
      "size": 256,
      "allowNull": false
    }
  ]
}
