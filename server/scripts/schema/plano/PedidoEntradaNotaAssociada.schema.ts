import { TTableDef } from "@/types/model";

export const PedidoEntradaNotaAssociada: TTableDef = {
  database: "plano",
  table: "PedidoEntradaNotaAssociada",
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
      field: "NumNotaFaturada",
      label: "NumNotaFaturada",
      name: "NumNotaFaturada",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "SerieNotaFaturada",
      label: "SerieNotaFaturada",
      name: "SerieNotaFaturada",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "ModeloNotaFaturada",
      label: "ModeloNotaFaturada",
      name: "ModeloNotaFaturada",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
  ],
};
