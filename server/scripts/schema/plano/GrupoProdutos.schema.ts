import { TTableDef } from "@mono/types/model";

export const GrupoProdutos: TTableDef = {
  database: "plano",
  table: "GrupoProdutos",
  fields: [
    {
      field: "CdGrupo",
      label: "CdGrupo",
      name: "GrupoProdutos_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 25,
    },
    {
      field: "FgListaPreco",
      label: "FgListaPreco",
      name: "FgListaPreco",
      typeField: "string",
      size: 1,
    },
  ],
};
