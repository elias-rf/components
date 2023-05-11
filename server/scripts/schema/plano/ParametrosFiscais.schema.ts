import { TTableDef } from "@/types/model";

export const ParametrosFiscais: TTableDef = {
  database: "plano",
  table: "ParametrosFiscais",
  fields: [
    {
      field: "IdParametro",
      label: "IdParametro",
      name: "ParametrosFiscais_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "TipoMovimentacao",
      label: "TipoMovimentacao",
      name: "TipoMovimentacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CriterioSubstituicao",
      label: "CriterioSubstituicao",
      name: "CriterioSubstituicao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgDetalhaItem",
      label: "FgDetalhaItem",
      name: "FgDetalhaItem",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgAtualizaTabela",
      label: "FgAtualizaTabela",
      name: "FgAtualizaTabela",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgAtualizaAtacado",
      label: "FgAtualizaAtacado",
      name: "FgAtualizaAtacado",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgAtualizaCusto",
      label: "FgAtualizaCusto",
      name: "FgAtualizaCusto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgAtualizaPreco",
      label: "FgAtualizaPreco",
      name: "FgAtualizaPreco",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgConferePreco",
      label: "FgConferePreco",
      name: "FgConferePreco",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgPedido",
      label: "FgPedido",
      name: "FgPedido",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgIntegraCP",
      label: "FgIntegraCP",
      name: "FgIntegraCP",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgIntegraCR",
      label: "FgIntegraCR",
      name: "FgIntegraCR",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "LimiteArredondamento",
      label: "LimiteArredondamento",
      name: "LimiteArredondamento",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
  ],
};
