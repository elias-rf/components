import { TTableDef } from "@/types/model";

export const ProdutoEscalaNaoRelevante: TTableDef = {
  database: "plano",
  table: "ProdutoEscalaNaoRelevante",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "ProdutoEscalaNaoRelevante_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "CNPJFabricante",
      label: "CNPJFabricante",
      name: "CNPJFabricante",
      typeField: "int",

      allowNull: false,
    },
  ],
};
