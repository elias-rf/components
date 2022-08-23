import { TEntity } from "@er/types/*";

export const ProducaoFormulaOperacao: TEntity =
  {
  "database": "plano",
  "table": "ProducaoFormulaOperacao",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "NumFormula",
      "label": "NumFormula",
      "name": "NumFormula",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "CdOperacao",
      "label": "CdOperacao",
      "name": "CdOperacao",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "QtdeConforme",
      "label": "QtdeConforme",
      "name": "QtdeConforme",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "QtdeRetrabalho",
      "label": "QtdeRetrabalho",
      "name": "QtdeRetrabalho",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CdMaquina",
      "label": "CdMaquina",
      "name": "CdMaquina",
      "type": "string",
      "size": 8,
      "allowNull": false
    },
    {
      "field": "CdOperador",
      "label": "CdOperador",
      "name": "CdOperador",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "DtInicio",
      "label": "DtInicio",
      "name": "DtInicio",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "DtTermino",
      "label": "DtTermino",
      "name": "DtTermino",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "CdOperacaoRetrabalho",
      "label": "CdOperacaoRetrabalho",
      "name": "CdOperacaoRetrabalho",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "QtdeNaoConforme",
      "label": "QtdeNaoConforme",
      "name": "QtdeNaoConforme",
      "type": "int",
      "size": 5,
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
      "field": "QtdeReclassificacao",
      "label": "QtdeReclassificacao",
      "name": "QtdeReclassificacao",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "SequenciaOperacao",
      "label": "SequenciaOperacao",
      "name": "SequenciaOperacao",
      "type": "int",
      "size": 5
    }
  ]
}
