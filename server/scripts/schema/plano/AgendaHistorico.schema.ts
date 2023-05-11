import { TTableDef } from "@/types/model";

export const AgendaHistorico: TTableDef = {
  database: "plano",
  table: "AgendaHistorico",
  fields: [
    {
      field: "IdCompromisso",
      label: "IdCompromisso",
      name: "IdCompromisso",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Ocorrencia",
      label: "Ocorrencia",
      name: "Ocorrencia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdResponsavel",
      label: "CdResponsavel",
      name: "CdResponsavel",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtOcorrencia",
      label: "DtOcorrencia",
      name: "DtOcorrencia",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "Historico",
      label: "Historico",
      name: "Historico",
      typeField: "string",
    },
    {
      field: "CdUsuario",
      label: "CdUsuario",
      name: "CdUsuario",
      typeField: "string",
    },
  ],
};
