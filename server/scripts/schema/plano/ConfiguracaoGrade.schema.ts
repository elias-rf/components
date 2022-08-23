import { TEntity } from "@er/types/*";

export const ConfiguracaoGrade: TEntity =
  {
  "database": "plano",
  "table": "ConfiguracaoGrade",
  "fields": [
    {
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "ConfiguracaoGrade_id",
      "type": "string",
      "size": 15,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "FgClassificacaoMercadologica",
      "label": "FgClassificacaoMercadologica",
      "name": "FgClassificacaoMercadologica",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgEmbalagem",
      "label": "FgEmbalagem",
      "name": "FgEmbalagem",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgPrecoTabela",
      "label": "FgPrecoTabela",
      "name": "FgPrecoTabela",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgPrecoCusto",
      "label": "FgPrecoCusto",
      "name": "FgPrecoCusto",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgPrecoVenda",
      "label": "FgPrecoVenda",
      "name": "FgPrecoVenda",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgPrecoPromocao",
      "label": "FgPrecoPromocao",
      "name": "FgPrecoPromocao",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "FgAlteraFamilia",
      "label": "FgAlteraFamilia",
      "name": "FgAlteraFamilia",
      "type": "string",
      "size": 1,
      "allowNull": false
    }
  ]
}
