import { TTableDef } from "@/types/model";

export const ParametrosEmail: TTableDef = {
  database: "plano",
  table: "ParametrosEmail",
  fields: [
    {
      field: "Tipo",
      label: "Tipo",
      name: "ParametrosEmail_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Remetente",
      label: "Remetente",
      name: "Remetente",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "IdRemetente",
      label: "IdRemetente",
      name: "IdRemetente",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "SMTPHost",
      label: "SMTPHost",
      name: "SMTPHost",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "SMTPPort",
      label: "SMTPPort",
      name: "SMTPPort",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Connect",
      label: "Connect",
      name: "Connect",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Message",
      label: "Message",
      name: "Message",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Autentication",
      label: "Autentication",
      name: "Autentication",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "TLS",
      label: "TLS",
      name: "TLS",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "UserName",
      label: "UserName",
      name: "UserName",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Password",
      label: "Password",
      name: "Password",
      typeField: "string",

      allowNull: false,
    },
  ],
};
