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
      size: 16,
      allowNull: false,
    },
    {
      field: "NmSecretaria",
      label: "NmSecretaria",
      name: "NmSecretaria",
      typeField: "string",
      size: 50,
      allowNull: false,
    },
    {
      field: "DtNascimento",
      label: "DtNascimento",
      name: "DtNascimento",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
