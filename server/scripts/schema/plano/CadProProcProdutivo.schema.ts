import { TTableDef } from "@/types/model";

export const CadProProcProdutivo: TTableDef = {
  database: "plano",
  table: "CadProProcProdutivo",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdPostoProdutivo",
      label: "CdPostoProdutivo",
      name: "CdPostoProdutivo",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Ordem",
      label: "Ordem",
      name: "Ordem",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DescricaoOperacao",
      label: "DescricaoOperacao",
      name: "DescricaoOperacao",
      typeField: "string",
    },
    {
      field: "DescricaoFerramental",
      label: "DescricaoFerramental",
      name: "DescricaoFerramental",
      typeField: "string",
    },
  ],
};
