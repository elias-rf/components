import { TTableDef } from "@/types/model";

export const ClienteProdutos: TTableDef = {
  database: "plano",
  table: "ClienteProdutos",
  fields: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "VlVenda",
      label: "VlVenda",
      name: "VlVenda",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlAtacado",
      label: "VlAtacado",
      name: "VlAtacado",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
  ],
};
