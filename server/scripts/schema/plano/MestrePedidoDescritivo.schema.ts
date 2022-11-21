import { TTable } from "../../../../types";

export const MestrePedidoDescritivo: TTable = {
  database: "plano",
  table: "MestrePedidoDescritivo",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "Cabecalho",
      label: "Cabecalho",
      name: "Cabecalho",
      type: "string",
      size: 2560,
    },
    {
      field: "Rodape",
      label: "Rodape",
      name: "Rodape",
      type: "string",
      size: 2560,
    },
  ],
};
