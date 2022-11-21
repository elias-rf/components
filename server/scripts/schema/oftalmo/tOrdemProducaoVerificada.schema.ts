import { TTable } from "../../../../types";

export const tOrdemProducaoVerificada: TTable = {
  database: "oftalmo",
  table: "tOrdemProducaoVerificada",
  fields: [
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
