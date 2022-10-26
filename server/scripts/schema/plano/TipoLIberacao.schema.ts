import { TEntity } from "../../../../types";

export const TipoLIberacao: TEntity = {
  database: "plano",
  table: "TipoLIberacao",
  schema: [
    {
      field: "CdTipoLiberacao",
      label: "CdTipoLiberacao",
      name: "TipoLIberacao_id",
      type: "int",
      size: 9,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      type: "string",
      size: 32,
      allowNull: false,
    },
  ],
};