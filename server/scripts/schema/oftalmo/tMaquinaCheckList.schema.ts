import { TEntity } from "../../../../types";

export const tMaquinaCheckList: TEntity = {
  database: "oftalmo",
  table: "tMaquinaCheckList",
  schema: [
    {
      field: "fkMaquina",
      label: "fkMaquina",
      name: "fkMaquina",
      type: "string",
      size: 30,
      allowNull: false,
    },
    {
      field: "fkMaquinaCheckListItem",
      label: "fkMaquinaCheckListItem",
      name: "fkMaquinaCheckListItem",
      type: "int",
      size: 4,
      allowNull: false,
    },
  ],
};
