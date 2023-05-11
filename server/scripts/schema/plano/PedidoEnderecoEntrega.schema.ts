import { TTableDef } from "@/types/model";

export const PedidoEnderecoEntrega: TTableDef = {
  database: "plano",
  table: "PedidoEnderecoEntrega",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdEnderecoEntrega",
      label: "CdEnderecoEntrega",
      name: "CdEnderecoEntrega",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Logradouro",
      label: "Logradouro",
      name: "Logradouro",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Numero",
      label: "Numero",
      name: "Numero",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Complemento",
      label: "Complemento",
      name: "Complemento",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Bairro",
      label: "Bairro",
      name: "Bairro",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdCidade",
      label: "CdCidade",
      name: "CdCidade",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Cidade",
      label: "Cidade",
      name: "Cidade",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CEP",
      label: "CEP",
      name: "CEP",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "UF",
      label: "UF",
      name: "UF",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Proximidades",
      label: "Proximidades",
      name: "Proximidades",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ContatoEntrega",
      label: "ContatoEntrega",
      name: "ContatoEntrega",
      typeField: "string",

      allowNull: false,
    },
  ],
};
