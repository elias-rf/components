import { TEntity } from "../../../../types";

export const TipoCobranca: TEntity = {
  database: "plano",
  table: "TipoCobranca",
  schema: [
    {
      field: "FgCobranca",
      label: "FgCobranca",
      name: "TipoCobranca_id",
      type: "string",
      size: 1,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      type: "string",
      size: 20,
      allowNull: false,
    },
  ],
};
