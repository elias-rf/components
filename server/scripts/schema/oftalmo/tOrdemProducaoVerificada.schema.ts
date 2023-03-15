import { TTable } from "../../../../types/model";

export const tOrdemProducaoVerificada: TTable = {
  database: "oftalmo",
  table: "tOrdemProducaoVerificada",
  fields: [
    {
      field: "kOP",
      label: "kOP",
      name: "tOrdemProducaoVerificada_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
  ],
};
