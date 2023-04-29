import { TTableDef } from "@mono/types/model";

export const ControleSerie: TTableDef = {
  database: "plano",
  table: "ControleSerie",
  fields: [
    {
      field: "AutoNumero",
      label: "AutoNumero",
      name: "AutoNumero",
      typeField: "float",
      size: 8,
      scale: 4,
    },
  ],
};
