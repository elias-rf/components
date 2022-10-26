import { TEntity } from "../../../../types";

export const ProdutoEquivalente: TEntity = {
  database: "plano",
  table: "ProdutoEquivalente",
  schema: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      type: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "CdProdutoEquivalente",
      label: "CdProdutoEquivalente",
      name: "CdProdutoEquivalente",
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
