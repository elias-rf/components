import { TTableDef } from "@/types/model";

export const tOperacaoEmProcesso: TTableDef = {
  database: "oftalmo",
  table: "tOperacaoEmProcesso",
  fields: [
    {
      field: "kOperacaoEP",
      label: "kOperacaoEP",
      name: "tOperacaoEmProcesso_id",
      typeField: "int",

      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "fkOP",
      label: "fkOP",
      name: "fkOP",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "fkOperacao",
      label: "fkOperacao",
      name: "fkOperacao",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "int",

      allowNull: false,
    },
  ],
};
