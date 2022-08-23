import { TEntity } from "@er/types/*";

export const DistCusto: TEntity =
  {
  "database": "plano",
  "table": "DistCusto",
  "fields": [
    {
      "field": "CdEmpresa",
      "label": "CdEmpresa",
      "name": "CdEmpresa",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "NumDoc",
      "label": "NumDoc",
      "name": "NumDoc",
      "type": "int",
      "size": 9,
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
      "field": "SeqDoc",
      "label": "SeqDoc",
      "name": "SeqDoc",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "CdEmitente",
      "label": "CdEmitente",
      "name": "CdEmitente",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CdCentroCusto",
      "label": "CdCentroCusto",
      "name": "CdCentroCusto",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "Percentual",
      "label": "Percentual",
      "name": "Percentual",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "DtUltAlteracao",
      "label": "DtUltAlteracao",
      "name": "DtUltAlteracao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "NumNota",
      "label": "NumNota",
      "name": "NumNota",
      "type": "int",
      "size": 4
    }
  ]
}
