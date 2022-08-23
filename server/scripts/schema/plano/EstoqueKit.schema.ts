import { TEntity } from "@er/types/*";

export const EstoqueKit: TEntity =
  {
  "database": "plano",
  "table": "EstoqueKit",
  "fields": [
    {
      "field": "NumProducao",
      "label": "NumProducao",
      "name": "NumProducao",
      "type": "string",
      "size": 15
    },
    {
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "CdProduto",
      "type": "string",
      "size": 15,
      "allowNull": false
    },
    {
      "field": "MestreKit",
      "label": "MestreKit",
      "name": "MestreKit",
      "type": "string",
      "size": 15,
      "allowNull": false
    },
    {
      "field": "DtFabricacao",
      "label": "DtFabricacao",
      "name": "DtFabricacao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DtValidade",
      "label": "DtValidade",
      "name": "DtValidade",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "Quantidade",
      "label": "Quantidade",
      "name": "Quantidade",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "FgImprime",
      "label": "FgImprime",
      "name": "FgImprime",
      "type": "string",
      "size": 1
    },
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    }
  ]
}
