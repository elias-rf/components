import { TTable } from "../../../../types/model";

export const MestreMapaEntrega: TTable = {
  database: "plano",
  table: "MestreMapaEntrega",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NumMapa",
      label: "NumMapa",
      name: "NumMapa",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "DtEmissao",
      label: "DtEmissao",
      name: "DtEmissao",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "Horario",
      label: "Horario",
      name: "Horario",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "CdTransportador",
      label: "CdTransportador",
      name: "CdTransportador",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Observacoes",
      label: "Observacoes",
      name: "Observacoes",
      typeField: "string",
      size: 1024,
    },
    {
      field: "FgSituacao",
      label: "FgSituacao",
      name: "FgSituacao",
      typeField: "string",
      size: 1,
    },
    {
      field: "DtAcerto",
      label: "DtAcerto",
      name: "DtAcerto",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "CdUsuarioInc",
      label: "CdUsuarioInc",
      name: "CdUsuarioInc",
      typeField: "string",
      size: 10,
    },
    {
      field: "CdUsuarioAce",
      label: "CdUsuarioAce",
      name: "CdUsuarioAce",
      typeField: "string",
      size: 10,
    },
    {
      field: "CdPostoAtendimento",
      label: "CdPostoAtendimento",
      name: "CdPostoAtendimento",
      typeField: "int",
      size: 4,
    },
    {
      field: "FgConferencia",
      label: "FgConferencia",
      name: "FgConferencia",
      typeField: "string",
      size: 1,
    },
  ],
};
