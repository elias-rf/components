import { TTable } from "../../../../types/model";

export const tbl_OP_LIO: TTable = {
  database: "oftalmo",
  table: "tbl_OP_LIO",
  fields: [
    {
      field: "kOpLIO",
      label: "kOpLIO",
      name: "tbl_OP_LIO_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "fkOpBotao",
      label: "fkOpBotao",
      name: "fkOpBotao",
      typeField: "string",
      size: 8,
      allowNull: false,
    },
    {
      field: "kVia",
      label: "kVia",
      name: "kVia",
      typeField: "float",
      size: 4,
      allowNull: false,
    },
    {
      field: "fkOpLoop",
      label: "fkOpLoop",
      name: "fkOpLoop",
      typeField: "string",
      size: 8,
    },
    {
      field: "NomeUsuario",
      label: "NomeUsuario",
      name: "NomeUsuario",
      typeField: "string",
      size: 50,
    },
    {
      field: "DataEmissao",
      label: "DataEmissao",
      name: "DataEmissao",
      typeField: "date",
      size: 4,
      allowNull: false,
    },
    {
      field: "Obs",
      label: "Obs",
      name: "Obs",
      typeField: "string",
      size: 300,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "int",
      size: 4,
    },
    {
      field: "fkOperacaoProcesso",
      label: "fkOperacaoProcesso",
      name: "fkOperacaoProcesso",
      typeField: "int",
      size: 2,
    },
    {
      field: "QtdProcesso",
      label: "QtdProcesso",
      name: "QtdProcesso",
      typeField: "int",
      size: 4,
      defaultValue: "0",
    },
    {
      field: "fkprodutoitem",
      label: "fkprodutoitem",
      name: "fkprodutoitem",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Profundidade",
      label: "Profundidade",
      name: "Profundidade",
      typeField: "float",
      size: 4,
    },
    {
      field: "Broca",
      label: "Broca",
      name: "Broca",
      typeField: "float",
      size: 4,
    },
    {
      field: "Travado",
      label: "Travado",
      name: "Travado",
      typeField: "int",
      size: 1,
      allowNull: false,
      defaultValue: "0",
    },
  ],
};
