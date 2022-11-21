import { TTable } from "../../../../types";

export const tOcorrenciaOrigem: TTable = {
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
