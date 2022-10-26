import { TEntity } from "../../../../types";

export const ProdutosRemessa: TEntity = {
  database: "plano",
  table: "ProdutosRemessa",
  schema: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      type: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "IdLayOut",
      label: "IdLayOut",
      name: "IdLayOut",
      type: "string",
      size: 124,
      allowNull: false,
    },
    {
      field: "FgRemessa",
      label: "FgRemessa",
      name: "FgRemessa",
      type: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
