import { TTableDef } from "@mono/types/model";

export const TipoCobranca: TTableDef = {
  database: "plano",
  table: "TipoCobranca",
  fields: [
    {
      field: "FgCobranca",
      label: "FgCobranca",
      name: "TipoCobranca_id",
      typeField: "string",
      size: 1,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 20,
      allowNull: false,
    },
  ],
};
