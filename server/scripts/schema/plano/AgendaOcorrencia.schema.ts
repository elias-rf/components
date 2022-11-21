import { TTable } from "../../../../types";

export const AgendaOcorrencia: TTable = {
  database: "plano",
  table: "AgendaOcorrencia",
  fields: [
    {
      field: "CdUsuario",
      label: "CdUsuario",
      name: "CdUsuario",
      type: "string",
      size: 10,
    },
    {
      field: "IdCompromisso",
      label: "IdCompromisso",
      name: "IdCompromisso",
      type: "int",
      size: 4,
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
      field: "HrOcorrencia",
      label: "HrOcorrencia",
      name: "HrOcorrencia",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "DsOcorrencia",
      label: "DsOcorrencia",
      name: "DsOcorrencia",
      type: "string",
      size: 1024,
    },
  ],
};
