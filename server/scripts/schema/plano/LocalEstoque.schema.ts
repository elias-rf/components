import { TTable } from "../../../../types";

export const LocalEstoque: TTable = {
  database: "plano",
  table: "LocalEstoque",
  fields: [
    {
      field: "CdLocalEstoque",
      label: "CdLocalEstoque",
      name: "LocalEstoque_id",
      type: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmLocalEstoque",
      label: "NmLocalEstoque",
      name: "NmLocalEstoque",
      type: "string",
      size: 40,
      allowNull: false,
    },
  ],
};
