import { TEntity } from "../../../../types";

export const PedidoEntradaNotaAssociada: TEntity = {
  database: "plano",
  table: "PedidoEntradaNotaAssociada",
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
      field: "NumNotaFaturada",
      label: "NumNotaFaturada",
      name: "NumNotaFaturada",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "SerieNotaFaturada",
      label: "SerieNotaFaturada",
      name: "SerieNotaFaturada",
      type: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "ModeloNotaFaturada",
      label: "ModeloNotaFaturada",
      name: "ModeloNotaFaturada",
      type: "string",
      size: 3,
      allowNull: false,
    },
  ],
};
