import { TEntity } from "@er/types/*";

export const tbl_Reclamacao: TEntity =
  {
  "database": "oftalmo",
  "table": "tbl_Reclamacao",
  "fields": [
    {
      "field": "kReclamacao",
      "label": "kReclamacao",
      "name": "tbl_Reclamacao_id",
      "type": "int",
      "size": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "fkCliente",
      "label": "fkCliente",
      "name": "fkCliente",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "TipoReclamacao",
      "label": "TipoReclamacao",
      "name": "TipoReclamacao",
      "type": "string",
      "size": 50
    },
    {
      "field": "Assunto",
      "label": "Assunto",
      "name": "Assunto",
      "type": "string",
      "size": 200
    },
    {
      "field": "Descricao",
      "label": "Descricao",
      "name": "Descricao",
      "type": "string",
      "size": 16
    },
    {
      "field": "DataDescricao",
      "label": "DataDescricao",
      "name": "DataDescricao",
      "type": "date",
      "size": 4
    },
    {
      "field": "UsuarioDescricao",
      "label": "UsuarioDescricao",
      "name": "UsuarioDescricao",
      "type": "string",
      "size": 50
    },
    {
      "field": "Analise",
      "label": "Analise",
      "name": "Analise",
      "type": "string",
      "size": 16
    },
    {
      "field": "DataAnalise",
      "label": "DataAnalise",
      "name": "DataAnalise",
      "type": "date",
      "size": 4
    },
    {
      "field": "UsuarioAnalise",
      "label": "UsuarioAnalise",
      "name": "UsuarioAnalise",
      "type": "string",
      "size": 50
    },
    {
      "field": "Solucao",
      "label": "Solucao",
      "name": "Solucao",
      "type": "string",
      "size": 16
    },
    {
      "field": "DataSolucao",
      "label": "DataSolucao",
      "name": "DataSolucao",
      "type": "date",
      "size": 4
    },
    {
      "field": "UsuarioSolucao",
      "label": "UsuarioSolucao",
      "name": "UsuarioSolucao",
      "type": "string",
      "size": 50
    },
    {
      "field": "Verificacao",
      "label": "Verificacao",
      "name": "Verificacao",
      "type": "string",
      "size": 16
    },
    {
      "field": "DataVerificacao",
      "label": "DataVerificacao",
      "name": "DataVerificacao",
      "type": "date",
      "size": 4
    },
    {
      "field": "UsuarioVerificacao",
      "label": "UsuarioVerificacao",
      "name": "UsuarioVerificacao",
      "type": "string",
      "size": 50
    },
    {
      "field": "Causa",
      "label": "Causa",
      "name": "Causa",
      "type": "string",
      "size": 50
    },
    {
      "field": "EmailNotif",
      "label": "EmailNotif",
      "name": "EmailNotif",
      "type": "int",
      "size": 1
    },
    {
      "field": "ts",
      "label": "ts",
      "name": "ts",
      "type": "timestamp",
      "size": 8
    }
  ]
}
