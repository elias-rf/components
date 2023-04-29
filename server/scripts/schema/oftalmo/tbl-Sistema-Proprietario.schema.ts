import { TTableDef } from "@mono/types/model";

export const tbl_Sistema_Proprietario: TTableDef = {
  database: "oftalmo",
  table: "tbl_Sistema_Proprietario",
  fields: [
    {
      field: "NomeEmpresa",
      label: "NomeEmpresa",
      name: "tbl_Sistema_Proprietario_id",
      typeField: "string",
      size: 50,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "KEmpresa",
      label: "KEmpresa",
      name: "KEmpresa",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "SiglaEmpresa",
      label: "SiglaEmpresa",
      name: "SiglaEmpresa",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "RazaoSocial",
      label: "RazaoSocial",
      name: "RazaoSocial",
      typeField: "string",
      size: 150,
      allowNull: false,
    },
    {
      field: "NomeFantasia",
      label: "NomeFantasia",
      name: "NomeFantasia",
      typeField: "string",
      size: 150,
      allowNull: false,
    },
    {
      field: "Contato",
      label: "Contato",
      name: "Contato",
      typeField: "string",
      size: 150,
      allowNull: false,
    },
    {
      field: "CGC",
      label: "CGC",
      name: "CGC",
      typeField: "string",
      size: 50,
      allowNull: false,
    },
    {
      field: "InscEstadual",
      label: "InscEstadual",
      name: "InscEstadual",
      typeField: "string",
      size: 50,
      allowNull: false,
    },
    {
      field: "Endereco",
      label: "Endereco",
      name: "Endereco",
      typeField: "string",
      size: 80,
      allowNull: false,
    },
    {
      field: "Bairro",
      label: "Bairro",
      name: "Bairro",
      typeField: "string",
      size: 50,
      allowNull: false,
    },
    {
      field: "Cidade",
      label: "Cidade",
      name: "Cidade",
      typeField: "string",
      size: 50,
      allowNull: false,
    },
    {
      field: "Estado",
      label: "Estado",
      name: "Estado",
      typeField: "string",
      size: 30,
      allowNull: false,
    },
    {
      field: "CEP",
      label: "CEP",
      name: "CEP",
      typeField: "string",
      size: 20,
      allowNull: false,
    },
    {
      field: "Pais",
      label: "Pais",
      name: "Pais",
      typeField: "string",
      size: 50,
      allowNull: false,
    },
    {
      field: "Telefone",
      label: "Telefone",
      name: "Telefone",
      typeField: "string",
      size: 30,
      allowNull: false,
    },
    {
      field: "Fax",
      label: "Fax",
      name: "Fax",
      typeField: "string",
      size: 30,
      allowNull: false,
    },
    {
      field: "Proprietaria",
      label: "Proprietaria",
      name: "Proprietaria",
      typeField: "int",
      size: 1,
    },
    {
      field: "ICMS",
      label: "ICMS",
      name: "ICMS",
      typeField: "int",
      size: 1,
    },
    {
      field: "Web",
      label: "Web",
      name: "Web",
      typeField: "string",
      size: 50,
    },
  ],
};
