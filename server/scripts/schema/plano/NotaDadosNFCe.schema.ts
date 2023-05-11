import { TTableDef } from "@/types/model";

export const NotaDadosNFCe: TTableDef = {
  database: "plano",
  table: "NotaDadosNFCe",
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
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CPFCNPJDestinatario",
      label: "CPFCNPJDestinatario",
      name: "CPFCNPJDestinatario",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NomeDestinatario",
      label: "NomeDestinatario",
      name: "NomeDestinatario",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "EmailDestinatario",
      label: "EmailDestinatario",
      name: "EmailDestinatario",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Endereco",
      label: "Endereco",
      name: "Endereco",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumEndereco",
      label: "NumEndereco",
      name: "NumEndereco",
      typeField: "string",

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
      field: "Cidade",
      label: "Cidade",
      name: "Cidade",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdCidade",
      label: "CdCidade",
      name: "CdCidade",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Uf",
      label: "Uf",
      name: "Uf",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Cep",
      label: "Cep",
      name: "Cep",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Telefone",
      label: "Telefone",
      name: "Telefone",
      typeField: "string",

      allowNull: false,
    },
  ],
};
