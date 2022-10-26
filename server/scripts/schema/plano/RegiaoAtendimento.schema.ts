import { TEntity } from "../../../../types";

export const RegiaoAtendimento: TEntity = {
  database: "plano",
  table: "RegiaoAtendimento",
  schema: [
    {
      field: "Regiao",
      label: "Regiao",
      name: "RegiaoAtendimento_id",
      type: "string",
      size: 10,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      type: "string",
      size: 20,
    },
  ],
};
