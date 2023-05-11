import { TTableDef } from "@/types/model";

export const ePharmaPrescritor: TTableDef = {
  database: "plano",
  table: "ePharmaPrescritor",
  fields: [
    {
      field: "CdTipoPrescritor",
      label: "CdTipoPrescritor",
      name: "ePharmaPrescritor_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DescricaoPrescritor",
      label: "DescricaoPrescritor",
      name: "DescricaoPrescritor",
      typeField: "string",

      allowNull: false,
    },
  ],
};
