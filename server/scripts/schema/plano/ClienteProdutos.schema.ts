import { TTable } from "../../../../types/model";

export const ClienteProdutos: TTable = {
  database: "plano",
  table: "ClienteProdutos",
  fields: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "VlVenda",
      label: "VlVenda",
      name: "VlVenda",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlAtacado",
      label: "VlAtacado",
      name: "VlAtacado",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};
