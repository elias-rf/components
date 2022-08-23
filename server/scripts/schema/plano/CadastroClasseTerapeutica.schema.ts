import { TEntity } from "@er/types/*";

export const CadastroClasseTerapeutica: TEntity =
  {
  "database": "plano",
  "table": "CadastroClasseTerapeutica",
  "fields": [
    {
      "field": "CdClasseTerapeutica",
      "label": "CdClasseTerapeutica",
      "name": "CdClasseTerapeutica",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "NmClasseTerapeutica",
      "label": "NmClasseTerapeutica",
      "name": "NmClasseTerapeutica",
      "type": "string",
      "size": 40,
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
    },
    {
      "field": "Observacao",
      "label": "Observacao",
      "name": "Observacao",
      "type": "string",
      "size": 1024
    },
    {
      "field": "Tipo",
      "label": "Tipo",
      "name": "Tipo",
      "type": "int",
      "size": 2
    }
  ]
}
