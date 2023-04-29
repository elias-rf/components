import { TTableDef } from "@mono/types/model";

export const tMaquinaCheckListItem: TTableDef = {
  database: "oftalmo",
  table: "tMaquinaCheckListItem",
  fields: [
    {
      field: "kMaquinaCheckListItem",
      label: "kMaquinaCheckListItem",
      name: "tMaquinaCheckListItem_id",
      typeField: "int",
      size: 4,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DescricaoItem",
      label: "DescricaoItem",
      name: "DescricaoItem",
      typeField: "string",
      size: 200,
      allowNull: false,
    },
  ],
};
