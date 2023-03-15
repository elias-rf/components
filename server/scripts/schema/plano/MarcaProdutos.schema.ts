import { TTable } from "../../../../types/model";

export const MarcaProdutos: TTable = {
  database: "plano",
  table: "MarcaProdutos",
  fields: [
    {
      field: "CdMarca",
      label: "CdMarca",
      name: "MarcaProdutos_id",
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
