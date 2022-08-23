import { TEntity } from "@er/types/*";

export const ContCli: TEntity =
  {
  "database": "plano",
  "table": "ContCli",
  "fields": [
    {
      "field": "CdCliente",
      "label": "CdCliente",
      "name": "CdCliente",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "NumSequencia",
      "label": "NumSequencia",
      "name": "NumSequencia",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "NmContato",
      "label": "NmContato",
      "name": "NmContato",
      "type": "string",
      "size": 40
    },
    {
      "field": "Telefone",
      "label": "Telefone",
      "name": "Telefone",
      "type": "string",
      "size": 15
    },
    {
      "field": "Ramal",
      "label": "Ramal",
      "name": "Ramal",
      "type": "int",
      "size": 2
    },
    {
      "field": "DtNascimento",
      "label": "DtNascimento",
      "name": "DtNascimento",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "Hobby",
      "label": "Hobby",
      "name": "Hobby",
      "type": "string",
      "size": 25
    },
    {
      "field": "DtUltAlteracao",
      "label": "DtUltAlteracao",
      "name": "DtUltAlteracao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "Setor",
      "label": "Setor",
      "name": "Setor",
      "type": "string",
      "size": 40
    },
    {
      "field": "Email",
      "label": "Email",
      "name": "Email",
      "type": "string",
      "size": 64
    },
    {
      "field": "FgNotificacao",
      "label": "FgNotificacao",
      "name": "FgNotificacao",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgSuporte",
      "label": "FgSuporte",
      "name": "FgSuporte",
      "type": "string",
      "size": 1
    }
  ]
}
