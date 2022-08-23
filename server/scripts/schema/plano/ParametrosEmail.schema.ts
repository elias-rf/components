import { TEntity } from "@er/types/*";

export const ParametrosEmail: TEntity =
  {
  "database": "plano",
  "table": "ParametrosEmail",
  "fields": [
    {
      "field": "Tipo",
      "label": "Tipo",
      "name": "ParametrosEmail_id",
      "type": "string",
      "size": 16,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "Remetente",
      "label": "Remetente",
      "name": "Remetente",
      "type": "string",
      "size": 512,
      "allowNull": false
    },
    {
      "field": "IdRemetente",
      "label": "IdRemetente",
      "name": "IdRemetente",
      "type": "string",
      "size": 512,
      "allowNull": false
    },
    {
      "field": "SMTPHost",
      "label": "SMTPHost",
      "name": "SMTPHost",
      "type": "string",
      "size": 512,
      "allowNull": false
    },
    {
      "field": "SMTPPort",
      "label": "SMTPPort",
      "name": "SMTPPort",
      "type": "string",
      "size": 128,
      "allowNull": false
    },
    {
      "field": "Connect",
      "label": "Connect",
      "name": "Connect",
      "type": "string",
      "size": 128,
      "allowNull": false
    },
    {
      "field": "Message",
      "label": "Message",
      "name": "Message",
      "type": "string",
      "size": 128,
      "allowNull": false
    },
    {
      "field": "Autentication",
      "label": "Autentication",
      "name": "Autentication",
      "type": "string",
      "size": 128,
      "allowNull": false
    },
    {
      "field": "TLS",
      "label": "TLS",
      "name": "TLS",
      "type": "string",
      "size": 128,
      "allowNull": false
    },
    {
      "field": "UserName",
      "label": "UserName",
      "name": "UserName",
      "type": "string",
      "size": 512,
      "allowNull": false
    },
    {
      "field": "Password",
      "label": "Password",
      "name": "Password",
      "type": "string",
      "size": 512,
      "allowNull": false
    }
  ]
}
