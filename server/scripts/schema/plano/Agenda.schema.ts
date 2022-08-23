import { TEntity } from "@er/types/*";

export const Agenda: TEntity =
  {
  "database": "plano",
  "table": "Agenda",
  "fields": [
    {
      "field": "CdUsuario",
      "label": "CdUsuario",
      "name": "CdUsuario",
      "type": "string",
      "size": 10
    },
    {
      "field": "IdCompromisso",
      "label": "IdCompromisso",
      "name": "Agenda_id",
      "type": "int",
      "size": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "CdCliente",
      "label": "CdCliente",
      "name": "CdCliente",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "DtAgendamento",
      "label": "DtAgendamento",
      "name": "DtAgendamento",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "HrAgendamento",
      "label": "HrAgendamento",
      "name": "HrAgendamento",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DtAgendada",
      "label": "DtAgendada",
      "name": "DtAgendada",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "HrAgendado",
      "label": "HrAgendado",
      "name": "HrAgendado",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DsCompromisso",
      "label": "DsCompromisso",
      "name": "DsCompromisso",
      "type": "string",
      "size": 1024
    },
    {
      "field": "NmContato",
      "label": "NmContato",
      "name": "NmContato",
      "type": "string",
      "size": 40
    },
    {
      "field": "FgStatusCompromisso",
      "label": "FgStatusCompromisso",
      "name": "FgStatusCompromisso",
      "type": "string",
      "size": 1
    },
    {
      "field": "NumPedido",
      "label": "NumPedido",
      "name": "NumPedido",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CdRespAgendamento",
      "label": "CdRespAgendamento",
      "name": "CdRespAgendamento",
      "type": "string",
      "size": 10
    }
  ]
}
