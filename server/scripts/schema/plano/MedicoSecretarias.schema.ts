import { TTable } from "../../../../types";

export const MedicoSecretarias: TTable = {
  database: "plano",
  table: "MedicoSecretarias",
  fields: [
    {
      field: "CRM",
      label: "CRM",
      name: "CRM",
      type: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "NmSecretaria",
      label: "NmSecretaria",
      name: "NmSecretaria",
      type: "string",
      size: 50,
      allowNull: false,
    },
    {
      field: "DtNascimento",
      label: "DtNascimento",
      name: "DtNascimento",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
