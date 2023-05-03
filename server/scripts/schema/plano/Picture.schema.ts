import { TTableDef } from "@/types/model";

export const Picture: TTableDef = {
  database: "plano",
  table: "Picture",
  fields: [
    {
      field: "Numero",
      label: "Numero",
      name: "Picture_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Picture",
      label: "Picture",
      name: "Picture",
      typeField: "string",
      size: 255,
    },
    {
      field: "Tempo",
      label: "Tempo",
      name: "Tempo",
      typeField: "int",
      size: 4,
    },
  ],
};
