import { TTableDef } from "@/types/model";

export const MestrePedidoDescritivo: TTableDef = {
  database: "plano",
  table: "MestrePedidoDescritivo",
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
      field: "Cabecalho",
      label: "Cabecalho",
      name: "Cabecalho",
      typeField: "string",
    },
    {
      field: "Rodape",
      label: "Rodape",
      name: "Rodape",
      typeField: "string",
    },
  ],
};
