import { TTableDef } from "@/types";

export const produto_controle: TTableDef = {
  database: "plano",
  table: "Lotes",
  fields: [
    {
      field: "CdLote",
      label: "CdLote",
      name: "controle",
      typeField: "string",

      allowNull: false,
      primaryKey: true,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "produto_plano_id",
      typeField: "string",

      allowNull: false,
      primaryKey: true,
    },
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "fornecedor_id",
      typeField: "float",

      scale: 4,
      allowNull: false,
      primaryKey: true,
    },
    {
      field: "CdNRA",
      label: "CdNRA",
      name: "nra_id",
      typeField: "string",
    },
    {
      field: "DtFabricacao",
      label: "DtFabricacao",
      name: "data_fabricacao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtValidade",
      label: "DtValidade",
      name: "data_validade",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtAnalise",
      label: "DtAnalise",
      name: "data_analise",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "Aspecto",
      label: "Aspecto",
      name: "aspecto",
      typeField: "string",
    },
    {
      field: "FatorCorrecao",
      label: "FatorCorrecao",
      name: "fator_correcao",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Densidade",
      label: "Densidade",
      name: "densidade",
      typeField: "float",
    },
    {
      field: "PercentualDiluicao",
      label: "PercentualDiluicao",
      name: "percentual_diluicao",
      typeField: "float",
    },
    {
      field: "SituacaoLote",
      label: "SituacaoLote",
      name: "situacao_lote",
      typeField: "string",
    },
    {
      field: "SerieNfEntrada",
      label: "SerieNfEntrada",
      name: "serie_id",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "QtdeAdquirida",
      label: "QtdeAdquirida",
      name: "quantidade_adquirida",
      typeField: "float",

      scale: 4,
    },
    {
      field: "NumNfEntrada",
      label: "NumNfEntrada",
      name: "nota_id",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "SaldoPeso",
      label: "SaldoPeso",
      name: "saldo_peso",
      typeField: "float",

      scale: 4,
    },
    {
      field: "DtEntrada",
      label: "DtEntrada",
      name: "data_entrada",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtLimiteUso",
      label: "DtLimiteUso",
      name: "data_limite_uso",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "TipoLote",
      label: "TipoLote",
      name: "tipo_lote",
      typeField: "string",
    },
    {
      field: "IdReduzido",
      label: "IdReduzido",
      name: "IdReduzido",
      typeField: "float",
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "filial_id",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "modelo_id",
      typeField: "string",

      allowNull: false,
    },
    // {
    //   field: "NumLote",
    //   label: "NumLote",
    //   name: "controle",
    //   typeField: "string",
    //
    // },
  ],
};
