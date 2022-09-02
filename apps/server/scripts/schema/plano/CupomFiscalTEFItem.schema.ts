import { TEntity } from "@er/types/*";

export const CupomFiscalTEFItem: TEntity =
  {
  "database": "plano",
  "table": "CupomFiscalTEFItem",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "NumECF",
      "label": "NumECF",
      "name": "NumECF",
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
      "allowNull": false
    },
    {
      "field": "Sequencia",
      "label": "Sequencia",
      "name": "Sequencia",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "TipoCampo",
      "label": "TipoCampo",
      "name": "TipoCampo",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "Conteudo",
      "label": "Conteudo",
      "name": "Conteudo",
      "type": "string",
      "size": 5120,
      "allowNull": false
    }
  ]
}
