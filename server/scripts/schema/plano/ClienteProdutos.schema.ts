import { TEntity } from "../../../../types";

export const ClienteProdutos: TEntity = {
  database: "plano",
  table: "ClienteProdutos",
  schema: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      type: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      type: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "VlVenda",
      label: "VlVenda",
      name: "VlVenda",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlAtacado",
      label: "VlAtacado",
      name: "VlAtacado",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};
