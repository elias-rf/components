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
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Operacao",
      label: "Operacao",
      name: "operacao",
      typeField: "string",
      size: 50,
      allowNull: false,
    },
    {
      field: "EhRetrabalho",
      label: "EhRetrabalho",
      name: "eh_retrabalho",
      typeField: "int",
      size: 1,
      allowNull: false,
      defaultValue: "0",
    },
    {
      field: "Especial",
      label: "Especial",
      name: "especial",
      typeField: "int",
      size: 1,
      allowNull: false,
      defaultValue: "0",
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "descricao",
      typeField: "string",
      size: 200,
    },
    {
      field: "Amostragem",
      label: "Amostragem",
      name: "amostragem",
      typeField: "int",
      size: 1,
      defaultValue: "0",
    },
  ],
};
