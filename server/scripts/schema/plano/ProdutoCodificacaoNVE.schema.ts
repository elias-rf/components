import { TTable } from "../../../../types";

export const ProdutoCodificacaoNVE: TTable = {
  database: "plano",
  table: "ProdutoCodificacaoNVE",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "ProdutoCodificacaoNVE_id",
      type: "string",
      size: 16,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Link",
      label: "Link",
      name: "Link",
      type: "string",
      size: 256,
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
    {
      field: "CodificacaoNVE",
      label: "CodificacaoNVE",
      name: "CodificacaoNVE",
      type: "string",
      size: 64,
      allowNull: false,
    },
  ],
};
