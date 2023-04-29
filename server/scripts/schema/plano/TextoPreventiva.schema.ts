import { TTableDef } from "@mono/types/model";

export const TextoPreventiva: TTableDef = {
  database: "plano",
  table: "TextoPreventiva",
  fields: [
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "TextoPreventiva_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Texto",
      label: "Texto",
      name: "Texto",
      typeField: "string",
      size: 100,
    },
  ],
};
