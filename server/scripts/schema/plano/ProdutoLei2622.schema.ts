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

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "UnidadeMedida",
      label: "UnidadeMedida",
      name: "UnidadeMedida",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Operacao",
      label: "Operacao",
      name: "Operacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Multiplicador",
      label: "Multiplicador",
      name: "Multiplicador",
      typeField: "int",

      scale: 2,
      allowNull: false,
    },
  ],
};
