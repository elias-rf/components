import { TEntity } from "@er/types/*";

export const NotaEntradaHistoricoST: TEntity =
  {
  "database": "plano",
  "table": "NotaEntradaHistoricoST",
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
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "CdProduto",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "DtOcorrencia",
      "label": "DtOcorrencia",
      "name": "DtOcorrencia",
      "type": "datetime",
      "size": 8,
      "scale": 3,
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
      "field": "SerieNota",
      "label": "SerieNota",
      "name": "SerieNota",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "ModeloNota",
      "label": "ModeloNota",
      "name": "ModeloNota",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "CdFornecedor",
      "label": "CdFornecedor",
      "name": "CdFornecedor",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "Quantidade",
      "label": "Quantidade",
      "name": "Quantidade",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlBaseCalculoST",
      "label": "VlBaseCalculoST",
      "name": "VlBaseCalculoST",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlICMSST",
      "label": "VlICMSST",
      "name": "VlICMSST",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "FgSituacaoNota",
      "label": "FgSituacaoNota",
      "name": "FgSituacaoNota",
      "type": "string",
      "size": 1,
      "allowNull": false
    }
  ]
}
