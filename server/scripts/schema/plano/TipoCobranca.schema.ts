import { TTableDef } from "@/types/model";

export const TipoCobranca: TTableDef = {
  database: "plano",
  table: "TipoCobranca",
  fields: [
    {
      field: "FgCobranca",
      label: "FgCobranca",
      name: "TipoCobranca_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",

      allowNull: false,
    },
  ],
};
