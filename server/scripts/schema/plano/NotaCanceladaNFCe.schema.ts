import { TEntity } from "@er/types/*";

export const NotaCanceladaNFCe: TEntity =
  {
  "database": "plano",
  "table": "NotaCanceladaNFCe",
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
      "field": "Usuario",
      "label": "Usuario",
      "name": "Usuario",
      "type": "string",
      "size": 16,
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
      "field": "Supervisor",
      "label": "Supervisor",
      "name": "Supervisor",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "Valor",
      "label": "Valor",
      "name": "Valor",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "Motivo",
      "label": "Motivo",
      "name": "Motivo",
      "type": "string",
      "size": 120,
      "allowNull": false
    }
  ]
}
