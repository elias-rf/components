import { TTableDef } from "../../types";

export const esterilizacao_interna: TTableDef = {
  database: "oftalmo",
  table: "tEsterilizacaoInterna",
  fields: [
    {
      field: "kLoteEstInt",
      label: "Cód",
      name: "esterilizacao_interna_id",
      primaryKey: true,
      typeField: "int",
    },
    {
      field: "Data",
      label: "Data Envio",
      name: "data_envio",
      typeField: "date",
    },
    {
      field: "Fechado",
      label: "Fechado",
      name: "eh_fechado",
      typeField: "int",
    },
    {
      field: "Resultado",
      label: "Resultado",
      name: "resultado",
      typeField: "string",
    },
    {
      field: "UsuarioResultado",
      label: "Responsável Resultado",
      name: "usuario_id_resultado",
      typeField: "int",
    },
    {
      field: "Obs",
      label: "Observação",
      name: "observacao",
      typeField: "string",
    },
    {
      field: "DataFechamento",
      label: "Data Fechamento",
      name: "data_fechamento",
      typeField: "date",
    },
    {
      field: "UsuarioFechamento",
      label: "Responsável Fechamento",
      name: "usuario_id_fechamento",
      typeField: "int",
    },
    {
      field: "DataHoraAutoclave",
      label: "Data Autoclave",
      name: "data_autoclave",
      typeField: "date",
    },
  ],
};
