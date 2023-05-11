import { TTableDef } from "@/types/model";

export const SubGrupoProdutos: TTableDef = {
  database: "plano",
  table: "SubGrupoProdutos",
  fields: [
    {
      field: "CdSubGrupo",
      label: "CdSubGrupo",
      name: "SubGrupoProdutos_id",
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
