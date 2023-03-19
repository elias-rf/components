import { TTableDef } from "../../../../types/model";

export const PedidoOBSAMIVida: TTableDef = {
  database: "plano",
  table: "PedidoOBSAMIVida",
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
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      typeField: "string",
      size: 512,
    },
  ],
};
