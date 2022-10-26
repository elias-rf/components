import { TEntity } from "../../../../types";

export const AgendaHistorico: TEntity = {
  database: "plano",
  table: "AgendaHistorico",
  schema: [
    {
      field: "IdCompromisso",
      label: "IdCompromisso",
      name: "IdCompromisso",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Ocorrencia",
      label: "Ocorrencia",
      name: "Ocorrencia",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdResponsavel",
      label: "CdResponsavel",
      name: "CdResponsavel",
      type: "string",
      size: 10,
      allowNull: false,
    },
    {
      field: "DtOcorrencia",
      label: "DtOcorrencia",
      name: "DtOcorrencia",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "Historico",
      label: "Historico",
      name: "Historico",
      type: "string",
      size: 1024,
    },
    {
      field: "CdUsuario",
      label: "CdUsuario",
      name: "CdUsuario",
      type: "string",
      size: 10,
    },
  ],
};
