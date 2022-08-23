import { TEntity } from "@er/types/*";

export const InstrucaoCobranca: TEntity =
  {
  "database": "plano",
  "table": "InstrucaoCobranca",
  "fields": [
    {
      "field": "CdBanco",
      "label": "CdBanco",
      "name": "CdBanco",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "CdInstrucaoCob",
      "label": "CdInstrucaoCob",
      "name": "CdInstrucaoCob",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "DsInstrucaoCob",
      "label": "DsInstrucaoCob",
      "name": "DsInstrucaoCob",
      "type": "string",
      "size": 45
    }
  ]
}
