import { TEntity } from "@er/types/*";

export const TabDif: TEntity =
  {
  "database": "plano",
  "table": "TabDif",
  "fields": [
    {
      "field": "CdEmpresa",
      "label": "CdEmpresa",
      "name": "CdEmpresa",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "CdProduto",
      "type": "string",
      "size": 15,
      "allowNull": false
    },
    {
      "field": "DtLcto",
      "label": "DtLcto",
      "name": "DtLcto",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "HrLcto",
      "label": "HrLcto",
      "name": "HrLcto",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "EstAtual",
      "label": "EstAtual",
      "name": "EstAtual",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "EstDif",
      "label": "EstDif",
      "name": "EstDif",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Motivo",
      "label": "Motivo",
      "name": "Motivo",
      "type": "string",
      "size": 50
    },
    {
      "field": "FgAtualizacao",
      "label": "FgAtualizacao",
      "name": "FgAtualizacao",
      "type": "string",
      "size": 1
    },
    {
      "field": "DtValidacao",
      "label": "DtValidacao",
      "name": "DtValidacao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "Contagem",
      "label": "Contagem",
      "name": "Contagem",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Usuario",
      "label": "Usuario",
      "name": "Usuario",
      "type": "string",
      "size": 10
    }
  ]
}
