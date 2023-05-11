import { TTableDef } from "@/types/model";

export const MestreMapaEntrega: TTableDef = {
  database: "plano",
  table: "MestreMapaEntrega",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumMapa",
      label: "NumMapa",
      name: "NumMapa",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DtEmissao",
      label: "DtEmissao",
      name: "DtEmissao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "Horario",
      label: "Horario",
      name: "Horario",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "CdTransportador",
      label: "CdTransportador",
      name: "CdTransportador",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Observacoes",
      label: "Observacoes",
      name: "Observacoes",
      typeField: "string",
    },
    {
      field: "FgSituacao",
      label: "FgSituacao",
      name: "FgSituacao",
      typeField: "string",
    },
    {
      field: "DtAcerto",
      label: "DtAcerto",
      name: "DtAcerto",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "CdUsuarioInc",
      label: "CdUsuarioInc",
      name: "CdUsuarioInc",
      typeField: "string",
    },
    {
      field: "CdUsuarioAce",
      label: "CdUsuarioAce",
      name: "CdUsuarioAce",
      typeField: "string",
    },
    {
      field: "CdPostoAtendimento",
      label: "CdPostoAtendimento",
      name: "CdPostoAtendimento",
      typeField: "int",
    },
    {
      field: "FgConferencia",
      label: "FgConferencia",
      name: "FgConferencia",
      typeField: "string",
    },
  ],
};
