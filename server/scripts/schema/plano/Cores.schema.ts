import { TTableDef } from "@/types/model";

export const Cores: TTableDef = {
  database: "plano",
  table: "Cores",
  fields: [
    {
      field: "CdCor",
      label: "CdCor",
      name: "Cores_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 20,
    },
  ],
};
