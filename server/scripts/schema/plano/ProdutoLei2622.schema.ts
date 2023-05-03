import { TTableDef } from "@/types/model";

export const ProdutoLei2622: TTableDef = {
  database: "plano",
  table: "ProdutoLei2622",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "ProdutoLei2622_id",
      typeField: "string",
      size: 18,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "UnidadeMedida",
      label: "UnidadeMedida",
      name: "UnidadeMedida",
      typeField: "string",
      size: 2,
      allowNull: false,
    },
    {
      field: "Operacao",
      label: "Operacao",
      name: "Operacao",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "Multiplicador",
      label: "Multiplicador",
      name: "Multiplicador",
      typeField: "int",
      size: 5,
      scale: 2,
      allowNull: false,
    },
  ],
};
