import { TEntity } from "../../../../types";

export const PedidoEtiquetaEntrega: TEntity = {
  database: "plano",
  table: "PedidoEtiquetaEntrega",
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
      field: "TextoEtiqueta",
      label: "TextoEtiqueta",
      name: "TextoEtiqueta",
      type: "string",
      size: 1024,
      allowNull: false,
    },
    {
      field: "FgImpressao",
      label: "FgImpressao",
      name: "FgImpressao",
      type: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "FgEtiquetaEnderecoEntrega",
      label: "FgEtiquetaEnderecoEntrega",
      name: "FgEtiquetaEnderecoEntrega",
      type: "string",
      size: 1,
    },
  ],
};
