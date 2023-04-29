import { TTableDef } from "@mono/types/model";

export const tOcorrenciaOrigem: TTableDef = {
  database: "oftalmo",
  table: "tOcorrenciaOrigem",
  fields: [
    {
      field: "kOrigem",
      label: "kOrigem",
      name: "tOcorrenciaOrigem_id",
      typeField: "string",
      size: 30,
      primaryKey: true,
      allowNull: false,
    },
  ],
};
