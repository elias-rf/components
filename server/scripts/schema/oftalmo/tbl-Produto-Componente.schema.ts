import { TTable } from "../../../../types";

export const tbl_Produto_Componente: TTable = {
  database: "oftalmo",
  table: "tbl_Produto_Componente",
  fields: [
    {
      field: "fkProduto",
      label: "fkProduto",
      name: "fkProduto",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "fkProdutoComponente",
      label: "fkProdutoComponente",
      name: "fkProdutoComponente",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Qtd",
      label: "Qtd",
      name: "Qtd",
      type: "float",
      size: 8,
      allowNull: false,
      defaultValue: "1",
    },
  ],
};
