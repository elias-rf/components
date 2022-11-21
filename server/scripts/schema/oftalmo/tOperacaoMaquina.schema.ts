import { TTable } from "../../../../types";

export const tOperacaoMaquina: TTable = {
  database: "oftalmo",
  table: "tOperacaoMaquina",
  fields: [
    {
      field: "fkOperacao",
      label: "fkOperacao",
      name: "fkOperacao",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "fkMaquina",
      label: "fkMaquina",
      name: "fkMaquina",
      type: "string",
      size: 30,
      allowNull: false,
    },
  ],
};
