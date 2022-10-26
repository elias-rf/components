import { TEntity } from "../types";

export const esterilizacao_externa: TEntity = {
  database: "oftalmo",
  table: "tEsterilizacaoExterna",
  schema: [
    {
      field: "kLoteEstExt",
      label: "Cód",
      name: "esterilizacao_externa_id",
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
      field: "DataRetorno",
      label: "Data Retorno",
      name: "data_retorno",
      type: "date",
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "quantidade",
      type: "int",
    },
    {
      field: "QtdCaixa",
      label: "Qtd Caixas",
      name: "quantidade_caixa",
      type: "float",
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
      label: "Responsável",
      name: "usuario_id",
      type: "int",
    },
    {
      field: "Obs",
      label: "Observação",
      name: "observacao",
      type: "string",
    },
    {
      field: "LoteEto",
      label: "Lote",
      name: "lote",
      type: "string",
    },
  ],
};
