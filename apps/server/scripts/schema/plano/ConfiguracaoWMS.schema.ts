import { TEntity } from "@er/types/*";

export const ConfiguracaoWMS: TEntity =
  {
  "database": "plano",
  "table": "ConfiguracaoWMS",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "ConfiguracaoWMS_id",
      "type": "int",
      "size": 4,
      "primaryKey": true,
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
      "field": "FgGeraRemessaPedidos",
      "label": "FgGeraRemessaPedidos",
      "name": "FgGeraRemessaPedidos",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgGeraRemessaRecebimento",
      "label": "FgGeraRemessaRecebimento",
      "name": "FgGeraRemessaRecebimento",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgGeraRemessaProdutos",
      "label": "FgGeraRemessaProdutos",
      "name": "FgGeraRemessaProdutos",
      "type": "string",
      "size": 1
    },
    {
      "field": "CaminhoProdutos",
      "label": "CaminhoProdutos",
      "name": "CaminhoProdutos",
      "type": "string",
      "size": 128
    },
    {
      "field": "CaminhoFornecedores",
      "label": "CaminhoFornecedores",
      "name": "CaminhoFornecedores",
      "type": "string",
      "size": 128
    },
    {
      "field": "CaminhoRecebimento",
      "label": "CaminhoRecebimento",
      "name": "CaminhoRecebimento",
      "type": "string",
      "size": 128
    },
    {
      "field": "CaminhoPedidos",
      "label": "CaminhoPedidos",
      "name": "CaminhoPedidos",
      "type": "string",
      "size": 128
    },
    {
      "field": "CaminhoLeituraPedidos",
      "label": "CaminhoLeituraPedidos",
      "name": "CaminhoLeituraPedidos",
      "type": "string",
      "size": 128
    }
  ]
}
