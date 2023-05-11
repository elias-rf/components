import { TTableDef } from "@/types/model";

export const FilialContador: TTableDef = {
  database: "plano",
  table: "FilialContador",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "FilialContador_id",
      typeField: "float",

      scale: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmContador",
      label: "NmContador",
      name: "NmContador",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumCRC",
      label: "NumCRC",
      name: "NumCRC",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CPF",
      label: "CPF",
      name: "CPF",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CNPJ",
      label: "CNPJ",
      name: "CNPJ",
      typeField: "float",

      scale: 4,
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
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CompEndereco",
      label: "CompEndereco",
      name: "CompEndereco",
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
      field: "NmCidade",
      label: "NmCidade",
      name: "NmCidade",
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
      typeField: "float",

      scale: 4,
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
    {
      field: "Email",
      label: "Email",
      name: "Email",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "EmailProcNfe",
      label: "EmailProcNfe",
      name: "EmailProcNfe",
      typeField: "string",
    },
  ],
};
