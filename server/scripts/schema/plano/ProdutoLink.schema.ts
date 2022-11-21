import { TTable } from "../../../../types";

export const ProdutoLink: TTable = {
  database: "plano",
  table: "ProdutoLink",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "ProdutoLink_id",
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
      size: 512,
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
      field: "ID",
      label: "ID",
      name: "ID",
      type: "int",
      size: 4,
    },
  ],
};
