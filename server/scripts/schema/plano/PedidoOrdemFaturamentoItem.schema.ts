import { TEntity } from "../../../../types";

export const PedidoOrdemFaturamentoItem: TEntity = {
  database: "plano",
  table: "PedidoOrdemFaturamentoItem",
  schema: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      type: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "NumOrdemFaturamento",
      label: "NumOrdemFaturamento",
      name: "NumOrdemFaturamento",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      type: "int",
      size: 5,
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
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "FgSituacao",
      label: "FgSituacao",
      name: "FgSituacao",
      type: "string",
      size: 1,
      allowNull: false,
    },
  ],
};