import { TTableDef } from "@/types/model";

export const TextoPreventiva: TTableDef = {
  database: "plano",
  table: "TextoPreventiva",
  fields: [
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "TextoPreventiva_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Texto",
      label: "Texto",
      name: "Texto",
      typeField: "string",
    },
  ],
};
