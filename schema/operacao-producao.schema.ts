import { TTable } from "../types";

export const operacao_producao: TTable = {
  database: "oftalmo",
  table: "tOperacaoDeProducao",
  fields: [
    {
      field: "kOperacao",
      label: "kOperacao",
      name: "operacao_producao_id",
      type: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Operacao",
      label: "Operacao",
      name: "operacao",
      type: "string",
      size: 50,
      allowNull: false,
    },
    {
      field: "EhRetrabalho",
      label: "EhRetrabalho",
      name: "eh_retrabalho",
      type: "int",
      size: 1,
      allowNull: false,
      defaultValue: "0",
    },
    {
      field: "Especial",
      label: "Especial",
      name: "especial",
      type: "int",
      size: 1,
      allowNull: false,
      defaultValue: "0",
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "descricao",
      type: "string",
      size: 200,
    },
    {
      field: "Amostragem",
      label: "Amostragem",
      name: "amostragem",
      type: "int",
      size: 1,
      defaultValue: "0",
    },
  ],
};
