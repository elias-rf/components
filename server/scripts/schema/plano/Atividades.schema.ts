import { TTable } from "../../../../types/model";

export const Atividades: TTable = {
  database: "plano",
  table: "Atividades",
  fields: [
    {
      field: "CdAtividade",
      label: "CdAtividade",
      name: "Atividades_id",
      typeField: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmAtividade",
      label: "NmAtividade",
      name: "NmAtividade",
      typeField: "string",
      size: 50,
      allowNull: false,
    },
  ],
};
