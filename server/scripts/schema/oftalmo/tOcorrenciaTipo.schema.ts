import { TEntity } from "../../../../types";

export const tOcorrenciaTipo: TEntity = {
  database: "oftalmo",
  table: "tOcorrenciaTipo",
  schema: [
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
