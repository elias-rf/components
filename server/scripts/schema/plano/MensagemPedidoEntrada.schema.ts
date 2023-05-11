import { TTableDef } from "@/types/model";

export const MensagemPedidoEntrada: TTableDef = {
  database: "plano",
  table: "MensagemPedidoEntrada",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "MensagemPedidoEntrada_id",
      typeField: "float",

      scale: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "MensagemPedido",
      label: "MensagemPedido",
      name: "MensagemPedido",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtUltAtualizacao",
      label: "DtUltAtualizacao",
      name: "DtUltAtualizacao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
  ],
};
