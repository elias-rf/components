import { TTableDef } from "@mono/types/model";

export const tMaquinaCheckList: TTableDef = {
  database: "oftalmo",
  table: "tMaquinaCheckList",
  fields: [
    {
      field: "fkMaquina",
      label: "fkMaquina",
      name: "fkMaquina",
      typeField: "string",
      size: 30,
      allowNull: false,
    },
    {
      field: "fkMaquinaCheckListItem",
      label: "fkMaquinaCheckListItem",
      name: "fkMaquinaCheckListItem",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
  ],
};
