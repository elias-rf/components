import { TTable } from "../../../../types";

export const ConfigBristol: TTable = {
  database: "plano",
  table: "ConfigBristol",
  fields: [
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "ConfigBristol_id",
      type: "float",
      size: 8,
      scale: 4,
      primaryKey: true,
      allowNull: false,
    },
  ],
};
