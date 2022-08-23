import { TEntity } from "@er/types/*";

export const TabDep: TEntity =
  {
  "database": "plano",
  "table": "TabDep",
  "fields": [
    {
      "field": "CdDepartamento",
      "label": "CdDepartamento",
      "name": "TabDep_id",
      "type": "int",
      "size": 2,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "NmDepartamento",
      "label": "NmDepartamento",
      "name": "NmDepartamento",
      "type": "string",
      "size": 30
    },
    {
      "field": "PercLucro",
      "label": "PercLucro",
      "name": "PercLucro",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "FgEstoque",
      "label": "FgEstoque",
      "name": "FgEstoque",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgListaPreco",
      "label": "FgListaPreco",
      "name": "FgListaPreco",
      "type": "string",
      "size": 1
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
      "field": "PercDescMaxGerente",
      "label": "PercDescMaxGerente",
      "name": "PercDescMaxGerente",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercDescMaxVendedor",
      "label": "PercDescMaxVendedor",
      "name": "PercDescMaxVendedor",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PontosMilhagem",
      "label": "PontosMilhagem",
      "name": "PontosMilhagem",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "SeqGrade",
      "label": "SeqGrade",
      "name": "SeqGrade",
      "type": "int",
      "size": 5
    }
  ]
}
