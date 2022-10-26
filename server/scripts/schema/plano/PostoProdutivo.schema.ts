import { TEntity } from "../../../../types";

export const PostoProdutivo: TEntity = {
  database: "plano",
  table: "PostoProdutivo",
  schema: [
    {
      field: "CdPostoProdutivo",
      label: "CdPostoProdutivo",
      name: "PostoProdutivo_id",
      type: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DescPostoProdutivo",
      label: "DescPostoProdutivo",
      name: "DescPostoProdutivo",
      type: "string",
      size: 40,
      allowNull: false,
    },
  ],
};
