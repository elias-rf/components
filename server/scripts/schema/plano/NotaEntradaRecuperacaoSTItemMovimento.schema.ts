import { TEntity } from "@er/types/*";

export const NotaEntradaRecuperacaoSTItemMovimento: TEntity =
  {
  "database": "plano",
  "table": "NotaEntradaRecuperacaoSTItemMovimento",
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
      "field": "Quantidade",
      "label": "Quantidade",
      "name": "Quantidade",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "FgSituacao",
      "label": "FgSituacao",
      "name": "FgSituacao",
      "type": "string",
      "size": 1,
      "allowNull": false
    }
  ]
}
