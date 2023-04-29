import { TTableDef } from "@mono/types";

export const esterilizacao_externa: TTableDef = {
  database: "oftalmo",
  table: "tEsterilizacaoExterna",
  fields: [
    {
      field: "kLoteEstExt",
      label: "Cód",
      name: "esterilizacao_externa_id",
      primaryKey: true,
      typeField: "int",
    },
    {
      field: "Data",
      label: "Data Envio",
      name: "data_envio",
      typeField: "date",
      allowNull: false,
    },
    {
      field: "DataRetorno",
      label: "Data Retorno",
      name: "data_retorno",
      typeField: "date",
      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "quantidade",
      typeField: "int",
    },
    {
      field: "QtdCaixa",
      label: "Qtd Caixas",
      name: "quantidade_caixa",
      typeField: "float",
    },
    {
      field: "Fechado",
      label: "Fechado",
      name: "eh_fechado",
      typeField: "int",
      allowNull: false,
    },
    {
      field: "Resultado",
      label: "Resultado",
      name: "resultado",
      typeField: "string",
    },
    {
      field: "UsuarioResultado",
      label: "Responsável",
      name: "usuario_id",
      typeField: "int",
    },
    {
      field: "Obs",
      label: "Observação",
      name: "observacao",
      typeField: "string",
    },
    {
      field: "LoteEto",
      label: "Lote",
      name: "lote",
      typeField: "string",
    },
  ],
};
