import { TEntity } from "../../../../types";

export const MedicoObservacao: TEntity = {
  database: "plano",
  table: "MedicoObservacao",
  fields: [
    {
      field: "CRM",
      label: "CRM",
      name: "MedicoObservacao_id",
      type: "string",
      size: 16,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      type: "string",
      size: 1024,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      type: "datetime",
      size: 8,
      scale: 3,
    },
  ],
};
