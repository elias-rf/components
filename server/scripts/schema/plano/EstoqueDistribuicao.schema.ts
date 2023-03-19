import { TTableDef } from "../../../../types/model";

export const EstoqueDistribuicao: TTableDef = {
  database: "plano",
  table: "EstoqueDistribuicao",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "CdLocalEstoque",
      label: "CdLocalEstoque",
      name: "CdLocalEstoque",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "EstAtual",
      label: "EstAtual",
      name: "EstAtual",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};
