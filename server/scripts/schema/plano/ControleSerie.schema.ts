import { TTableDef } from "@/types/model";

export const ControleSerie: TTableDef = {
  database: "plano",
  table: "ControleSerie",
  fields: [
    {
      field: "AutoNumero",
      label: "AutoNumero",
      name: "AutoNumero",
      typeField: "float",

      scale: 4,
    },
  ],
};
