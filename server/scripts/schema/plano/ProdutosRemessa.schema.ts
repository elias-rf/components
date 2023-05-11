import { TTableDef } from "@/types/model";

export const ProdutosRemessa: TTableDef = {
  database: "plano",
  table: "ProdutosRemessa",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "IdLayOut",
      label: "IdLayOut",
      name: "IdLayOut",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgRemessa",
      label: "FgRemessa",
      name: "FgRemessa",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
  ],
};
