import { TEntity } from "@er/types/*";

export const HistoricoFormulacao: TEntity =
  {
  "database": "plano",
  "table": "HistoricoFormulacao",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "NumFormula",
      "label": "NumFormula",
      "name": "NumFormula",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "Sequencia",
      "label": "Sequencia",
      "name": "Sequencia",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CdUsuario",
      "label": "CdUsuario",
      "name": "CdUsuario",
      "type": "string",
      "size": 10,
      "allowNull": false
    },
    {
      "field": "TipoOcorrencia",
      "label": "TipoOcorrencia",
      "name": "TipoOcorrencia",
      "type": "string",
      "size": 2,
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
      "field": "Historico",
      "label": "Historico",
      "name": "Historico",
      "type": "string",
      "size": 1024
    },
    {
      "field": "Observacao",
      "label": "Observacao",
      "name": "Observacao",
      "type": "string",
      "size": 1024
    }
  ]
}
