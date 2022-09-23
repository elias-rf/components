import { TEntity } from "@er/types/*";

export const AgendaInteracao: TEntity =
  {
  "database": "plano",
  "table": "AgendaInteracao",
  "fields": [
    {
      "field": "IdCompromisso",
      "label": "IdCompromisso",
      "name": "IdCompromisso",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "Sequencia",
      "label": "Sequencia",
      "name": "Sequencia",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "DtInteracaoPrevista",
      "label": "DtInteracaoPrevista",
      "name": "DtInteracaoPrevista",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "DescricaoInteracaoPrevista",
      "label": "DescricaoInteracaoPrevista",
      "name": "DescricaoInteracaoPrevista",
      "type": "string",
      "size": 512,
      "allowNull": false
    },
    {
      "field": "UsuarioInteracaoPrevista",
      "label": "UsuarioInteracaoPrevista",
      "name": "UsuarioInteracaoPrevista",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "TipoInteracaoPrevista",
      "label": "TipoInteracaoPrevista",
      "name": "TipoInteracaoPrevista",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "DtInteracaoRealizada",
      "label": "DtInteracaoRealizada",
      "name": "DtInteracaoRealizada",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "DescricaoInteracaoRealizada",
      "label": "DescricaoInteracaoRealizada",
      "name": "DescricaoInteracaoRealizada",
      "type": "string",
      "size": 512,
      "allowNull": false
    },
    {
      "field": "UsuarioInteracaoRealizada",
      "label": "UsuarioInteracaoRealizada",
      "name": "UsuarioInteracaoRealizada",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "TipoInteracaoRealizada",
      "label": "TipoInteracaoRealizada",
      "name": "TipoInteracaoRealizada",
      "type": "string",
      "size": 1,
      "allowNull": false
    }
  ]
}