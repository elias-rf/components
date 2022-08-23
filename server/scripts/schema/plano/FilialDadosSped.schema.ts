import { TEntity } from "@er/types/*";

export const FilialDadosSped: TEntity =
  {
  "database": "plano",
  "table": "FilialDadosSped",
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
      "field": "CdObrigacaoRecolher",
      "label": "CdObrigacaoRecolher",
      "name": "CdObrigacaoRecolher",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "CdReceita",
      "label": "CdReceita",
      "name": "CdReceita",
      "type": "string",
      "size": 16,
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
