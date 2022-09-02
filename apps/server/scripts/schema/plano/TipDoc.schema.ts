import { TEntity } from "@er/types/*";

export const TipDoc: TEntity =
  {
  "database": "plano",
  "table": "TipDoc",
  "fields": [
    {
      "field": "Codigo",
      "label": "Codigo",
      "name": "TipDoc_id",
      "type": "string",
      "size": 3,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "Descricao",
      "label": "Descricao",
      "name": "Descricao",
      "type": "string",
      "size": 32
    },
    {
      "field": "FgConsiderarDanfe",
      "label": "FgConsiderarDanfe",
      "name": "FgConsiderarDanfe",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgMovimentoCheque",
      "label": "FgMovimentoCheque",
      "name": "FgMovimentoCheque",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgAtivo",
      "label": "FgAtivo",
      "name": "FgAtivo",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgConsiderarXML",
      "label": "FgConsiderarXML",
      "name": "FgConsiderarXML",
      "type": "string",
      "size": 1
    }
  ]
}
