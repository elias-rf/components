import { TEntity } from "../../../../types";

export const tNovoNome: TEntity = {
  database: "oftalmo",
  table: "tNovoNome",
  schema: [
    {
      field: "NomeProdutoItem",
      label: "NomeProdutoItem",
      name: "tNovoNome_id",
      type: "string",
      size: 30,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NovoNome",
      label: "NovoNome",
      name: "NovoNome",
      type: "string",
      size: 30,
    },
  ],
};
