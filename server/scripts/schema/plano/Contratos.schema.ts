import { TEntity } from "@er/types/*";

export const Contratos: TEntity =
  {
  "database": "plano",
  "table": "Contratos",
  "fields": [
    {
      "field": "CodCli",
      "label": "CodCli",
      "name": "CodCli",
      "type": "float",
      "size": 8,
      "allowNull": false
    },
    {
      "field": "DiaContr",
      "label": "DiaContr",
      "name": "DiaContr",
      "type": "float",
      "size": 8,
      "allowNull": false
    },
    {
      "field": "Descricao",
      "label": "Descricao",
      "name": "Descricao",
      "type": "string",
      "size": 100
    },
    {
      "field": "Valor",
      "label": "Valor",
      "name": "Valor",
      "type": "float",
      "size": 8
    },
    {
      "field": "Aliquota",
      "label": "Aliquota",
      "name": "Aliquota",
      "type": "float",
      "size": 8
    },
    {
      "field": "PrzVencto",
      "label": "PrzVencto",
      "name": "PrzVencto",
      "type": "float",
      "size": 8
    },
    {
      "field": "Periodo",
      "label": "Periodo",
      "name": "Periodo",
      "type": "int",
      "size": 2
    },
    {
      "field": "DtUltimaPrev",
      "label": "DtUltimaPrev",
      "name": "DtUltimaPrev",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DtProximaPrev",
      "label": "DtProximaPrev",
      "name": "DtProximaPrev",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "FgEmissao",
      "label": "FgEmissao",
      "name": "FgEmissao",
      "type": "string",
      "size": 1
    },
    {
      "field": "SequenciaEmissao",
      "label": "SequenciaEmissao",
      "name": "SequenciaEmissao",
      "type": "int",
      "size": 4
    },
    {
      "field": "DtEmisUltNota",
      "label": "DtEmisUltNota",
      "name": "DtEmisUltNota",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DtInclusao",
      "label": "DtInclusao",
      "name": "DtInclusao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DtProxReajuste",
      "label": "DtProxReajuste",
      "name": "DtProxReajuste",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DtUltReajuste",
      "label": "DtUltReajuste",
      "name": "DtUltReajuste",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "CdProdutoAssociado",
      "label": "CdProdutoAssociado",
      "name": "CdProdutoAssociado",
      "type": "string",
      "size": 15
    },
    {
      "field": "VlInicial",
      "label": "VlInicial",
      "name": "VlInicial",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "QtdeHorasBanco",
      "label": "QtdeHorasBanco",
      "name": "QtdeHorasBanco",
      "type": "int",
      "size": 4
    },
    {
      "field": "VlHoraAvulsa",
      "label": "VlHoraAvulsa",
      "name": "VlHoraAvulsa",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "TempoDeslocamento",
      "label": "TempoDeslocamento",
      "name": "TempoDeslocamento",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "DiaVcto",
      "label": "DiaVcto",
      "name": "DiaVcto",
      "type": "int",
      "size": 2
    },
    {
      "field": "SerieNF",
      "label": "SerieNF",
      "name": "SerieNF",
      "type": "string",
      "size": 3
    },
    {
      "field": "CdTipoContrato",
      "label": "CdTipoContrato",
      "name": "CdTipoContrato",
      "type": "int",
      "size": 2
    },
    {
      "field": "DtUltContagem",
      "label": "DtUltContagem",
      "name": "DtUltContagem",
      "type": "datetime",
      "size": 8,
      "scale": 3
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
      "field": "QtdeHorasContrato",
      "label": "QtdeHorasContrato",
      "name": "QtdeHorasContrato",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "DtInicioFaturamento",
      "label": "DtInicioFaturamento",
      "name": "DtInicioFaturamento",
      "type": "datetime",
      "size": 8,
      "scale": 3
    }
  ]
}
