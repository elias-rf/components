import { TTable } from "../../../../types/model";

export const ProdutoCodificacaoNVE: TTable = {
  database: "plano",
  table: "ProdutoCodificacaoNVE",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "ProdutoCodificacaoNVE_id",
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
      size: 256,
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
      field: "CodificacaoNVE",
      label: "CodificacaoNVE",
      name: "CodificacaoNVE",
      typeField: "string",
      size: 64,
      allowNull: false,
    },
  ],
};
