import { TTableDef } from "@/types/model";

export const PedidoEtiquetaEntrega: TTableDef = {
  database: "plano",
  table: "PedidoEtiquetaEntrega",
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
      field: "TextoEtiqueta",
      label: "TextoEtiqueta",
      name: "TextoEtiqueta",
      typeField: "string",
      size: 1024,
      allowNull: false,
    },
    {
      field: "FgImpressao",
      label: "FgImpressao",
      name: "FgImpressao",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "FgEtiquetaEnderecoEntrega",
      label: "FgEtiquetaEnderecoEntrega",
      name: "FgEtiquetaEnderecoEntrega",
      typeField: "string",
      size: 1,
    },
  ],
};
