import { TTable } from "../../../../types/model";

export const MestrePedidoDescritivo: TTable = {
  database: "plano",
  table: "MestrePedidoDescritivo",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "Cabecalho",
      label: "Cabecalho",
      name: "Cabecalho",
      typeField: "string",
      size: 2560,
    },
    {
      field: "Rodape",
      label: "Rodape",
      name: "Rodape",
      typeField: "string",
      size: 2560,
    },
  ],
};
