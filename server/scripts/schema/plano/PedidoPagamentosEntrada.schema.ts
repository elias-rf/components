import { TTableDef } from "@/types/model";

export const PedidoPagamentosEntrada: TTableDef = {
  database: "plano",
  table: "PedidoPagamentosEntrada",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtVencimento",
      label: "DtVencimento",
      name: "DtVencimento",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "Valor",
      label: "Valor",
      name: "Valor",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Seq",
      label: "Seq",
      name: "Seq",
      typeField: "int",
    },
  ],
};
