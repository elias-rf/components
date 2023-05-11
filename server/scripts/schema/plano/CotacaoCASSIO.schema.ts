import { TTableDef } from "@/types/model";

export const CotacaoCASSIO: TTableDef = {
  database: "plano",
  table: "CotacaoCASSIO",
  fields: [
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "CdFornecedor",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlTabela",
      label: "VlTabela",
      name: "VlTabela",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlLiquido",
      label: "VlLiquido",
      name: "VlLiquido",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
  ],
};
