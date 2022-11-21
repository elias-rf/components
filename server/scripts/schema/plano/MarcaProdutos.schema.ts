import { TTable } from "../../../../types";

export const MarcaProdutos: TTable = {
  database: "plano",
  table: "MarcaProdutos",
  fields: [
    {
      field: "CdMarca",
      label: "CdMarca",
      name: "MarcaProdutos_id",
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
