import { TTableDef } from "@/types/model";

export const Transportadoras: TTableDef = {
  database: "plano",
  table: "Transportadoras",
  fields: [
    {
      field: "Bairro",
      label: "Bairro",
      name: "Bairro",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdTransportadora",
      label: "CdTransportadora",
      name: "CdTransportadora",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CEP",
      label: "CEP",
      name: "CEP",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CGC",
      label: "CGC",
      name: "CGC",
      typeField: "float",

      scale: 4,
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
      field: "Endereco",
      label: "Endereco",
      name: "Endereco",
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
      field: "InscEst",
      label: "InscEst",
      name: "InscEst",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NmContato",
      label: "NmContato",
      name: "NmContato",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "RzSocial",
      label: "RzSocial",
      name: "RzSocial",
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
      field: "UF",
      label: "UF",
      name: "UF",
      typeField: "string",

      allowNull: false,
    },
  ],
};
