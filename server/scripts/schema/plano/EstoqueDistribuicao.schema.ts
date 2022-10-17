import { TEntity } from "../../../../types";

export const EstoqueDistribuicao: TEntity = {
  database: "plano",
  table: "EstoqueDistribuicao",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      type: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "CdLocalEstoque",
      label: "CdLocalEstoque",
      name: "CdLocalEstoque",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "EstAtual",
      label: "EstAtual",
      name: "EstAtual",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};
