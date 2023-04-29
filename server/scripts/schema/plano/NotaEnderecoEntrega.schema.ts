import { TTableDef } from "@mono/types/model";

export const NotaEnderecoEntrega: TTableDef = {
  database: "plano",
  table: "NotaEnderecoEntrega",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "Endereco",
      label: "Endereco",
      name: "Endereco",
      typeField: "string",
      size: 256,
      allowNull: false,
    },
    {
      field: "Bairro",
      label: "Bairro",
      name: "Bairro",
      typeField: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "Cidade",
      label: "Cidade",
      name: "Cidade",
      typeField: "string",
      size: 64,
      allowNull: false,
    },
    {
      field: "UF",
      label: "UF",
      name: "UF",
      typeField: "string",
      size: 2,
      allowNull: false,
    },
    {
      field: "CEP",
      label: "CEP",
      name: "CEP",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "Proximidades",
      label: "Proximidades",
      name: "Proximidades",
      typeField: "string",
      size: 256,
      allowNull: false,
    },
    {
      field: "Contato",
      label: "Contato",
      name: "Contato",
      typeField: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "NumEndereco",
      label: "NumEndereco",
      name: "NumEndereco",
      typeField: "int",
      size: 5,
    },
    {
      field: "CompEndereco",
      label: "CompEndereco",
      name: "CompEndereco",
      typeField: "string",
      size: 32,
    },
    {
      field: "FgTipoEndereco",
      label: "FgTipoEndereco",
      name: "FgTipoEndereco",
      typeField: "string",
      size: 1,
    },
  ],
};
