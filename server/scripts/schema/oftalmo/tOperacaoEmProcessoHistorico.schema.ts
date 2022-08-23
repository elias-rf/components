import { TEntity } from "@er/types/*";

export const tOperacaoEmProcessoHistorico: TEntity =
  {
  "database": "oftalmo",
  "table": "tOperacaoEmProcessoHistorico",
  "fields": [
    {
      "field": "kOperacaoEPH",
      "label": "kOperacaoEPH",
      "name": "tOperacaoEmProcessoHistorico_id",
      "type": "int",
      "size": 4,
      "autoIncrement": true,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "DataRegistro",
      "label": "DataRegistro",
      "name": "DataRegistro",
      "type": "date",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "fkLinhaDeProducao",
      "label": "fkLinhaDeProducao",
      "name": "fkLinhaDeProducao",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "fkOperacao",
      "label": "fkOperacao",
      "name": "fkOperacao",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "Quantidade",
      "label": "Quantidade",
      "name": "Quantidade",
      "type": "int",
      "size": 4,
      "allowNull": false
    }
  ]
}
