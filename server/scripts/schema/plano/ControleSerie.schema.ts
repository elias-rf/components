import { TEntity } from "../../../../types";

export const ControleSerie: TEntity = {
  database: "plano",
  table: "ControleSerie",
  fields: [
    {
      field: "AutoNumero",
      label: "AutoNumero",
      name: "AutoNumero",
      type: "float",
      size: 8,
      scale: 4,
    },
  ],
};
