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

      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumNotaFaturada",
      label: "NumNotaFaturada",
      name: "NumNotaFaturada",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "SerieNotaFaturada",
      label: "SerieNotaFaturada",
      name: "SerieNotaFaturada",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ModeloNotaFaturada",
      label: "ModeloNotaFaturada",
      name: "ModeloNotaFaturada",
      typeField: "string",

      allowNull: false,
    },
  ],
};
