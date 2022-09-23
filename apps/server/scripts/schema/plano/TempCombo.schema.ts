import { TEntity } from "@er/types/*";

export const TempCombo: TEntity =
  {
  "database": "plano",
  "table": "TempCombo",
  "fields": [
    {
      "field": "Estacao",
      "label": "Estacao",
      "name": "Estacao",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "Origem",
      "label": "Origem",
      "name": "Origem",
      "type": "string",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "Sequencia",
      "label": "Sequencia",
      "name": "Sequencia",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "CdCombo",
      "label": "CdCombo",
      "name": "CdCombo",
      "type": "string",
      "size": 18,
      "allowNull": false
    },
    {
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "CdProduto",
      "type": "string",
      "size": 18,
      "allowNull": false
    },
    {
      "field": "QtdeMinima",
      "label": "QtdeMinima",
      "name": "QtdeMinima",
      "type": "int",
      "size": 5,
      "scale": 5,
      "allowNull": false
    },
    {
      "field": "QtdeMaxima",
      "label": "QtdeMaxima",
      "name": "QtdeMaxima",
      "type": "int",
      "size": 5,
      "scale": 5,
      "allowNull": false
    },
    {
      "field": "VlUnidadeCombo",
      "label": "VlUnidadeCombo",
      "name": "VlUnidadeCombo",
      "type": "int",
      "size": 9,
      "scale": 5,
      "allowNull": false
    },
    {
      "field": "QtdeVendida",
      "label": "QtdeVendida",
      "name": "QtdeVendida",
      "type": "int",
      "size": 5,
      "scale": 5,
      "allowNull": false
    },
    {
      "field": "VlUnidadeVenda",
      "label": "VlUnidadeVenda",
      "name": "VlUnidadeVenda",
      "type": "int",
      "size": 9,
      "scale": 5,
      "allowNull": false
    },
    {
      "field": "QtdeUtilizada",
      "label": "QtdeUtilizada",
      "name": "QtdeUtilizada",
      "type": "int",
      "size": 5,
      "scale": 5,
      "allowNull": false
    },
    {
      "field": "QtdeCombo",
      "label": "QtdeCombo",
      "name": "QtdeCombo",
      "type": "int",
      "size": 5,
      "scale": 5,
      "allowNull": false
    }
  ]
}