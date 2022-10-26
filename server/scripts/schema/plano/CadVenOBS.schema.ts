import { TEntity } from "../../../../types";

export const CadVenOBS: TEntity = {
  database: "plano",
  table: "CadVenOBS",
  schema: [
    {
      field: "CdVendedor",
      label: "CdVendedor",
      name: "CadVenOBS_id",
      type: "float",
      size: 8,
      scale: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      type: "string",
      size: 1024,
      allowNull: false,
    },
  ],
};
