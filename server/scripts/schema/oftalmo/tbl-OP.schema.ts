import { TTableDef } from "@/types/model";

export const tbl_OP: TTableDef = {
  database: "oftalmo",
  table: "tbl_OP",
  fields: [
    {
      field: "kOP",
      label: "kOP",
      name: "tbl_OP_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "fkOPBotao",
      label: "fkOPBotao",
      name: "fkOPBotao",
      typeField: "int",
    },
    {
      field: "fkOPLoop",
      label: "fkOPLoop",
      name: "fkOPLoop",
      typeField: "int",
    },
    {
      field: "fkOPPai",
      label: "fkOPPai",
      name: "fkOPPai",
      typeField: "int",
    },
    {
      field: "fkTipoOP",
      label: "fkTipoOP",
      name: "fkTipoOP",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DataEmissao",
      label: "DataEmissao",
      name: "DataEmissao",
      typeField: "date",
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "int",
    },
    {
      field: "EmProcesso",
      label: "EmProcesso",
      name: "EmProcesso",
      typeField: "int",
    },
    {
      field: "Travado",
      label: "Travado",
      name: "Travado",
      typeField: "int",

      allowNull: false,
      defaultValue: "0",
    },
    {
      field: "NomeUsuario",
      label: "NomeUsuario",
      name: "NomeUsuario",
      typeField: "string",
    },
    {
      field: "Obs",
      label: "Obs",
      name: "Obs",
      typeField: "string",
    },
    {
      field: "fkProdutoItem",
      label: "fkProdutoItem",
      name: "fkProdutoItem",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Broca",
      label: "Broca",
      name: "Broca",
      typeField: "float",
    },
  ],
};
