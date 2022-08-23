import { TEntity } from "@er/types/*";

export const ConfiguracaoSITEF: TEntity =
  {
  "database": "plano",
  "table": "ConfiguracaoSITEF",
  "fields": [
    {
      "field": "FgAtivo",
      "label": "FgAtivo",
      "name": "FgAtivo",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "Host1",
      "label": "Host1",
      "name": "Host1",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "Host2",
      "label": "Host2",
      "name": "Host2",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "Host3",
      "label": "Host3",
      "name": "Host3",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "Host4",
      "label": "Host4",
      "name": "Host4",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "Loja",
      "label": "Loja",
      "name": "Loja",
      "type": "string",
      "size": 8,
      "allowNull": false
    },
    {
      "field": "MsgPINPAD",
      "label": "MsgPINPAD",
      "name": "MsgPINPAD",
      "type": "string",
      "size": 512,
      "allowNull": false
    },
    {
      "field": "CaminhoSITEF",
      "label": "CaminhoSITEF",
      "name": "CaminhoSITEF",
      "type": "string",
      "size": 512,
      "allowNull": false
    },
    {
      "field": "ContraSenha",
      "label": "ContraSenha",
      "name": "ContraSenha",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "ConfiguracaoSITEF_id",
      "type": "int",
      "size": 9,
      "primaryKey": true,
      "allowNull": false
    }
  ]
}
