import { TTableDef } from "@/types/model";

export const tLinhaDeProducao: TTableDef = {
  database: "oftalmo",
  table: "tLinhaDeProducao",
  fields: [
    {
      field: "kLinhaDeProducao",
      label: "kLinhaDeProducao",
      name: "tLinhaDeProducao_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "LinhaDeProducao",
      label: "LinhaDeProducao",
      name: "LinhaDeProducao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CalcularEmProcesso",
      label: "CalcularEmProcesso",
      name: "CalcularEmProcesso",
      typeField: "int",

      allowNull: false,
      defaultValue: "1",
    },
    {
      field: "SolicitarLoteBotao",
      label: "SolicitarLoteBotao",
      name: "SolicitarLoteBotao",
      typeField: "int",

      allowNull: false,
      defaultValue: "0",
    },
    {
      field: "fkOperacaoQtdEstExt",
      label: "fkOperacaoQtdEstExt",
      name: "fkOperacaoQtdEstExt",
      typeField: "int",
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
    },
  ],
};
