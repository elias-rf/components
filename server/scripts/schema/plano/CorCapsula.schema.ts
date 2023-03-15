import { TTable } from "../../../../types/model";

export const CorCapsula: TTable = {
  database: "plano",
  table: "CorCapsula",
  fields: [
    {
      field: "CdCorCapsula",
      label: "CdCorCapsula",
      name: "CorCapsula_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmCorCapsula",
      label: "NmCorCapsula",
      name: "NmCorCapsula",
      typeField: "string",
      size: 50,
      allowNull: false,
    },
  ],
};
