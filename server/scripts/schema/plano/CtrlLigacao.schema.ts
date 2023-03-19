import { TTableDef } from "../../../../types/model";

export const CtrlLigacao: TTableDef = {
  database: "plano",
  table: "CtrlLigacao",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "Id",
      label: "Id",
      name: "Id",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "Data",
      label: "Data",
      name: "Data",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "Horario",
      label: "Horario",
      name: "Horario",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "CdAtendente",
      label: "CdAtendente",
      name: "CdAtendente",
      typeField: "string",
      size: 10,
      allowNull: false,
    },
    {
      field: "CdDestinatario",
      label: "CdDestinatario",
      name: "CdDestinatario",
      typeField: "string",
      size: 10,
      allowNull: false,
    },
    {
      field: "Telefone",
      label: "Telefone",
      name: "Telefone",
      typeField: "string",
      size: 20,
      allowNull: false,
    },
    {
      field: "Contato",
      label: "Contato",
      name: "Contato",
      typeField: "string",
      size: 40,
      allowNull: false,
    },
    {
      field: "FgTipo",
      label: "FgTipo",
      name: "FgTipo",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "Motivo",
      label: "Motivo",
      name: "Motivo",
      typeField: "string",
      size: 512,
      allowNull: false,
    },
    {
      field: "Encaminhamento",
      label: "Encaminhamento",
      name: "Encaminhamento",
      typeField: "string",
      size: 512,
      allowNull: false,
    },
    {
      field: "FgRetorno",
      label: "FgRetorno",
      name: "FgRetorno",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
  ],
};
