import { TEntity } from "../../../../types";

export const CorCapsula: TEntity = {
  database: "plano",
  table: "CorCapsula",
  fields: [
    {
      field: "CdCorCapsula",
      label: "CdCorCapsula",
      name: "CorCapsula_id",
      type: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmCorCapsula",
      label: "NmCorCapsula",
      name: "NmCorCapsula",
      type: "string",
      size: 50,
      allowNull: false,
    },
  ],
};
