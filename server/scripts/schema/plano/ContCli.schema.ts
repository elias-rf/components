import { TTableDef } from "@/types/model";

export const ContCli: TTableDef = {
  database: "plano",
  table: "ContCli",
  fields: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumSequencia",
      label: "NumSequencia",
      name: "NumSequencia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NmContato",
      label: "NmContato",
      name: "NmContato",
      typeField: "string",
    },
    {
      field: "Telefone",
      label: "Telefone",
      name: "Telefone",
      typeField: "string",
    },
    {
      field: "Ramal",
      label: "Ramal",
      name: "Ramal",
      typeField: "int",
    },
    {
      field: "DtNascimento",
      label: "DtNascimento",
      name: "DtNascimento",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "Hobby",
      label: "Hobby",
      name: "Hobby",
      typeField: "string",
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "Setor",
      label: "Setor",
      name: "Setor",
      typeField: "string",
    },
    {
      field: "Email",
      label: "Email",
      name: "Email",
      typeField: "string",
    },
    {
      field: "FgNotificacao",
      label: "FgNotificacao",
      name: "FgNotificacao",
      typeField: "string",
    },
    {
      field: "FgSuporte",
      label: "FgSuporte",
      name: "FgSuporte",
      typeField: "string",
    },
  ],
};
