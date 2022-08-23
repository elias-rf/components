import { TEntity } from "@er/types/*";

export const Componentes: TEntity =
  {
  "database": "plano",
  "table": "Componentes",
  "fields": [
    {
      "field": "CdKit",
      "label": "CdKit",
      "name": "CdKit",
      "type": "string",
      "size": 15,
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
      "field": "Quantidade",
      "label": "Quantidade",
      "name": "Quantidade",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "UnidadeMedida",
      "label": "UnidadeMedida",
      "name": "UnidadeMedida",
      "type": "string",
      "size": 4
    },
    {
      "field": "FgQsp",
      "label": "FgQsp",
      "name": "FgQsp",
      "type": "string",
      "size": 1
    },
    {
      "field": "DtUltAlteracao",
      "label": "DtUltAlteracao",
      "name": "DtUltAlteracao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "FgTermo",
      "label": "FgTermo",
      "name": "FgTermo",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgExtrusao",
      "label": "FgExtrusao",
      "name": "FgExtrusao",
      "type": "string",
      "size": 1
    },
    {
      "field": "CaminhoModeloImp",
      "label": "CaminhoModeloImp",
      "name": "CaminhoModeloImp",
      "type": "string",
      "size": 256
    }
  ]
}
