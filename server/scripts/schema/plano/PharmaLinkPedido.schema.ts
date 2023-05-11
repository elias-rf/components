import { TTableDef } from "@/types/model";

export const PharmaLinkPedido: TTableDef = {
  database: "plano",
  table: "PharmaLinkPedido",
  fields: [
    {
      field: "NumAutorizacao",
      label: "NumAutorizacao",
      name: "PharmaLinkPedido_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Operadora",
      label: "Operadora",
      name: "Operadora",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdProjeto",
      label: "CdProjeto",
      name: "CdProjeto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Modalidade",
      label: "Modalidade",
      name: "Modalidade",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtRetorno",
      label: "DtRetorno",
      name: "DtRetorno",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "CdStatus",
      label: "CdStatus",
      name: "CdStatus",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NmPaciente",
      label: "NmPaciente",
      name: "NmPaciente",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdTerminal",
      label: "CdTerminal",
      name: "CdTerminal",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumeroCartao",
      label: "NumeroCartao",
      name: "NumeroCartao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "ExigeCRM",
      label: "ExigeCRM",
      name: "ExigeCRM",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumDoc",
      label: "NumDoc",
      name: "NumDoc",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumPDV",
      label: "NumPDV",
      name: "NumPDV",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumCOO",
      label: "NumCOO",
      name: "NumCOO",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
  ],
};
