import { TTableDef } from "@/types/model";

export const tEsterilizacaoInterna: TTableDef = {
  database: "oftalmo",
  table: "tEsterilizacaoInterna",
  fields: [
    {
      field: "kLoteEstInt",
      label: "kLoteEstInt",
      name: "tEsterilizacaoInterna_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Data",
      label: "Data",
      name: "Data",
      typeField: "datetime",

      scale: 3,
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
      field: "Fechado",
      label: "Fechado",
      name: "Fechado",
      typeField: "int",

      defaultValue: "0",
    },
    {
      field: "UsuarioFechamento",
      label: "UsuarioFechamento",
      name: "UsuarioFechamento",
      typeField: "string",
    },
    {
      field: "DataFechamento",
      label: "DataFechamento",
      name: "DataFechamento",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DataHoraAutoclave",
      label: "DataHoraAutoclave",
      name: "DataHoraAutoclave",
      typeField: "date",
    },
  ],
};
