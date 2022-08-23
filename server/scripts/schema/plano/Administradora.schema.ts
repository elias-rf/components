import { TEntity } from "@er/types/*";

export const Administradora: TEntity =
  {
  "database": "plano",
  "table": "Administradora",
  "fields": [
    {
      "field": "CdAdministradora",
      "label": "CdAdministradora",
      "name": "Administradora_id",
      "type": "string",
      "size": 10,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "NmAdministradora",
      "label": "NmAdministradora",
      "name": "NmAdministradora",
      "type": "string",
      "size": 50
    },
    {
      "field": "Taxa",
      "label": "Taxa",
      "name": "Taxa",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Prazo",
      "label": "Prazo",
      "name": "Prazo",
      "type": "int",
      "size": 2
    },
    {
      "field": "CdClienteAssociado",
      "label": "CdClienteAssociado",
      "name": "CdClienteAssociado",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "FgVista",
      "label": "FgVista",
      "name": "FgVista",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgVctoDiaUtil",
      "label": "FgVctoDiaUtil",
      "name": "FgVctoDiaUtil",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgTef",
      "label": "FgTef",
      "name": "FgTef",
      "type": "string",
      "size": 1
    },
    {
      "field": "TipoPrazoRecebimento",
      "label": "TipoPrazoRecebimento",
      "name": "TipoPrazoRecebimento",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgTipoCartao",
      "label": "FgTipoCartao",
      "name": "FgTipoCartao",
      "type": "string",
      "size": 1
    },
    {
      "field": "TipoOperacao",
      "label": "TipoOperacao",
      "name": "TipoOperacao",
      "type": "string",
      "size": 1
    },
    {
      "field": "NumMinimoParcelas",
      "label": "NumMinimoParcelas",
      "name": "NumMinimoParcelas",
      "type": "int",
      "size": 5
    },
    {
      "field": "NumMaximoParcelas",
      "label": "NumMaximoParcelas",
      "name": "NumMaximoParcelas",
      "type": "int",
      "size": 5
    },
    {
      "field": "Bandeira",
      "label": "Bandeira",
      "name": "Bandeira",
      "type": "int",
      "size": 2
    },
    {
      "field": "CNPJCredenciadora",
      "label": "CNPJCredenciadora",
      "name": "CNPJCredenciadora",
      "type": "int",
      "size": 9
    },
    {
      "field": "CdCredenciadora",
      "label": "CdCredenciadora",
      "name": "CdCredenciadora",
      "type": "int",
      "size": 5
    }
  ]
}
