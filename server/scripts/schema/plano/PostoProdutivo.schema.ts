import { TTable } from "../../../../types";

export const PostoProdutivo: TTable = {
  database: "plano",
  table: "PostoProdutivo",
  fields: [
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
