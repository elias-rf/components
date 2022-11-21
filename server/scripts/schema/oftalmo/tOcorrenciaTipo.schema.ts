import { TTable } from "../../../../types";

export const tOcorrenciaTipo: TTable = {
  database: "oftalmo",
  table: "tOcorrenciaTipo",
  fields: [
    {
      field: "kTipo",
      label: "kTipo",
      name: "tOcorrenciaTipo_id",
      type: "string",
      size: 30,
      primaryKey: true,
      allowNull: false,
    },
  ],
};
