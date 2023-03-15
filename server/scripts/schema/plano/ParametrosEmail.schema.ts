import { TTable } from "../../../../types/model";

export const ParametrosEmail: TTable = {
  database: "plano",
  table: "ParametrosEmail",
  fields: [
    {
      field: "Tipo",
      label: "Tipo",
      name: "ParametrosEmail_id",
      typeField: "string",
      size: 16,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Remetente",
      label: "Remetente",
      name: "Remetente",
      typeField: "string",
      size: 512,
      allowNull: false,
    },
    {
      field: "IdRemetente",
      label: "IdRemetente",
      name: "IdRemetente",
      typeField: "string",
      size: 512,
      allowNull: false,
    },
    {
      field: "SMTPHost",
      label: "SMTPHost",
      name: "SMTPHost",
      typeField: "string",
      size: 512,
      allowNull: false,
    },
    {
      field: "SMTPPort",
      label: "SMTPPort",
      name: "SMTPPort",
      typeField: "string",
      size: 128,
      allowNull: false,
    },
    {
      field: "Connect",
      label: "Connect",
      name: "Connect",
      typeField: "string",
      size: 128,
      allowNull: false,
    },
    {
      field: "Message",
      label: "Message",
      name: "Message",
      typeField: "string",
      size: 128,
      allowNull: false,
    },
    {
      field: "Autentication",
      label: "Autentication",
      name: "Autentication",
      typeField: "string",
      size: 128,
      allowNull: false,
    },
    {
      field: "TLS",
      label: "TLS",
      name: "TLS",
      typeField: "string",
      size: 128,
      allowNull: false,
    },
    {
      field: "UserName",
      label: "UserName",
      name: "UserName",
      typeField: "string",
      size: 512,
      allowNull: false,
    },
    {
      field: "Password",
      label: "Password",
      name: "Password",
      typeField: "string",
      size: 512,
      allowNull: false,
    },
  ],
};
