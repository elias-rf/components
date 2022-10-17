import { TEntity } from "../../../../types";

export const MedicoSecretariasObs: TEntity = {
  database: "plano",
  table: "MedicoSecretariasObs",
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
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      type: "string",
      size: 1024,
    },
  ],
};
