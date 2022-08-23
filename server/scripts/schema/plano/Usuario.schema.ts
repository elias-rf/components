import { TEntity } from "@er/types/*";

export const Usuario: TEntity =
  {
  "database": "plano",
  "table": "Usuario",
  "fields": [
    {
      "field": "SgUsuario",
      "label": "SgUsuario",
      "name": "Usuario_id",
      "type": "string",
      "size": 32,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "NmUsuario",
      "label": "NmUsuario",
      "name": "NmUsuario",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "Senha",
      "label": "Senha",
      "name": "Senha",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "CdVendedorDefalt",
      "label": "CdVendedorDefalt",
      "name": "CdVendedorDefalt",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CdTecnicoAssoc",
      "label": "CdTecnicoAssoc",
      "name": "CdTecnicoAssoc",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CdOperadorAssociado",
      "label": "CdOperadorAssociado",
      "name": "CdOperadorAssociado",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "DtAlteracao",
      "label": "DtAlteracao",
      "name": "DtAlteracao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "Email",
      "label": "Email",
      "name": "Email",
      "type": "string",
      "size": 128,
      "allowNull": false
    },
    {
      "field": "FgAtivo",
      "label": "FgAtivo",
      "name": "FgAtivo",
      "type": "string",
      "size": 1
    }
  ]
}
