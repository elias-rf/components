import { TEntity } from "@er/types/*";

export const NotaAgrupamento: TEntity =
  {
  "database": "plano",
  "table": "NotaAgrupamento",
  "fields": [
    {
      "field": "CdEmpresa",
      "label": "CdEmpresa",
      "name": "CdEmpresa",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "NumNotaAgrupada",
      "label": "NumNotaAgrupada",
      "name": "NumNotaAgrupada",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "SerieNotaAgrupada",
      "label": "SerieNotaAgrupada",
      "name": "SerieNotaAgrupada",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "ModeloNotaAgrupada",
      "label": "ModeloNotaAgrupada",
      "name": "ModeloNotaAgrupada",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "NumAgrupamento",
      "label": "NumAgrupamento",
      "name": "NumAgrupamento",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "DtInclusao",
      "label": "DtInclusao",
      "name": "DtInclusao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "NumNotaAgrupamento",
      "label": "NumNotaAgrupamento",
      "name": "NumNotaAgrupamento",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "SerieNotaAgrupamento",
      "label": "SerieNotaAgrupamento",
      "name": "SerieNotaAgrupamento",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "ModeloNotaAgrupamento",
      "label": "ModeloNotaAgrupamento",
      "name": "ModeloNotaAgrupamento",
      "type": "string",
      "size": 3,
      "allowNull": false
    }
  ]
}
