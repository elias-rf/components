import { TTableDef } from "@/types/model";

export const Contratos: TTableDef = {
  database: "plano",
  table: "Contratos",
  fields: [
    {
      field: "CodCli",
      label: "CodCli",
      name: "CodCli",
      typeField: "float",
      size: 8,
      allowNull: false,
    },
    {
      field: "DiaContr",
      label: "DiaContr",
      name: "DiaContr",
      typeField: "float",
      size: 8,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 100,
    },
    {
      field: "Valor",
      label: "Valor",
      name: "Valor",
      typeField: "float",
      size: 8,
    },
    {
      field: "Aliquota",
      label: "Aliquota",
      name: "Aliquota",
      typeField: "float",
      size: 8,
    },
    {
      field: "PrzVencto",
      label: "PrzVencto",
      name: "PrzVencto",
      typeField: "float",
      size: 8,
    },
    {
      field: "Periodo",
      label: "Periodo",
      name: "Periodo",
      typeField: "int",
      size: 2,
    },
    {
      field: "DtUltimaPrev",
      label: "DtUltimaPrev",
      name: "DtUltimaPrev",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "DtProximaPrev",
      label: "DtProximaPrev",
      name: "DtProximaPrev",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "FgEmissao",
      label: "FgEmissao",
      name: "FgEmissao",
      typeField: "string",
      size: 1,
    },
    {
      field: "SequenciaEmissao",
      label: "SequenciaEmissao",
      name: "SequenciaEmissao",
      typeField: "int",
      size: 4,
    },
    {
      field: "DtEmisUltNota",
      label: "DtEmisUltNota",
      name: "DtEmisUltNota",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "DtInclusao",
      label: "DtInclusao",
      name: "DtInclusao",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "DtProxReajuste",
      label: "DtProxReajuste",
      name: "DtProxReajuste",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "DtUltReajuste",
      label: "DtUltReajuste",
      name: "DtUltReajuste",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "CdProdutoAssociado",
      label: "CdProdutoAssociado",
      name: "CdProdutoAssociado",
      typeField: "string",
      size: 15,
    },
    {
      field: "VlInicial",
      label: "VlInicial",
      name: "VlInicial",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "QtdeHorasBanco",
      label: "QtdeHorasBanco",
      name: "QtdeHorasBanco",
      typeField: "int",
      size: 4,
    },
    {
      field: "VlHoraAvulsa",
      label: "VlHoraAvulsa",
      name: "VlHoraAvulsa",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "TempoDeslocamento",
      label: "TempoDeslocamento",
      name: "TempoDeslocamento",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "DiaVcto",
      label: "DiaVcto",
      name: "DiaVcto",
      typeField: "int",
      size: 2,
    },
    {
      field: "SerieNF",
      label: "SerieNF",
      name: "SerieNF",
      typeField: "string",
      size: 3,
    },
    {
      field: "CdTipoContrato",
      label: "CdTipoContrato",
      name: "CdTipoContrato",
      typeField: "int",
      size: 2,
    },
    {
      field: "DtUltContagem",
      label: "DtUltContagem",
      name: "DtUltContagem",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "QtdeHorasContrato",
      label: "QtdeHorasContrato",
      name: "QtdeHorasContrato",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "DtInicioFaturamento",
      label: "DtInicioFaturamento",
      name: "DtInicioFaturamento",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
  ],
};
