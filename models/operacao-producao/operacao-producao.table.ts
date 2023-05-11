import { TTableDef } from "@/types";

export const operacao_producao: TTableDef = {
  database: "oftalmo",
  table: "tOperacaoDeProducao",
  fields: [
    {
      field: "kOperacao",
      label: "kOperacao",
      name: "operacao_producao_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Operacao",
      label: "Operacao",
      name: "operacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "EhRetrabalho",
      label: "EhRetrabalho",
      name: "eh_retrabalho",
      typeField: "int",

      allowNull: false,
      defaultValue: "0",
    },
    {
      field: "Especial",
      label: "Especial",
      name: "especial",
      typeField: "int",

      allowNull: false,
      defaultValue: "0",
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "descricao",
      typeField: "string",
    },
    {
      field: "Amostragem",
      label: "Amostragem",
      name: "amostragem",
      typeField: "int",

      defaultValue: "0",
    },
  ],
};
