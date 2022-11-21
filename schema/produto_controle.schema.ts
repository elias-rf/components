import { TTable } from "../types";

export const produto_controle: TTable = {
  database: "plano",
  table: "Lotes",
  fields: [
    {
      field: "CdLote",
      label: "CdLote",
      name: "controle",
      type: "string",
      size: 18,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "produto_id",
      type: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "fornecedor_id",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "CdNRA",
      label: "CdNRA",
      name: "nra_id",
      type: "string",
      size: 6,
    },
    {
      field: "DtFabricacao",
      label: "DtFabricacao",
      name: "data_fabricacao",
      type: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "DtValidade",
      label: "DtValidade",
      name: "data_validade",
      type: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "DtAnalise",
      label: "DtAnalise",
      name: "data_analise",
      type: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "Aspecto",
      label: "Aspecto",
      name: "aspecto",
      type: "string",
      size: 40,
    },
    {
      field: "FatorCorrecao",
      label: "FatorCorrecao",
      name: "fator_correcao",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Densidade",
      label: "Densidade",
      name: "densidade",
      type: "float",
      size: 4,
    },
    {
      field: "PercentualDiluicao",
      label: "PercentualDiluicao",
      name: "percentual_diluicao",
      type: "float",
      size: 4,
    },
    {
      field: "SituacaoLote",
      label: "SituacaoLote",
      name: "situacao_lote",
      type: "string",
      size: 1,
    },
    {
      field: "SerieNfEntrada",
      label: "SerieNfEntrada",
      name: "serie_id",
      type: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "QtdeAdquirida",
      label: "QtdeAdquirida",
      name: "quantidade_adquirida",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "NumNfEntrada",
      label: "NumNfEntrada",
      name: "nota_id",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "SaldoPeso",
      label: "SaldoPeso",
      name: "saldo_peso",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "DtEntrada",
      label: "DtEntrada",
      name: "data_entrada",
      type: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "DtLimiteUso",
      label: "DtLimiteUso",
      name: "data_limite_uso",
      type: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "TipoLote",
      label: "TipoLote",
      name: "tipo_lote",
      type: "string",
      size: 1,
    },
    {
      field: "IdReduzido",
      label: "IdReduzido",
      name: "IdReduzido",
      type: "float",
      size: 8,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "filial_id",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "modelo_id",
      type: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "NumLote",
      label: "NumLote",
      name: "controle",
      type: "string",
      size: 18,
    },
  ],
};
