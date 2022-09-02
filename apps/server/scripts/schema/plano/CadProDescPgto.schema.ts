import { TEntity } from "@er/types/*";

export const CadProDescPgto: TEntity =
  {
  "database": "plano",
  "table": "CadProDescPgto",
  "fields": [
    {
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "CdProduto",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "PrazoMedio",
      "label": "PrazoMedio",
      "name": "PrazoMedio",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "DescVendedor",
      "label": "DescVendedor",
      "name": "DescVendedor",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "DescGerente",
      "label": "DescGerente",
      "name": "DescGerente",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "DescVendedorConsFinal",
      "label": "DescVendedorConsFinal",
      "name": "DescVendedorConsFinal",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "DescGerenteConsFinal",
      "label": "DescGerenteConsFinal",
      "name": "DescGerenteConsFinal",
      "type": "float",
      "size": 8,
      "scale": 4
    }
  ]
}
