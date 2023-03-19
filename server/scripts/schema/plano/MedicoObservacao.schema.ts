import { TTableDef } from "../../../../types/model";

export const MedicoObservacao: TTableDef = {
  database: "plano",
  table: "MedicoObservacao",
  fields: [
    {
      field: "CRM",
      label: "CRM",
      name: "MedicoObservacao_id",
      typeField: "string",
      size: 16,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      typeField: "string",
      size: 1024,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
  ],
};
