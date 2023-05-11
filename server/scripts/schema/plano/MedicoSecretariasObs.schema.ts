import { TTableDef } from "@/types/model";

export const MedicoSecretariasObs: TTableDef = {
  database: "plano",
  table: "MedicoSecretariasObs",
  fields: [
    {
      field: "CRM",
      label: "CRM",
      name: "CRM",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NmSecretaria",
      label: "NmSecretaria",
      name: "NmSecretaria",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      typeField: "string",
    },
  ],
};
