import { TTableDef } from "@/types/model";

export const EstoqueDistribuicao: TTableDef = {
  database: "plano",
  table: "EstoqueDistribuicao",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
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
      field: "CdLocalEstoque",
      label: "CdLocalEstoque",
      name: "CdLocalEstoque",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "EstAtual",
      label: "EstAtual",
      name: "EstAtual",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
  ],
};
