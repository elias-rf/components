import { TTableDef } from "@/types/model";

export const tbl_Produto_Componente: TTableDef = {
  database: "oftalmo",
  table: "tbl_Produto_Componente",
  fields: [
    {
      field: "fkProduto",
      label: "fkProduto",
      name: "fkProduto",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "fkProdutoComponente",
      label: "fkProdutoComponente",
      name: "fkProdutoComponente",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Qtd",
      label: "Qtd",
      name: "Qtd",
      typeField: "float",
      size: 8,
      allowNull: false,
      defaultValue: "1",
    },
  ],
};
