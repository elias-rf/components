import { TTable } from "../../../../types/model";

export const tOcorrenciaTipo: TTable = {
  database: "oftalmo",
  table: "tOcorrenciaTipo",
  fields: [
    {
      field: "kTipo",
      label: "kTipo",
      name: "tOcorrenciaTipo_id",
      typeField: "string",
      size: 30,
      primaryKey: true,
      allowNull: false,
    },
  ],
};
