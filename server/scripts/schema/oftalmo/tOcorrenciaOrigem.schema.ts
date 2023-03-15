import { TTable } from "../../../../types/model";

export const tOcorrenciaOrigem: TTable = {
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
