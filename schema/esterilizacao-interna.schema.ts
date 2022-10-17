import { TEntity } from "../types";

export const esterilizacao_interna: TEntity = {
  database: "oftalmo",
  table: "tEsterilizacaoInterna",
  fields: [
    {
      field: "kLoteEstInt",
      label: "Cód",
      name: "esterilizacao_interna_id",
      primaryKey: true,
      type: "int",
    },
    {
      field: "Data",
      label: "Data Envio",
      name: "data_envio",
      type: "date",
    },
    {
      field: "Fechado",
      label: "Fechado",
      name: "is_fechado",
      type: "int",
    },
    {
      field: "Resultado",
      label: "Resultado",
      name: "resultado",
      type: "string",
    },
    {
      field: "UsuarioResultado",
      label: "Responsável Resultado",
      name: "usuario_id_resultado",
      type: "int",
    },
    {
      field: "Obs",
      label: "Observação",
      name: "observacao",
      type: "string",
    },
    {
      field: "DataFechamento",
      label: "Data Fechamento",
      name: "data_fechamento",
      type: "date",
    },
    {
      field: "UsuarioFechamento",
      label: "Responsável Fechamento",
      name: "usuario_id_fechamento",
      type: "int",
    },
    {
      field: "DataHoraAutoclave",
      label: "Data Autoclave",
      name: "data_autoclave",
      type: "date",
    },
  ],
};
