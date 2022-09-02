import { TEntity } from "@er/types/*";

export const RomaneioEstoqueHistorico: TEntity =
  {
  "database": "plano",
  "table": "RomaneioEstoqueHistorico",
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
      "field": "NumRomaneio",
      "label": "NumRomaneio",
      "name": "NumRomaneio",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "Data",
      "label": "Data",
      "name": "Data",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "Usuario",
      "label": "Usuario",
      "name": "Usuario",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "Historico",
      "label": "Historico",
      "name": "Historico",
      "type": "string",
      "size": 1028,
      "allowNull": false
    }
  ]
}
