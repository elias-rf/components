import { TTable } from "../../../../types/model";

export const AgendaHistorico: TTable = {
  database: "plano",
  table: "AgendaHistorico",
  fields: [
    {
      field: "IdCompromisso",
      label: "IdCompromisso",
      name: "IdCompromisso",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Ocorrencia",
      label: "Ocorrencia",
      name: "Ocorrencia",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdResponsavel",
      label: "CdResponsavel",
      name: "CdResponsavel",
      typeField: "string",
      size: 10,
      allowNull: false,
    },
    {
      field: "DtOcorrencia",
      label: "DtOcorrencia",
      name: "DtOcorrencia",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "Historico",
      label: "Historico",
      name: "Historico",
      typeField: "string",
      size: 1024,
    },
    {
      field: "CdUsuario",
      label: "CdUsuario",
      name: "CdUsuario",
      typeField: "string",
      size: 10,
    },
  ],
};
