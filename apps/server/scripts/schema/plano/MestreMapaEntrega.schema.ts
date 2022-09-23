import { TEntity } from "@er/types/*";

export const MestreMapaEntrega: TEntity =
  {
  "database": "plano",
  "table": "MestreMapaEntrega",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "NumMapa",
      "label": "NumMapa",
      "name": "NumMapa",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "DtEmissao",
      "label": "DtEmissao",
      "name": "DtEmissao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "Horario",
      "label": "Horario",
      "name": "Horario",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "CdTransportador",
      "label": "CdTransportador",
      "name": "CdTransportador",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Observacoes",
      "label": "Observacoes",
      "name": "Observacoes",
      "type": "string",
      "size": 1024
    },
    {
      "field": "FgSituacao",
      "label": "FgSituacao",
      "name": "FgSituacao",
      "type": "string",
      "size": 1
    },
    {
      "field": "DtAcerto",
      "label": "DtAcerto",
      "name": "DtAcerto",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "CdUsuarioInc",
      "label": "CdUsuarioInc",
      "name": "CdUsuarioInc",
      "type": "string",
      "size": 10
    },
    {
      "field": "CdUsuarioAce",
      "label": "CdUsuarioAce",
      "name": "CdUsuarioAce",
      "type": "string",
      "size": 10
    },
    {
      "field": "CdPostoAtendimento",
      "label": "CdPostoAtendimento",
      "name": "CdPostoAtendimento",
      "type": "int",
      "size": 4
    },
    {
      "field": "FgConferencia",
      "label": "FgConferencia",
      "name": "FgConferencia",
      "type": "string",
      "size": 1
    }
  ]
}