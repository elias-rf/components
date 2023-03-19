import { TTableDef } from "../../../../types/model";

export const tOperacaoEmProcesso: TTableDef = {
  database: "oftalmo",
  table: "tOperacaoEmProcesso",
  fields: [
    {
      field: "kOperacaoEP",
      label: "kOperacaoEP",
      name: "tOperacaoEmProcesso_id",
      typeField: "int",
      size: 4,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "fkOP",
      label: "fkOP",
      name: "fkOP",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "fkOperacao",
      label: "fkOperacao",
      name: "fkOperacao",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
  ],
};
