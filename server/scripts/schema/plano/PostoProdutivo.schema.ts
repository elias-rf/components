import { TTable } from "../../../../types/model";

export const PostoProdutivo: TTable = {
  database: "plano",
  table: "PostoProdutivo",
  fields: [
    {
      field: "CdPostoProdutivo",
      label: "CdPostoProdutivo",
      name: "PostoProdutivo_id",
      typeField: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DescPostoProdutivo",
      label: "DescPostoProdutivo",
      name: "DescPostoProdutivo",
      typeField: "string",
      size: 40,
      allowNull: false,
    },
  ],
};
