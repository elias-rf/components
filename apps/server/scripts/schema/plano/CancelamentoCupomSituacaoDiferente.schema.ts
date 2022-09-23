import { TEntity } from "@er/types/*";

export const CancelamentoCupomSituacaoDiferente: TEntity =
  {
  "database": "plano",
  "table": "CancelamentoCupomSituacaoDiferente",
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
      "field": "NroPDV",
      "label": "NroPDV",
      "name": "NroPDV",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "NumCupom",
      "label": "NumCupom",
      "name": "NumCupom",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "DtLancamento",
      "label": "DtLancamento",
      "name": "DtLancamento",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "Usuario",
      "label": "Usuario",
      "name": "Usuario",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "Motivo",
      "label": "Motivo",
      "name": "Motivo",
      "type": "string",
      "size": 128,
      "allowNull": false
    },
    {
      "field": "Observacao",
      "label": "Observacao",
      "name": "Observacao",
      "type": "string",
      "size": 256,
      "allowNull": false
    },
    {
      "field": "SerieNotaReferente",
      "label": "SerieNotaReferente",
      "name": "SerieNotaReferente",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "ModeloNotaReferente",
      "label": "ModeloNotaReferente",
      "name": "ModeloNotaReferente",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "NumNotaReferente",
      "label": "NumNotaReferente",
      "name": "NumNotaReferente",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "DtUltAlteracao",
      "label": "DtUltAlteracao",
      "name": "DtUltAlteracao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    }
  ]
}