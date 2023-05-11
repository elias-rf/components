import { TTableDef } from "@/types/model";

export const tEsterilizacaoExterna: TTableDef = {
  database: "oftalmo",
  table: "tEsterilizacaoExterna",
  fields: [
    {
      field: "kLoteEstExt",
      label: "kLoteEstExt",
      name: "tEsterilizacaoExterna_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Data",
      label: "Data",
      name: "Data",
      typeField: "date",

      allowNull: false,
    },
    {
      field: "DataRetorno",
      label: "DataRetorno",
      name: "DataRetorno",
      typeField: "date",

      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "int",
    },
    {
      field: "QtdCaixa",
      label: "QtdCaixa",
      name: "QtdCaixa",
      typeField: "int",
    },
    {
      field: "Fechado",
      label: "Fechado",
      name: "Fechado",
      typeField: "int",

      allowNull: false,
      defaultValue: "0",
    },
    {
      field: "Resultado",
      label: "Resultado",
      name: "Resultado",
      typeField: "string",
    },
    {
      field: "UsuarioResultado",
      label: "UsuarioResultado",
      name: "UsuarioResultado",
      typeField: "string",
    },
    {
      field: "Obs",
      label: "Obs",
      name: "Obs",
      typeField: "string",
    },
    {
      field: "LoteEto",
      label: "LoteEto",
      name: "LoteEto",
      typeField: "string",
    },
  ],
};
