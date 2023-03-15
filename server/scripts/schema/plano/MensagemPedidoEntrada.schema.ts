import { TTable } from "../../../../types/model";

export const MensagemPedidoEntrada: TTable = {
  database: "plano",
  table: "MensagemPedidoEntrada",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "MensagemPedidoEntrada_id",
      typeField: "float",
      size: 8,
      scale: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "MensagemPedido",
      label: "MensagemPedido",
      name: "MensagemPedido",
      typeField: "string",
      size: 1028,
      allowNull: false,
    },
    {
      field: "DtUltAtualizacao",
      label: "DtUltAtualizacao",
      name: "DtUltAtualizacao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
