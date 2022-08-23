import { TEntity } from "@er/types/*";

export const tOperacaoOrdemProducao: TEntity =
  {
  "database": "oftalmo",
  "table": "tOperacaoOrdemProducao",
  "fields": [
    {
      "field": "kOperacaoOP",
      "label": "kOperacaoOP",
      "name": "tOperacaoOrdemProducao_id",
      "type": "int",
      "size": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "fkOp",
      "label": "fkOp",
      "name": "fkOp",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "fkOperacaoLP",
      "label": "fkOperacaoLP",
      "name": "fkOperacaoLP",
      "type": "int",
      "size": 4
    },
    {
      "field": "fkOperacao",
      "label": "fkOperacao",
      "name": "fkOperacao",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "fkFuncionario",
      "label": "fkFuncionario",
      "name": "fkFuncionario",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "fkMaquina",
      "label": "fkMaquina",
      "name": "fkMaquina",
      "type": "string",
      "size": 30
    },
    {
      "field": "DataHoraInicio",
      "label": "DataHoraInicio",
      "name": "DataHoraInicio",
      "type": "date",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "DataInicio",
      "label": "DataInicio",
      "name": "DataInicio",
      "type": "date",
      "size": 4
    },
    {
      "field": "HoraInicio",
      "label": "HoraInicio",
      "name": "HoraInicio",
      "type": "string",
      "size": 8
    },
    {
      "field": "DataHoraFim",
      "label": "DataHoraFim",
      "name": "DataHoraFim",
      "type": "date",
      "size": 4
    },
    {
      "field": "DataFim",
      "label": "DataFim",
      "name": "DataFim",
      "type": "date",
      "size": 4
    },
    {
      "field": "HoraFim",
      "label": "HoraFim",
      "name": "HoraFim",
      "type": "string",
      "size": 8
    },
    {
      "field": "QtdInicial",
      "label": "QtdInicial",
      "name": "QtdInicial",
      "type": "int",
      "size": 4
    },
    {
      "field": "QtdConforme",
      "label": "QtdConforme",
      "name": "QtdConforme",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "QtdRetrabalho",
      "label": "QtdRetrabalho",
      "name": "QtdRetrabalho",
      "type": "int",
      "size": 4,
      "allowNull": false,
      "defaultValue": "0"
    },
    {
      "field": "fkOperacaoRetrab",
      "label": "fkOperacaoRetrab",
      "name": "fkOperacaoRetrab",
      "type": "int",
      "size": 4
    },
    {
      "field": "Complemento",
      "label": "Complemento",
      "name": "Complemento",
      "type": "string",
      "size": 50
    },
    {
      "field": "fkOPFilha",
      "label": "fkOPFilha",
      "name": "fkOPFilha",
      "type": "int",
      "size": 4
    },
    {
      "field": "ViaFilhaAntiga",
      "label": "ViaFilhaAntiga",
      "name": "ViaFilhaAntiga",
      "type": "float",
      "size": 4
    },
    {
      "field": "IdPagina",
      "label": "IdPagina",
      "name": "IdPagina",
      "type": "int",
      "size": 4
    },
    {
      "field": "OPAntiga",
      "label": "OPAntiga",
      "name": "OPAntiga",
      "type": "string",
      "size": 8
    },
    {
      "field": "ClasseOP",
      "label": "ClasseOP",
      "name": "ClasseOP",
      "type": "int",
      "size": 1
    },
    {
      "field": "EspPriAlca",
      "label": "EspPriAlca",
      "name": "EspPriAlca",
      "type": "string",
      "size": 6
    },
    {
      "field": "EspSegAlca",
      "label": "EspSegAlca",
      "name": "EspSegAlca",
      "type": "string",
      "size": 6
    }
  ]
}
