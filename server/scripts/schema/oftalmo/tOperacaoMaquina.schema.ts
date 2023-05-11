import { TTableDef } from "@/types/model";

export const tOperacaoMaquina: TTableDef = {
  database: "oftalmo",
  table: "tOperacaoMaquina",
  fields: [
    {
      field: "fkOperacao",
      label: "fkOperacao",
      name: "fkOperacao",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "fkMaquina",
      label: "fkMaquina",
      name: "fkMaquina",
      typeField: "string",

      allowNull: false,
    },
  ],
};
