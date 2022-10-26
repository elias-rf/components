import { TEntity } from "../../../../types";

export const ConfigBristol: TEntity = {
  database: "plano",
  table: "ConfigBristol",
  schema: [
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
