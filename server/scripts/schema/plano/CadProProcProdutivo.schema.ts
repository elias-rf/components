import { TTable } from "../../../../types/model";

export const CadProProcProdutivo: TTable = {
  database: "plano",
  table: "CadProProcProdutivo",
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
      field: "CdPostoProdutivo",
      label: "CdPostoProdutivo",
      name: "CdPostoProdutivo",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "Ordem",
      label: "Ordem",
      name: "Ordem",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "DescricaoOperacao",
      label: "DescricaoOperacao",
      name: "DescricaoOperacao",
      typeField: "string",
      size: 5120,
    },
    {
      field: "DescricaoFerramental",
      label: "DescricaoFerramental",
      name: "DescricaoFerramental",
      typeField: "string",
      size: 5120,
    },
  ],
};
