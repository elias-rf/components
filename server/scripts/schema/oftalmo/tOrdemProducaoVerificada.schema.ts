import { TEntity } from "../../../../types";

export const tOrdemProducaoVerificada: TEntity = {
  database: "oftalmo",
  table: "tOrdemProducaoVerificada",
  schema: [
    {
      field: "kOP",
      label: "kOP",
      name: "tOrdemProducaoVerificada_id",
      type: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
  ],
};
