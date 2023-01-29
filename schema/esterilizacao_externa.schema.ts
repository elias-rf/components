import { TTable } from "../types";

export const esterilizacao_externa: TTable = {
  database: "oftalmo",
  table: "tEsterilizacaoExterna",
  fields: [
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
      allowNull: false,
    },
    {
      field: "DataRetorno",
      label: "Data Retorno",
      name: "data_retorno",
      type: "date",
      allowNull: false,
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
      name: "eh_fechado",
      type: "int",
      allowNull: false,
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
