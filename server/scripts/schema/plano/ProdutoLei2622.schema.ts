import { TEntity } from "../../../../types";

export const ProdutoLei2622: TEntity = {
  database: "plano",
  table: "ProdutoLei2622",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "ProdutoLei2622_id",
      type: "string",
      size: 18,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "UnidadeMedida",
      label: "UnidadeMedida",
      name: "UnidadeMedida",
      type: "string",
      size: 2,
      allowNull: false,
    },
    {
      field: "Operacao",
      label: "Operacao",
      name: "Operacao",
      type: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "Multiplicador",
      label: "Multiplicador",
      name: "Multiplicador",
      type: "int",
      size: 5,
      scale: 2,
      allowNull: false,
    },
  ],
};
