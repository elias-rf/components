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

      allowNull: false,
    },
    {
      field: "DiaContr",
      label: "DiaContr",
      name: "DiaContr",
      typeField: "float",

      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
    },
    {
      field: "Valor",
      label: "Valor",
      name: "Valor",
      typeField: "float",
    },
    {
      field: "Aliquota",
      label: "Aliquota",
      name: "Aliquota",
      typeField: "float",
    },
    {
      field: "PrzVencto",
      label: "PrzVencto",
      name: "PrzVencto",
      typeField: "float",
    },
    {
      field: "Periodo",
      label: "Periodo",
      name: "Periodo",
      typeField: "int",
    },
    {
      field: "DtUltimaPrev",
      label: "DtUltimaPrev",
      name: "DtUltimaPrev",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtProximaPrev",
      label: "DtProximaPrev",
      name: "DtProximaPrev",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "FgEmissao",
      label: "FgEmissao",
      name: "FgEmissao",
      typeField: "string",
    },
    {
      field: "SequenciaEmissao",
      label: "SequenciaEmissao",
      name: "SequenciaEmissao",
      typeField: "int",
    },
    {
      field: "DtEmisUltNota",
      label: "DtEmisUltNota",
      name: "DtEmisUltNota",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtInclusao",
      label: "DtInclusao",
      name: "DtInclusao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtProxReajuste",
      label: "DtProxReajuste",
      name: "DtProxReajuste",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtUltReajuste",
      label: "DtUltReajuste",
      name: "DtUltReajuste",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "CdProdutoAssociado",
      label: "CdProdutoAssociado",
      name: "CdProdutoAssociado",
      typeField: "string",
    },
    {
      field: "VlInicial",
      label: "VlInicial",
      name: "VlInicial",
      typeField: "float",

      scale: 4,
    },
    {
      field: "QtdeHorasBanco",
      label: "QtdeHorasBanco",
      name: "QtdeHorasBanco",
      typeField: "int",
    },
    {
      field: "VlHoraAvulsa",
      label: "VlHoraAvulsa",
      name: "VlHoraAvulsa",
      typeField: "float",

      scale: 4,
    },
    {
      field: "TempoDeslocamento",
      label: "TempoDeslocamento",
      name: "TempoDeslocamento",
      typeField: "float",

      scale: 4,
    },
    {
      field: "DiaVcto",
      label: "DiaVcto",
      name: "DiaVcto",
      typeField: "int",
    },
    {
      field: "SerieNF",
      label: "SerieNF",
      name: "SerieNF",
      typeField: "string",
    },
    {
      field: "CdTipoContrato",
      label: "CdTipoContrato",
      name: "CdTipoContrato",
      typeField: "int",
    },
    {
      field: "DtUltContagem",
      label: "DtUltContagem",
      name: "DtUltContagem",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "QtdeHorasContrato",
      label: "QtdeHorasContrato",
      name: "QtdeHorasContrato",
      typeField: "float",

      scale: 4,
    },
    {
      field: "DtInicioFaturamento",
      label: "DtInicioFaturamento",
      name: "DtInicioFaturamento",
      typeField: "datetime",

      scale: 3,
    },
  ],
};
