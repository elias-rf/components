import { TTableDef } from "@/types/model";

export const CtrlLigacao: TTableDef = {
  database: "plano",
  table: "CtrlLigacao",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Id",
      label: "Id",
      name: "Id",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Data",
      label: "Data",
      name: "Data",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "Horario",
      label: "Horario",
      name: "Horario",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "CdAtendente",
      label: "CdAtendente",
      name: "CdAtendente",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdDestinatario",
      label: "CdDestinatario",
      name: "CdDestinatario",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Telefone",
      label: "Telefone",
      name: "Telefone",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Contato",
      label: "Contato",
      name: "Contato",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgTipo",
      label: "FgTipo",
      name: "FgTipo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Motivo",
      label: "Motivo",
      name: "Motivo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Encaminhamento",
      label: "Encaminhamento",
      name: "Encaminhamento",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgRetorno",
      label: "FgRetorno",
      name: "FgRetorno",
      typeField: "string",

      allowNull: false,
    },
  ],
};
