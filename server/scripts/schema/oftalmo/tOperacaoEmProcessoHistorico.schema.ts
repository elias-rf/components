import { TTable } from "../../../../types/model";

export const tOperacaoEmProcessoHistorico: TTable = {
  database: "oftalmo",
  table: "tOperacaoEmProcessoHistorico",
  fields: [
    {
      field: "kOperacaoEPH",
      label: "kOperacaoEPH",
      name: "tOperacaoEmProcessoHistorico_id",
      typeField: "int",
      size: 4,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DataRegistro",
      label: "DataRegistro",
      name: "DataRegistro",
      typeField: "date",
      size: 4,
      allowNull: false,
    },
    {
      field: "fkLinhaDeProducao",
      label: "fkLinhaDeProducao",
      name: "fkLinhaDeProducao",
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
