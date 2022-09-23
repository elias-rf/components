import { TEntity } from "@er/types/*";

export const tOcorrencia: TEntity =
  {
  "database": "oftalmo",
  "table": "tOcorrencia",
  "fields": [
    {
      "field": "kOcorrencia",
      "label": "kOcorrencia",
      "name": "tOcorrencia_id",
      "type": "int",
      "size": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "TipoOcorrencia",
      "label": "TipoOcorrencia",
      "name": "TipoOcorrencia",
      "type": "string",
      "size": 50,
      "allowNull": false
    },
    {
      "field": "OrigemOcorrencia",
      "label": "OrigemOcorrencia",
      "name": "OrigemOcorrencia",
      "type": "string",
      "size": 50,
      "allowNull": false
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
      "size": 30
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
      "size": 30
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
      "size": 30
    },
    {
      "field": "PrazoImplemSolucao",
      "label": "PrazoImplemSolucao",
      "name": "PrazoImplemSolucao",
      "type": "date",
      "size": 4
    },
    {
      "field": "DataImplemSolucao",
      "label": "DataImplemSolucao",
      "name": "DataImplemSolucao",
      "type": "date",
      "size": 4
    },
    {
      "field": "UsuarioImplemSolucao",
      "label": "UsuarioImplemSolucao",
      "name": "UsuarioImplemSolucao",
      "type": "string",
      "size": 30
    },
    {
      "field": "AcaoPreventiva",
      "label": "AcaoPreventiva",
      "name": "AcaoPreventiva",
      "type": "string",
      "size": 16
    },
    {
      "field": "DataAcao",
      "label": "DataAcao",
      "name": "DataAcao",
      "type": "date",
      "size": 4
    },
    {
      "field": "UsuarioAcao",
      "label": "UsuarioAcao",
      "name": "UsuarioAcao",
      "type": "string",
      "size": 30
    },
    {
      "field": "PrazoImplemAcao",
      "label": "PrazoImplemAcao",
      "name": "PrazoImplemAcao",
      "type": "date",
      "size": 4
    },
    {
      "field": "DataImplemAcao",
      "label": "DataImplemAcao",
      "name": "DataImplemAcao",
      "type": "date",
      "size": 4
    },
    {
      "field": "UsuarioImplemAcao",
      "label": "UsuarioImplemAcao",
      "name": "UsuarioImplemAcao",
      "type": "string",
      "size": 30
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
    }
  ]
}