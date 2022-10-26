import { TEntity } from "../../../../types";

export const Atividades: TEntity = {
  database: "plano",
  table: "Atividades",
  schema: [
    {
      field: "CdAtividade",
      label: "CdAtividade",
      name: "Atividades_id",
      type: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmAtividade",
      label: "NmAtividade",
      name: "NmAtividade",
      type: "string",
      size: 50,
      allowNull: false,
    },
  ],
};
