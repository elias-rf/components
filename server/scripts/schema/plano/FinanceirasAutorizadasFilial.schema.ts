import { TEntity } from "@er/types/*";

export const FinanceirasAutorizadasFilial: TEntity =
  {
  "database": "plano",
  "table": "FinanceirasAutorizadasFilial",
  "fields": [
    {
      "field": "CdFinanceira",
      "label": "CdFinanceira",
      "name": "CdFinanceira",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "CdClienteAssociado",
      "label": "CdClienteAssociado",
      "name": "CdClienteAssociado",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "PrazoRecebimento",
      "label": "PrazoRecebimento",
      "name": "PrazoRecebimento",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "TipoRecebimento",
      "label": "TipoRecebimento",
      "name": "TipoRecebimento",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgDiaUtilRecebimento",
      "label": "FgDiaUtilRecebimento",
      "name": "FgDiaUtilRecebimento",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "TaxaAdministracao",
      "label": "TaxaAdministracao",
      "name": "TaxaAdministracao",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "NumParcelas",
      "label": "NumParcelas",
      "name": "NumParcelas",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "CoeficienteCalculoParcela",
      "label": "CoeficienteCalculoParcela",
      "name": "CoeficienteCalculoParcela",
      "type": "int",
      "size": 5,
      "scale": 7,
      "allowNull": false
    },
    {
      "field": "FgAtivo",
      "label": "FgAtivo",
      "name": "FgAtivo",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "DtUltAtualizacao",
      "label": "DtUltAtualizacao",
      "name": "DtUltAtualizacao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    }
  ]
}
