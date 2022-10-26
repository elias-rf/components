import { TEntity } from "../../../../types";

export const PostoAtendimento: TEntity = {
  database: "plano",
  table: "PostoAtendimento",
  schema: [
    {
      field: "Codigo",
      label: "Codigo",
      name: "PostoAtendimento_id",
      type: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      type: "string",
      size: 50,
    },
  ],
};
