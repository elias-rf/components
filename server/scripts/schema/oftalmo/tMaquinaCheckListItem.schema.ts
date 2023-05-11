import { TTableDef } from "@/types/model";

export const tMaquinaCheckListItem: TTableDef = {
  database: "oftalmo",
  table: "tMaquinaCheckListItem",
  fields: [
    {
      field: "kMaquinaCheckListItem",
      label: "kMaquinaCheckListItem",
      name: "tMaquinaCheckListItem_id",
      typeField: "int",

      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DescricaoItem",
      label: "DescricaoItem",
      name: "DescricaoItem",
      typeField: "string",

      allowNull: false,
    },
  ],
};
