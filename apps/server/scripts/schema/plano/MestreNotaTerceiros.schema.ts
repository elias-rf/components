import { TEntity } from "@er/types/*";

export const MestreNotaTerceiros: TEntity =
  {
  "database": "plano",
  "table": "MestreNotaTerceiros",
  "fields": [
    {
      "field": "CdEmpresa",
      "label": "CdEmpresa",
      "name": "CdEmpresa",
      "type": "int",
      "size": 9,
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
      "field": "NumNota",
      "label": "NumNota",
      "name": "NumNota",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "Serie",
      "label": "Serie",
      "name": "Serie",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "Modelo",
      "label": "Modelo",
      "name": "Modelo",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "CdFornecedorNotaReferencia",
      "label": "CdFornecedorNotaReferencia",
      "name": "CdFornecedorNotaReferencia",
      "type": "int",
      "size": 9,
      "allowNull": false
    }
  ]
}
