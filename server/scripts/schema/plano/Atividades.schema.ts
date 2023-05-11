import { TTableDef } from "@/types/model";

export const Atividades: TTableDef = {
  database: "plano",
  table: "Atividades",
  fields: [
    {
      field: "CdAtividade",
      label: "CdAtividade",
      name: "Atividades_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmAtividade",
      label: "NmAtividade",
      name: "NmAtividade",
      typeField: "string",

      allowNull: false,
    },
  ],
};
