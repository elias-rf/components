import { TTableDef } from "@/types/model";

export const tOcorrenciaOrigem: TTableDef = {
  database: "oftalmo",
  table: "tOcorrenciaOrigem",
  fields: [
    {
      field: "kOrigem",
      label: "kOrigem",
      name: "tOcorrenciaOrigem_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
  ],
};
