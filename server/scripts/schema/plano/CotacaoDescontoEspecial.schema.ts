import { TEntity } from "@er/types/*";

export const CotacaoDescontoEspecial: TEntity =
  {
  "database": "plano",
  "table": "CotacaoDescontoEspecial",
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
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "CdProduto",
      "type": "string",
      "size": 16,
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
    },
    {
      "field": "DtValidade",
      "label": "DtValidade",
      "name": "DtValidade",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    }
  ]
}
