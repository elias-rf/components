import { TTableDef } from "@/types/model";

export const Emitentes: TTableDef = {
  database: "plano",
  table: "Emitentes",
  fields: [
    {
      field: "CdTipoEmitente",
      label: "CdTipoEmitente",
      name: "CdTipoEmitente",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdEmitente",
      label: "CdEmitente",
      name: "CdEmitente",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "RzSocial",
      label: "RzSocial",
      name: "RzSocial",
      typeField: "string",
    },
    {
      field: "Endereco",
      label: "Endereco",
      name: "Endereco",
      typeField: "string",
    },
    {
      field: "Bairro",
      label: "Bairro",
      name: "Bairro",
      typeField: "string",
    },
    {
      field: "Cidade",
      label: "Cidade",
      name: "Cidade",
      typeField: "string",
    },
    {
      field: "Uf",
      label: "Uf",
      name: "Uf",
      typeField: "string",
    },
    {
      field: "Cep",
      label: "Cep",
      name: "Cep",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Cgc",
      label: "Cgc",
      name: "Cgc",
      typeField: "float",

      scale: 4,
    },
    {
      field: "InscEst",
      label: "InscEst",
      name: "InscEst",
      typeField: "string",
    },
    {
      field: "Telefone",
      label: "Telefone",
      name: "Telefone",
      typeField: "string",
    },
    {
      field: "Fax",
      label: "Fax",
      name: "Fax",
      typeField: "string",
    },
    {
      field: "NmContato",
      label: "NmContato",
      name: "NmContato",
      typeField: "string",
    },
    {
      field: "PercComissao",
      label: "PercComissao",
      name: "PercComissao",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgAtivo",
      label: "FgAtivo",
      name: "FgAtivo",
      typeField: "string",
    },
    {
      field: "FgAcertoParcial",
      label: "FgAcertoParcial",
      name: "FgAcertoParcial",
      typeField: "string",
    },
    {
      field: "NmFantasia",
      label: "NmFantasia",
      name: "NmFantasia",
      typeField: "string",
    },
    {
      field: "Email",
      label: "Email",
      name: "Email",
      typeField: "string",
    },
    {
      field: "EmailNfe",
      label: "EmailNfe",
      name: "EmailNfe",
      typeField: "string",
    },
  ],
};
