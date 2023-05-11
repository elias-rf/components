import { TTableDef } from "@/types/model";

export const tbl_OP_LIOPU: TTableDef = {
  database: "oftalmo",
  table: "tbl_OP_LIOPU",
  fields: [
    {
      field: "kOpLIO",
      label: "kOpLIO",
      name: "tbl_OP_LIOPU_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "fkOpBotao",
      label: "fkOpBotao",
      name: "fkOpBotao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "kVia",
      label: "kVia",
      name: "kVia",
      typeField: "float",

      allowNull: false,
    },
    {
      field: "fkOpLoop",
      label: "fkOpLoop",
      name: "fkOpLoop",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NomeUsuario",
      label: "NomeUsuario",
      name: "NomeUsuario",
      typeField: "string",
    },
    {
      field: "DataEmissao",
      label: "DataEmissao",
      name: "DataEmissao",
      typeField: "date",

      allowNull: false,
    },
    {
      field: "Obs",
      label: "Obs",
      name: "Obs",
      typeField: "string",
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "int",
    },
    {
      field: "fkOperacaoProcesso",
      label: "fkOperacaoProcesso",
      name: "fkOperacaoProcesso",
      typeField: "int",
    },
    {
      field: "QtdProcesso",
      label: "QtdProcesso",
      name: "QtdProcesso",
      typeField: "int",
    },
    {
      field: "fkProdutoItem",
      label: "fkProdutoItem",
      name: "fkProdutoItem",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Profundidade",
      label: "Profundidade",
      name: "Profundidade",
      typeField: "float",
    },
    {
      field: "Broca",
      label: "Broca",
      name: "Broca",
      typeField: "float",
    },
    {
      field: "Travado",
      label: "Travado",
      name: "Travado",
      typeField: "int",

      allowNull: false,
      defaultValue: "0",
    },
  ],
};
