import { TTableDef } from "../../../../types/model";

export const tOrdemProducaoVerificada: TTableDef = {
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
