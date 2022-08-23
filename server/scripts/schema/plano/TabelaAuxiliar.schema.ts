import { TEntity } from "@er/types/*";

export const TabelaAuxiliar: TEntity =
  {
  "database": "plano",
  "table": "TabelaAuxiliar",
  "fields": [
    {
      "field": "Tipo",
      "label": "Tipo",
      "name": "Tipo",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "Codigo",
      "label": "Codigo",
      "name": "Codigo",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "Descricao",
      "label": "Descricao",
      "name": "Descricao",
      "type": "string",
      "size": 128,
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
