import { TEntity } from "../../../../types";

export const tMaquinaCheckListItem: TEntity = {
  database: "oftalmo",
  table: "tMaquinaCheckListItem",
  schema: [
    {
      field: "kMaquinaCheckListItem",
      label: "kMaquinaCheckListItem",
      name: "tMaquinaCheckListItem_id",
      type: "int",
      size: 4,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DescricaoItem",
      label: "DescricaoItem",
      name: "DescricaoItem",
      type: "string",
      size: 200,
      allowNull: false,
    },
  ],
};