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

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Picture",
      label: "Picture",
      name: "Picture",
      typeField: "string",
    },
    {
      field: "Tempo",
      label: "Tempo",
      name: "Tempo",
      typeField: "int",
    },
  ],
};
