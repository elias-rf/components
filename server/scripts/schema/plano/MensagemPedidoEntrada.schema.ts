import { TTable } from "../../../../types";

export const MensagemPedidoEntrada: TTable = {
  database: "plano",
  table: "MensagemPedidoEntrada",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "MensagemPedidoEntrada_id",
      type: "float",
      size: 8,
      scale: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "MensagemPedido",
      label: "MensagemPedido",
      name: "MensagemPedido",
      type: "string",
      size: 1028,
      allowNull: false,
    },
    {
      field: "DtUltAtualizacao",
      label: "DtUltAtualizacao",
      name: "DtUltAtualizacao",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
