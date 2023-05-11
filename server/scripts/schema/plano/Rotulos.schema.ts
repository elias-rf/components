import { TTableDef } from "@/types/model";

export const Rotulos: TTableDef = {
  database: "plano",
  table: "Rotulos",
  fields: [
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdRotulo",
      label: "CdRotulo",
      name: "CdRotulo",
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
      field: "Conteudo",
      label: "Conteudo",
      name: "Conteudo",
      typeField: "string",
    },
    {
      field: "CRM",
      label: "CRM",
      name: "CRM",
      typeField: "string",

      allowNull: false,
    },
  ],
};
