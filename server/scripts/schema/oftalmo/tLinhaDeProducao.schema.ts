import { TTable } from "../../../../types";

export const tLinhaDeProducao: TTable = {
  database: "oftalmo",
  table: "tLinhaDeProducao",
  fields: [
    {
      field: "kLinhaDeProducao",
      label: "kLinhaDeProducao",
      name: "tLinhaDeProducao_id",
      type: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "LinhaDeProducao",
      label: "LinhaDeProducao",
      name: "LinhaDeProducao",
      type: "string",
      size: 30,
      allowNull: false,
    },
    {
      field: "CalcularEmProcesso",
      label: "CalcularEmProcesso",
      name: "CalcularEmProcesso",
      type: "int",
      size: 1,
      allowNull: false,
      defaultValue: "1",
    },
    {
      field: "SolicitarLoteBotao",
      label: "SolicitarLoteBotao",
      name: "SolicitarLoteBotao",
      type: "int",
      size: 1,
      allowNull: false,
      defaultValue: "0",
    },
    {
      field: "fkOperacaoQtdEstExt",
      label: "fkOperacaoQtdEstExt",
      name: "fkOperacaoQtdEstExt",
      type: "int",
      size: 4,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      type: "string",
      size: 200,
    },
  ],
};
