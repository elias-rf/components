import { TTableDef } from "../../../../types/model";

export const Rotulos: TTableDef = {
  database: "plano",
  table: "Rotulos",
  fields: [
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "CdRotulo",
      label: "CdRotulo",
      name: "CdRotulo",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "Conteudo",
      label: "Conteudo",
      name: "Conteudo",
      typeField: "string",
      size: 1024,
    },
    {
      field: "CRM",
      label: "CRM",
      name: "CRM",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
  ],
};
