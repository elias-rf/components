import { TEntity } from "../../../../types";

export const tOcorrenciaOrigem: TEntity = {
  database: "oftalmo",
  table: "tOcorrenciaOrigem",
  fields: [
    {
      field: "kOrigem",
      label: "kOrigem",
      name: "tOcorrenciaOrigem_id",
      type: "string",
      size: 30,
      primaryKey: true,
      allowNull: false,
    },
  ],
};
