import { TEntity } from "@er/types/*";

export const tPlanRegistro: TEntity =
  {
  "database": "oftalmo",
  "table": "tPlanRegistro",
  "fields": [
    {
      "field": "kPlanRegistro",
      "label": "kPlanRegistro",
      "name": "tPlanRegistro_id",
      "type": "int",
      "size": 4,
      "autoIncrement": true,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "fkPlanComponente",
      "label": "fkPlanComponente",
      "name": "fkPlanComponente",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "DataPrevista",
      "label": "DataPrevista",
      "name": "DataPrevista",
      "type": "date",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "DataRealizada",
      "label": "DataRealizada",
      "name": "DataRealizada",
      "type": "date",
      "size": 4
    },
    {
      "field": "Observacao",
      "label": "Observacao",
      "name": "Observacao",
      "type": "string",
      "size": 150
    },
    {
      "field": "Responsavel",
      "label": "Responsavel",
      "name": "Responsavel",
      "type": "string",
      "size": 50
    },
    {
      "field": "Fabricante",
      "label": "Fabricante",
      "name": "Fabricante",
      "type": "string",
      "size": 50
    },
    {
      "field": "Modelo",
      "label": "Modelo",
      "name": "Modelo",
      "type": "string",
      "size": 25
    },
    {
      "field": "NumeroSerie",
      "label": "NumeroSerie",
      "name": "NumeroSerie",
      "type": "string",
      "size": 25
    },
    {
      "field": "Localizacao",
      "label": "Localizacao",
      "name": "Localizacao",
      "type": "string",
      "size": 50
    },
    {
      "field": "FaixaUso",
      "label": "FaixaUso",
      "name": "FaixaUso",
      "type": "string",
      "size": 20
    },
    {
      "field": "Resolucao",
      "label": "Resolucao",
      "name": "Resolucao",
      "type": "string",
      "size": 20
    },
    {
      "field": "Exatidao",
      "label": "Exatidao",
      "name": "Exatidao",
      "type": "string",
      "size": 20
    },
    {
      "field": "Valor",
      "label": "Valor",
      "name": "Valor",
      "type": "string",
      "size": 20
    },
    {
      "field": "Tolerancia",
      "label": "Tolerancia",
      "name": "Tolerancia",
      "type": "string",
      "size": 20
    },
    {
      "field": "EmpresaResponsavel",
      "label": "EmpresaResponsavel",
      "name": "EmpresaResponsavel",
      "type": "string",
      "size": 50
    },
    {
      "field": "DataCalibracao",
      "label": "DataCalibracao",
      "name": "DataCalibracao",
      "type": "date",
      "size": 4
    },
    {
      "field": "Notificado",
      "label": "Notificado",
      "name": "Notificado",
      "type": "int",
      "size": 1,
      "allowNull": false,
      "defaultValue": "0"
    }
  ]
}
