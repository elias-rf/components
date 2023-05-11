import { TTableDef } from "@/types/model";

export const tOperacaoEmProcessoHistorico: TTableDef = {
  database: "oftalmo",
  table: "tOperacaoEmProcessoHistorico",
  fields: [
    {
      field: "kOperacaoEPH",
      label: "kOperacaoEPH",
      name: "tOperacaoEmProcessoHistorico_id",
      typeField: "int",

      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DataRegistro",
      label: "DataRegistro",
      name: "DataRegistro",
      typeField: "date",

      allowNull: false,
    },
    {
      field: "fkLinhaDeProducao",
      label: "fkLinhaDeProducao",
      name: "fkLinhaDeProducao",
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
