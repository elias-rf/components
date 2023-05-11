import { TTableDef } from "@/types/model";

export const GrupoProdutos: TTableDef = {
  database: "plano",
  table: "GrupoProdutos",
  fields: [
    {
      field: "CdGrupo",
      label: "CdGrupo",
      name: "GrupoProdutos_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
    },
    {
      field: "FgListaPreco",
      label: "FgListaPreco",
      name: "FgListaPreco",
      typeField: "string",
    },
  ],
};
