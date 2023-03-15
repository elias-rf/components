import { TTable } from "../../../../types/model";

export const tEsterilizacaoExterna: TTable = {
  database: "oftalmo",
  table: "tEsterilizacaoExterna",
  fields: [
    {
      field: "kLoteEstExt",
      label: "kLoteEstExt",
      name: "tEsterilizacaoExterna_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Data",
      label: "Data",
      name: "Data",
      typeField: "date",
      size: 4,
      allowNull: false,
    },
    {
      field: "DataRetorno",
      label: "DataRetorno",
      name: "DataRetorno",
      typeField: "date",
      size: 4,
      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "int",
      size: 4,
    },
    {
      field: "QtdCaixa",
      label: "QtdCaixa",
      name: "QtdCaixa",
      typeField: "int",
      size: 4,
    },
    {
      field: "Fechado",
      label: "Fechado",
      name: "Fechado",
      typeField: "int",
      size: 1,
      allowNull: false,
      defaultValue: "0",
    },
    {
      field: "Resultado",
      label: "Resultado",
      name: "Resultado",
      typeField: "string",
      size: 1,
    },
    {
      field: "UsuarioResultado",
      label: "UsuarioResultado",
      name: "UsuarioResultado",
      typeField: "string",
      size: 50,
    },
    {
      field: "Obs",
      label: "Obs",
      name: "Obs",
      typeField: "string",
      size: 200,
    },
    {
      field: "LoteEto",
      label: "LoteEto",
      name: "LoteEto",
      typeField: "string",
      size: 50,
    },
  ],
};
