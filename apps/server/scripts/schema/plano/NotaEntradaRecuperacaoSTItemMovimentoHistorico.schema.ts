import { TEntity } from "@er/types/*";

export const NotaEntradaRecuperacaoSTItemMovimentoHistorico: TEntity =
  {
  "database": "plano",
  "table": "NotaEntradaRecuperacaoSTItemMovimentoHistorico",
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
      "field": "CdFornecedor",
      "label": "CdFornecedor",
      "name": "CdFornecedor",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "Sequencia",
      "label": "Sequencia",
      "name": "Sequencia",
      "type": "int",
      "size": 5,
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
      "field": "NumNotaSaida",
      "label": "NumNotaSaida",
      "name": "NumNotaSaida",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "SerieNotaSaida",
      "label": "SerieNotaSaida",
      "name": "SerieNotaSaida",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "ModeloNotaSaida",
      "label": "ModeloNotaSaida",
      "name": "ModeloNotaSaida",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "SequenciaNotaSaida",
      "label": "SequenciaNotaSaida",
      "name": "SequenciaNotaSaida",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "Data",
      "label": "Data",
      "name": "Data",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "Usuario",
      "label": "Usuario",
      "name": "Usuario",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "Historico",
      "label": "Historico",
      "name": "Historico",
      "type": "string",
      "size": 1024,
      "allowNull": false
    }
  ]
}
