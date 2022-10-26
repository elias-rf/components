import { TEntity } from "../../../../types";

export const tCorrecaoNaoConformidade: TEntity = {
  database: "oftalmo",
  table: "tCorrecaoNaoConformidade",
  schema: [
    {
      field: "kCorrecao",
      label: "kCorrecao",
      name: "tCorrecaoNaoConformidade_id",
      type: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Correcao",
      label: "Correcao",
      name: "Correcao",
      type: "string",
      size: 30,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      type: "string",
      size: 200,
    },
  ],
};
