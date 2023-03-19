import { TTableDef } from "../../../../types/model";

export const SubGrupoProdutos: TTableDef = {
  database: "plano",
  table: "SubGrupoProdutos",
  fields: [
    {
      field: "CdSubGrupo",
      label: "CdSubGrupo",
      name: "SubGrupoProdutos_id",
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
