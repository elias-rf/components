import { TTableDef } from "@/types/model";

export const tMaquinaCheckList: TTableDef = {
  database: "oftalmo",
  table: "tMaquinaCheckList",
  fields: [
    {
      field: "fkMaquina",
      label: "fkMaquina",
      name: "fkMaquina",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "fkMaquinaCheckListItem",
      label: "fkMaquinaCheckListItem",
      name: "fkMaquinaCheckListItem",
      typeField: "int",

      allowNull: false,
    },
  ],
};
