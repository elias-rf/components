import { TEntity } from "@er/types/*";

export const ProjetosConfiguracao: TEntity =
  {
  "database": "plano",
  "table": "ProjetosConfiguracao",
  "fields": [
    {
      "field": "CdProjetosConfiguracao",
      "label": "CdProjetosConfiguracao",
      "name": "ProjetosConfiguracao_id",
      "type": "int",
      "size": 9,
      "autoIncrement": true,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "CdProjeto",
      "label": "CdProjeto",
      "name": "CdProjeto",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "CdProduto",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "QtdeProduto",
      "label": "QtdeProduto",
      "name": "QtdeProduto",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercQtde",
      "label": "PercQtde",
      "name": "PercQtde",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CRM",
      "label": "CRM",
      "name": "CRM",
      "type": "string",
      "size": 15
    },
    {
      "field": "PercCRM",
      "label": "PercCRM",
      "name": "PercCRM",
      "type": "float",
      "size": 8,
      "scale": 4
    }
  ]
}
