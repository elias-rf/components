import { TTableDef } from "@mono/types/model";

export const LocalEstoque: TTableDef = {
  database: "plano",
  table: "LocalEstoque",
  fields: [
    {
      field: "CdLocalEstoque",
      label: "CdLocalEstoque",
      name: "LocalEstoque_id",
      typeField: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmLocalEstoque",
      label: "NmLocalEstoque",
      name: "NmLocalEstoque",
      typeField: "string",
      size: 40,
      allowNull: false,
    },
  ],
};
