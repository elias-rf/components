import { TTableDef } from "@/types/model";

export const NotaEntradaRecuperacaoSTItemMovimentoHistorico: TTableDef = {
  database: "plano",
  table: "NotaEntradaRecuperacaoSTItemMovimentoHistorico",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "CdFornecedor",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumNotaSaida",
      label: "NumNotaSaida",
      name: "NumNotaSaida",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "SerieNotaSaida",
      label: "SerieNotaSaida",
      name: "SerieNotaSaida",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ModeloNotaSaida",
      label: "ModeloNotaSaida",
      name: "ModeloNotaSaida",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "SequenciaNotaSaida",
      label: "SequenciaNotaSaida",
      name: "SequenciaNotaSaida",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Data",
      label: "Data",
      name: "Data",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "Usuario",
      label: "Usuario",
      name: "Usuario",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Historico",
      label: "Historico",
      name: "Historico",
      typeField: "string",

      allowNull: false,
    },
  ],
};
