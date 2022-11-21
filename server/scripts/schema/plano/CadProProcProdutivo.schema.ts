import { TTable } from "../../../../types";

export const CadProProcProdutivo: TTable = {
  database: "plano",
  table: "CadProProcProdutivo",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      type: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "CdPostoProdutivo",
      label: "CdPostoProdutivo",
      name: "CdPostoProdutivo",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "Ordem",
      label: "Ordem",
      name: "Ordem",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "DescricaoOperacao",
      label: "DescricaoOperacao",
      name: "DescricaoOperacao",
      type: "string",
      size: 5120,
    },
    {
      field: "DescricaoFerramental",
      label: "DescricaoFerramental",
      name: "DescricaoFerramental",
      type: "string",
      size: 5120,
    },
  ],
};
