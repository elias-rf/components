import { TEntity } from "@er/types/*";

export const MestreReq: TEntity =
  {
  "database": "plano",
  "table": "MestreReq",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "NumRequisicao",
      "label": "NumRequisicao",
      "name": "NumRequisicao",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "DtEmissao",
      "label": "DtEmissao",
      "name": "DtEmissao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "CdTecnico",
      "label": "CdTecnico",
      "name": "CdTecnico",
      "type": "int",
      "size": 4
    },
    {
      "field": "NumeroRat",
      "label": "NumeroRat",
      "name": "NumeroRat",
      "type": "int",
      "size": 4
    },
    {
      "field": "Situacao",
      "label": "Situacao",
      "name": "Situacao",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgEstoque",
      "label": "FgEstoque",
      "name": "FgEstoque",
      "type": "string",
      "size": 1
    }
  ]
}
