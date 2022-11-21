import { TTable } from "../../../../types";

export const ProdutoRelacionado: TTable = {
  database: "plano",
  table: "ProdutoRelacionado",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      type: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "CdProdutoRelacionado",
      label: "CdProdutoRelacionado",
      name: "CdProdutoRelacionado",
      type: "string",
      size: 15,
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
