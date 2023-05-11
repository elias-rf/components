import { TTableDef } from "@/types/model";

export const ProdutoLink: TTableDef = {
  database: "plano",
  table: "ProdutoLink",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "ProdutoLink_id",
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
      field: "ID",
      label: "ID",
      name: "ID",
      typeField: "int",
    },
  ],
};
