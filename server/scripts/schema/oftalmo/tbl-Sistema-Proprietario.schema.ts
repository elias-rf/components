import { TTableDef } from "@/types/model";

export const tbl_Sistema_Proprietario: TTableDef = {
  database: "oftalmo",
  table: "tbl_Sistema_Proprietario",
  fields: [
    {
      field: "NomeEmpresa",
      label: "NomeEmpresa",
      name: "tbl_Sistema_Proprietario_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "KEmpresa",
      label: "KEmpresa",
      name: "KEmpresa",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "SiglaEmpresa",
      label: "SiglaEmpresa",
      name: "SiglaEmpresa",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "RazaoSocial",
      label: "RazaoSocial",
      name: "RazaoSocial",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NomeFantasia",
      label: "NomeFantasia",
      name: "NomeFantasia",
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
      field: "CGC",
      label: "CGC",
      name: "CGC",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "InscEstadual",
      label: "InscEstadual",
      name: "InscEstadual",
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
      field: "Estado",
      label: "Estado",
      name: "Estado",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CEP",
      label: "CEP",
      name: "CEP",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Pais",
      label: "Pais",
      name: "Pais",
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
    {
      field: "Fax",
      label: "Fax",
      name: "Fax",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Proprietaria",
      label: "Proprietaria",
      name: "Proprietaria",
      typeField: "int",
    },
    {
      field: "ICMS",
      label: "ICMS",
      name: "ICMS",
      typeField: "int",
    },
    {
      field: "Web",
      label: "Web",
      name: "Web",
      typeField: "string",
    },
  ],
};
