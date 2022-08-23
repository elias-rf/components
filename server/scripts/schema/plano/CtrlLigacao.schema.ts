import { TEntity } from "@er/types/*";

export const CtrlLigacao: TEntity =
  {
  "database": "plano",
  "table": "CtrlLigacao",
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
      "field": "Id",
      "label": "Id",
      "name": "Id",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "CdCliente",
      "label": "CdCliente",
      "name": "CdCliente",
      "type": "int",
      "size": 9,
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
      "field": "Horario",
      "label": "Horario",
      "name": "Horario",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "CdAtendente",
      "label": "CdAtendente",
      "name": "CdAtendente",
      "type": "string",
      "size": 10,
      "allowNull": false
    },
    {
      "field": "CdDestinatario",
      "label": "CdDestinatario",
      "name": "CdDestinatario",
      "type": "string",
      "size": 10,
      "allowNull": false
    },
    {
      "field": "Telefone",
      "label": "Telefone",
      "name": "Telefone",
      "type": "string",
      "size": 20,
      "allowNull": false
    },
    {
      "field": "Contato",
      "label": "Contato",
      "name": "Contato",
      "type": "string",
      "size": 40,
      "allowNull": false
    },
    {
      "field": "FgTipo",
      "label": "FgTipo",
      "name": "FgTipo",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "Motivo",
      "label": "Motivo",
      "name": "Motivo",
      "type": "string",
      "size": 512,
      "allowNull": false
    },
    {
      "field": "Encaminhamento",
      "label": "Encaminhamento",
      "name": "Encaminhamento",
      "type": "string",
      "size": 512,
      "allowNull": false
    },
    {
      "field": "FgRetorno",
      "label": "FgRetorno",
      "name": "FgRetorno",
      "type": "string",
      "size": 1,
      "allowNull": false
    }
  ]
}
