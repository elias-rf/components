import { TTableDef } from "@/types/model";

export const MedicoObservacao: TTableDef = {
  database: "plano",
  table: "MedicoObservacao",
  fields: [
    {
      field: "CRM",
      label: "CRM",
      name: "MedicoObservacao_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      typeField: "string",
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
    },
  ],
};
