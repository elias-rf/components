import { TEntity } from "../../../../types";

export const GrupoProdutos: TEntity = {
  database: "plano",
  table: "GrupoProdutos",
  schema: [
    {
      field: "CdGrupo",
      label: "CdGrupo",
      name: "GrupoProdutos_id",
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
      size: 25,
    },
    {
      field: "FgListaPreco",
      label: "FgListaPreco",
      name: "FgListaPreco",
      type: "string",
      size: 1,
    },
  ],
};
