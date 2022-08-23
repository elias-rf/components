import { TEntity } from "@er/types/*";

export const TributacaoEstados: TEntity =
  {
  "database": "plano",
  "table": "TributacaoEstados",
  "fields": [
    {
      "field": "UfOrigem",
      "label": "UfOrigem",
      "name": "UfOrigem",
      "type": "string",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "UfDestino",
      "label": "UfDestino",
      "name": "UfDestino",
      "type": "string",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "AliqICMSEntrada",
      "label": "AliqICMSEntrada",
      "name": "AliqICMSEntrada",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "ReducaoICMSEntrada",
      "label": "ReducaoICMSEntrada",
      "name": "ReducaoICMSEntrada",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "AliqICMSSaidaContribuinte",
      "label": "AliqICMSSaidaContribuinte",
      "name": "AliqICMSSaidaContribuinte",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "ReducaoICMSSaidaContribuinte",
      "label": "ReducaoICMSSaidaContribuinte",
      "name": "ReducaoICMSSaidaContribuinte",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "AliqICMSSaidaContribuinteSimples",
      "label": "AliqICMSSaidaContribuinteSimples",
      "name": "AliqICMSSaidaContribuinteSimples",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "ReducaoICMSSaidaContribuinteSimples",
      "label": "ReducaoICMSSaidaContribuinteSimples",
      "name": "ReducaoICMSSaidaContribuinteSimples",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "AliqICMSSaidaNaoContribuinte",
      "label": "AliqICMSSaidaNaoContribuinte",
      "name": "AliqICMSSaidaNaoContribuinte",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "ReducaoICMSSaidaNaoContribuinte",
      "label": "ReducaoICMSSaidaNaoContribuinte",
      "name": "ReducaoICMSSaidaNaoContribuinte",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "DtUltAlteracao",
      "label": "DtUltAlteracao",
      "name": "DtUltAlteracao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "AliqICMSSaidaNaoContribuinteSimples",
      "label": "AliqICMSSaidaNaoContribuinteSimples",
      "name": "AliqICMSSaidaNaoContribuinteSimples",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "ReducaoICMSSaidaNaoContribuinteSimples",
      "label": "ReducaoICMSSaidaNaoContribuinteSimples",
      "name": "ReducaoICMSSaidaNaoContribuinteSimples",
      "type": "float",
      "size": 8,
      "scale": 4
    }
  ]
}
