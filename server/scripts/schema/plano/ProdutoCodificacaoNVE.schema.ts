import { TTableDef } from "@/types/model";

export const ProdutoCodificacaoNVE: TTableDef = {
  database: "plano",
  table: "ProdutoCodificacaoNVE",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "ProdutoCodificacaoNVE_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Link",
      label: "Link",
      name: "Link",
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
    {
      field: "CodificacaoNVE",
      label: "CodificacaoNVE",
      name: "CodificacaoNVE",
      typeField: "string",

      allowNull: false,
    },
  ],
};
