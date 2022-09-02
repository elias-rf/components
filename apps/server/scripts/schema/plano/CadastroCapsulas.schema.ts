import { TEntity } from "@er/types/*";

export const CadastroCapsulas: TEntity =
  {
  "database": "plano",
  "table": "CadastroCapsulas",
  "fields": [
    {
      "field": "CdCapsula",
      "label": "CdCapsula",
      "name": "CadastroCapsulas_id",
      "type": "int",
      "size": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "NmCapsula",
      "label": "NmCapsula",
      "name": "NmCapsula",
      "type": "string",
      "size": 50,
      "allowNull": false
    },
    {
      "field": "CdCorCapsula",
      "label": "CdCorCapsula",
      "name": "CdCorCapsula",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "Capacidade",
      "label": "Capacidade",
      "name": "Capacidade",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "UnidadeMedida",
      "label": "UnidadeMedida",
      "name": "UnidadeMedida",
      "type": "string",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "CdProdutoAssociado",
      "label": "CdProdutoAssociado",
      "name": "CdProdutoAssociado",
      "type": "string",
      "size": 15,
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
