import { TTableDef } from "@/types/model";

export const Agenda: TTableDef = {
  database: "plano",
  table: "Agenda",
  fields: [
    {
      field: "CdUsuario",
      label: "CdUsuario",
      name: "CdUsuario",
      typeField: "string",
    },
    {
      field: "IdCompromisso",
      label: "IdCompromisso",
      name: "Agenda_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "float",

      scale: 4,
    },
    {
      field: "DtAgendamento",
      label: "DtAgendamento",
      name: "DtAgendamento",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "HrAgendamento",
      label: "HrAgendamento",
      name: "HrAgendamento",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtAgendada",
      label: "DtAgendada",
      name: "DtAgendada",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "HrAgendado",
      label: "HrAgendado",
      name: "HrAgendado",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DsCompromisso",
      label: "DsCompromisso",
      name: "DsCompromisso",
      typeField: "string",
    },
    {
      field: "NmContato",
      label: "NmContato",
      name: "NmContato",
      typeField: "string",
    },
    {
      field: "FgStatusCompromisso",
      label: "FgStatusCompromisso",
      name: "FgStatusCompromisso",
      typeField: "string",
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdRespAgendamento",
      label: "CdRespAgendamento",
      name: "CdRespAgendamento",
      typeField: "string",
    },
  ],
};
