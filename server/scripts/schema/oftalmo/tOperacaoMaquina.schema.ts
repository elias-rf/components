import { TTable } from "../../../../types/model";

export const tOperacaoMaquina: TTable = {
  database: "oftalmo",
  table: "tOperacaoMaquina",
  fields: [
    {
      field: "fkOperacao",
      label: "fkOperacao",
      name: "fkOperacao",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "fkMaquina",
      label: "fkMaquina",
      name: "fkMaquina",
      typeField: "string",
      size: 30,
      allowNull: false,
    },
  ],
};
