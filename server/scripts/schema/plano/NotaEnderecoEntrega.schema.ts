import { TTableDef } from "@/types/model";

export const NotaEnderecoEntrega: TTableDef = {
  database: "plano",
  table: "NotaEnderecoEntrega",
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
      field: "Endereco",
      label: "Endereco",
      name: "Endereco",
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
      field: "UF",
      label: "UF",
      name: "UF",
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
      field: "Proximidades",
      label: "Proximidades",
      name: "Proximidades",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Contato",
      label: "Contato",
      name: "Contato",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumEndereco",
      label: "NumEndereco",
      name: "NumEndereco",
      typeField: "int",
    },
    {
      field: "CompEndereco",
      label: "CompEndereco",
      name: "CompEndereco",
      typeField: "string",
    },
    {
      field: "FgTipoEndereco",
      label: "FgTipoEndereco",
      name: "FgTipoEndereco",
      typeField: "string",
    },
  ],
};
