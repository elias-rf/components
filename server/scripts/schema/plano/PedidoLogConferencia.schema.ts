import { TTable } from "../../../../types/model";

export const PedidoLogConferencia: TTable = {
  database: "plano",
  table: "PedidoLogConferencia",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "NumOrdemFaturamento",
      label: "NumOrdemFaturamento",
      name: "NumOrdemFaturamento",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "DtInclusao",
      label: "DtInclusao",
      name: "DtInclusao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "NumLote",
      label: "NumLote",
      name: "NumLote",
      typeField: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "SaldoLote",
      label: "SaldoLote",
      name: "SaldoLote",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};
