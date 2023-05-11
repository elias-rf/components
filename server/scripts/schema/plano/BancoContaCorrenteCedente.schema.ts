import { TTableDef } from "@/types/model";

export const BancoContaCorrenteCedente: TTableDef = {
  database: "plano",
  table: "BancoContaCorrenteCedente",
  fields: [
    {
      field: "NumBanco",
      label: "NumBanco",
      name: "NumBanco",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumAgencia",
      label: "NumAgencia",
      name: "NumAgencia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumContaCorrente",
      label: "NumContaCorrente",
      name: "NumContaCorrente",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "AgCodCedente",
      label: "AgCodCedente",
      name: "AgCodCedente",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NmCedente",
      label: "NmCedente",
      name: "NmCedente",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CNPJ",
      label: "CNPJ",
      name: "CNPJ",
      typeField: "int",

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
      field: "Telefone",
      label: "Telefone",
      name: "Telefone",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Fax",
      label: "Fax",
      name: "Fax",
      typeField: "string",

      allowNull: false,
    },
  ],
};
