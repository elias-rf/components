import { TTableDef } from "@/types/model";

export const MarcaProdutos: TTableDef = {
  database: "plano",
  table: "MarcaProdutos",
  fields: [
    {
      field: "CdMarca",
      label: "CdMarca",
      name: "MarcaProdutos_id",
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
