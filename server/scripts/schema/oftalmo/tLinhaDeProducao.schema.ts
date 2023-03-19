import { TTableDef } from "../../../../types/model";

export const tLinhaDeProducao: TTableDef = {
  database: "oftalmo",
  table: "tLinhaDeProducao",
  fields: [
    {
      field: "kLinhaDeProducao",
      label: "kLinhaDeProducao",
      name: "tLinhaDeProducao_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "LinhaDeProducao",
      label: "LinhaDeProducao",
      name: "LinhaDeProducao",
      typeField: "string",
      size: 30,
      allowNull: false,
    },
    {
      field: "CalcularEmProcesso",
      label: "CalcularEmProcesso",
      name: "CalcularEmProcesso",
      typeField: "int",
      size: 1,
      allowNull: false,
      defaultValue: "1",
    },
    {
      field: "SolicitarLoteBotao",
      label: "SolicitarLoteBotao",
      name: "SolicitarLoteBotao",
      typeField: "int",
      size: 1,
      allowNull: false,
      defaultValue: "0",
    },
    {
      field: "fkOperacaoQtdEstExt",
      label: "fkOperacaoQtdEstExt",
      name: "fkOperacaoQtdEstExt",
      typeField: "int",
      size: 4,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 200,
    },
  ],
};
