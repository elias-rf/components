import { TTableDef } from "@/types/model";

export const LocalEstoque: TTableDef = {
  database: "plano",
  table: "LocalEstoque",
  fields: [
    {
      field: "CdLocalEstoque",
      label: "CdLocalEstoque",
      name: "LocalEstoque_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmLocalEstoque",
      label: "NmLocalEstoque",
      name: "NmLocalEstoque",
      typeField: "string",

      allowNull: false,
    },
  ],
};
