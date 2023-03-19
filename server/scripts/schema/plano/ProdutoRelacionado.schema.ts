import { TTableDef } from "../../../../types/model";

export const ProdutoRelacionado: TTableDef = {
  database: "plano",
  table: "ProdutoRelacionado",
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
      field: "CdProdutoRelacionado",
      label: "CdProdutoRelacionado",
      name: "CdProdutoRelacionado",
      typeField: "string",
      size: 15,
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
