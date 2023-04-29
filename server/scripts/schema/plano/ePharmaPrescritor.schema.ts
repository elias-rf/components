import { TTableDef } from "@mono/types/model";

export const ePharmaPrescritor: TTableDef = {
  database: "plano",
  table: "ePharmaPrescritor",
  fields: [
    {
      field: "CdTipoPrescritor",
      label: "CdTipoPrescritor",
      name: "ePharmaPrescritor_id",
      typeField: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DescricaoPrescritor",
      label: "DescricaoPrescritor",
      name: "DescricaoPrescritor",
      typeField: "string",
      size: 64,
      allowNull: false,
    },
  ],
};
