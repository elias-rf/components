import { TEntity } from "../../../../types";

export const Tamanhos: TEntity = {
  database: "plano",
  table: "Tamanhos",
  schema: [
    {
      field: "CdTamanho",
      label: "CdTamanho",
      name: "Tamanhos_id",
      type: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      type: "string",
      size: 20,
    },
  ],
};