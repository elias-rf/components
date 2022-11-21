import { TTable } from "../../../../types";

export const Cores: TTable = {
  database: "plano",
  table: "Cores",
  fields: [
    {
      field: "CdCor",
      label: "CdCor",
      name: "Cores_id",
      type: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      type: "string",
      size: 20,
    },
  ],
};
