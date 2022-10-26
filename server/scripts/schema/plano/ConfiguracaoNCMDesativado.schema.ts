import { TEntity } from "../../../../types";

export const ConfiguracaoNCMDesativado: TEntity = {
  database: "plano",
  table: "ConfiguracaoNCMDesativado",
  schema: [
    {
      field: "NMC",
      label: "NMC",
      name: "ConfiguracaoNCMDesativado_id",
      type: "string",
      size: 8,
      primaryKey: true,
      allowNull: false,
    },
  ],
};
