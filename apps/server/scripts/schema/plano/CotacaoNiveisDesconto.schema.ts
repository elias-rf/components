import { TEntity } from "@er/types/*";

export const CotacaoNiveisDesconto: TEntity =
  {
  "database": "plano",
  "table": "CotacaoNiveisDesconto",
  "fields": [
    {
      "field": "CdFornecedor",
      "label": "CdFornecedor",
      "name": "CdFornecedor",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CdFabricante",
      "label": "CdFabricante",
      "name": "CdFabricante",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "Nivel1",
      "label": "Nivel1",
      "name": "Nivel1",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "Nivel2",
      "label": "Nivel2",
      "name": "Nivel2",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "Nivel3",
      "label": "Nivel3",
      "name": "Nivel3",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    }
  ]
}
