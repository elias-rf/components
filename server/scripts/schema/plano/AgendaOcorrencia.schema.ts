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
    },
    {
      field: "IdCompromisso",
      label: "IdCompromisso",
      name: "IdCompromisso",
      typeField: "int",

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
      field: "HrOcorrencia",
      label: "HrOcorrencia",
      name: "HrOcorrencia",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "DsOcorrencia",
      label: "DsOcorrencia",
      name: "DsOcorrencia",
      typeField: "string",
    },
  ],
};
