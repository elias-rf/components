import { TTableDef } from "@/types/model";

export const MedicoSecretarias: TTableDef = {
  database: "plano",
  table: "MedicoSecretarias",
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
      field: "DtNascimento",
      label: "DtNascimento",
      name: "DtNascimento",
      typeField: "datetime",

      scale: 3,
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
  ],
};
