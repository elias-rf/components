import { TTableDef } from "@mono/types/model";

export const ProdutosRemessa: TTableDef = {
  database: "plano",
  table: "ProdutosRemessa",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "IdLayOut",
      label: "IdLayOut",
      name: "IdLayOut",
      typeField: "string",
      size: 124,
      allowNull: false,
    },
    {
      field: "FgRemessa",
      label: "FgRemessa",
      name: "FgRemessa",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
