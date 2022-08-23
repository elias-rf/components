import { TEntity } from "@er/types/*";

export const PharmaLinkPedido: TEntity =
  {
  "database": "plano",
  "table": "PharmaLinkPedido",
  "fields": [
    {
      "field": "NumAutorizacao",
      "label": "NumAutorizacao",
      "name": "PharmaLinkPedido_id",
      "type": "int",
      "size": 9,
      "primaryKey": true,
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
      "field": "Operadora",
      "label": "Operadora",
      "name": "Operadora",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "CdProjeto",
      "label": "CdProjeto",
      "name": "CdProjeto",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "Modalidade",
      "label": "Modalidade",
      "name": "Modalidade",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "DtRetorno",
      "label": "DtRetorno",
      "name": "DtRetorno",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "CdStatus",
      "label": "CdStatus",
      "name": "CdStatus",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "NmPaciente",
      "label": "NmPaciente",
      "name": "NmPaciente",
      "type": "string",
      "size": 128,
      "allowNull": false
    },
    {
      "field": "CdTerminal",
      "label": "CdTerminal",
      "name": "CdTerminal",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "NumeroCartao",
      "label": "NumeroCartao",
      "name": "NumeroCartao",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "NumPedido",
      "label": "NumPedido",
      "name": "NumPedido",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "ExigeCRM",
      "label": "ExigeCRM",
      "name": "ExigeCRM",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "NumDoc",
      "label": "NumDoc",
      "name": "NumDoc",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "Serie",
      "label": "Serie",
      "name": "Serie",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "Modelo",
      "label": "Modelo",
      "name": "Modelo",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "NumPDV",
      "label": "NumPDV",
      "name": "NumPDV",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "NumCOO",
      "label": "NumCOO",
      "name": "NumCOO",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    }
  ]
}
