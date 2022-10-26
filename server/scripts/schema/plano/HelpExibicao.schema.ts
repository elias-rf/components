import { TEntity } from "../../../../types";

export const HelpExibicao: TEntity = {
  database: "plano",
  table: "HelpExibicao",
  schema: [
    {
      field: "IdFuncao",
      label: "IdFuncao",
      name: "HelpExibicao_id",
      type: "string",
      size: 64,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      type: "string",
      size: 128,
      allowNull: false,
    },
    {
      field: "Link",
      label: "Link",
      name: "Link",
      type: "string",
      size: 512,
      allowNull: false,
    },
  ],
};
