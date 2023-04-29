import { TTableDef } from "@mono/types/model";

export const ProdutoLink: TTableDef = {
  database: "plano",
  table: "ProdutoLink",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "ProdutoLink_id",
      typeField: "string",
      size: 16,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Link",
      label: "Link",
      name: "Link",
      typeField: "string",
      size: 512,
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
    {
      field: "ID",
      label: "ID",
      name: "ID",
      typeField: "int",
      size: 4,
    },
  ],
};
