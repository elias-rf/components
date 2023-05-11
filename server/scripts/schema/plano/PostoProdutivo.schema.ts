import { TTableDef } from "@/types/model";

export const PostoProdutivo: TTableDef = {
  database: "plano",
  table: "PostoProdutivo",
  fields: [
    {
      field: "CdPostoProdutivo",
      label: "CdPostoProdutivo",
      name: "PostoProdutivo_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DescPostoProdutivo",
      label: "DescPostoProdutivo",
      name: "DescPostoProdutivo",
      typeField: "string",

      allowNull: false,
    },
  ],
};
