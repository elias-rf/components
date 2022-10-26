import { TEntity } from "../../../../types";

export const ControleSerie: TEntity = {
  database: "plano",
  table: "ControleSerie",
  schema: [
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
