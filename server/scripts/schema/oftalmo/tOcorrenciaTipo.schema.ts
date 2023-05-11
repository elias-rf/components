import { TTableDef } from "@/types/model";

export const tOcorrenciaTipo: TTableDef = {
  database: "oftalmo",
  table: "tOcorrenciaTipo",
  fields: [
    {
      field: "kTipo",
      label: "kTipo",
      name: "tOcorrenciaTipo_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
  ],
};
