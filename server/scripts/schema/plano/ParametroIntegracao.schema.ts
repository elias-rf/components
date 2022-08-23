import { TEntity } from "@er/types/*";

export const ParametroIntegracao: TEntity =
  {
  "database": "plano",
  "table": "ParametroIntegracao",
  "fields": [
    {
      "field": "CdEmpresa",
      "label": "CdEmpresa",
      "name": "ParametroIntegracao_id",
      "type": "int",
      "size": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "SMTPServer",
      "label": "SMTPServer",
      "name": "SMTPServer",
      "type": "string",
      "size": 50,
      "allowNull": false
    },
    {
      "field": "POP3Server",
      "label": "POP3Server",
      "name": "POP3Server",
      "type": "string",
      "size": 50,
      "allowNull": false
    },
    {
      "field": "NomeRemetente",
      "label": "NomeRemetente",
      "name": "NomeRemetente",
      "type": "string",
      "size": 50,
      "allowNull": false
    },
    {
      "field": "EnderecoRemetente",
      "label": "EnderecoRemetente",
      "name": "EnderecoRemetente",
      "type": "string",
      "size": 50,
      "allowNull": false
    },
    {
      "field": "NomeUsuario",
      "label": "NomeUsuario",
      "name": "NomeUsuario",
      "type": "string",
      "size": 50,
      "allowNull": false
    },
    {
      "field": "SenhaUsuario",
      "label": "SenhaUsuario",
      "name": "SenhaUsuario",
      "type": "string",
      "size": 50,
      "allowNull": false
    },
    {
      "field": "IntExecucao",
      "label": "IntExecucao",
      "name": "IntExecucao",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "TpIntExecucao",
      "label": "TpIntExecucao",
      "name": "TpIntExecucao",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "IntSelecao",
      "label": "IntSelecao",
      "name": "IntSelecao",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "TpIntSelecao",
      "label": "TpIntSelecao",
      "name": "TpIntSelecao",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgConexaocomAutenticacao",
      "label": "FgConexaocomAutenticacao",
      "name": "FgConexaocomAutenticacao",
      "type": "string",
      "size": 1
    }
  ]
}
