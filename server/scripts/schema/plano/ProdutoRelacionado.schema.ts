import { TTableDef } from "@/types/model";

export const ProdutoRelacionado: TTableDef = {
  database: "plano",
  table: "ProdutoRelacionado",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdProdutoRelacionado",
      label: "CdProdutoRelacionado",
      name: "CdProdutoRelacionado",
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
