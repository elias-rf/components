import { TTableDef } from "@/types/model";

export const AgendaOcorrencia: TTableDef = {
  database: "plano",
  table: "AgendaOcorrencia",
  fields: [
    {
      field: "CdUsuario",
      label: "CdUsuario",
      name: "CdUsuario",
      typeField: "string",
      size: 10,
    },
    {
      field: "IdCompromisso",
      label: "IdCompromisso",
      name: "IdCompromisso",
      typeField: "int",
      size: 4,
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
      field: "HrOcorrencia",
      label: "HrOcorrencia",
      name: "HrOcorrencia",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "DsOcorrencia",
      label: "DsOcorrencia",
      name: "DsOcorrencia",
      typeField: "string",
      size: 1024,
    },
  ],
};
