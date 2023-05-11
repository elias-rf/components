import { TTableDef } from "@/types/model";

export const tbl_Menu_controle: TTableDef = {
  database: "oftalmo",
  table: "tbl_Menu_controle",
  fields: [
    {
      field: "Item",
      label: "Item",
      name: "tbl_Menu_controle_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Pai",
      label: "Pai",
      name: "Pai",
      typeField: "int",
    },
    {
      field: "Noh",
      label: "Noh",
      name: "Noh",
      typeField: "int",
    },
    {
      field: "ItemText",
      label: "ItemText",
      name: "ItemText",
      typeField: "string",
    },
    {
      field: "Command",
      label: "Command",
      name: "Command",
      typeField: "int",
    },
    {
      field: "Argument",
      label: "Argument",
      name: "Argument",
      typeField: "string",
    },
    {
      field: "IconP",
      label: "IconP",
      name: "IconP",
      typeField: "int",
    },
    {
      field: "fkObjeto",
      label: "fkObjeto",
      name: "fkObjeto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ObjetoPai",
      label: "ObjetoPai",
      name: "ObjetoPai",
      typeField: "string",
    },
  ],
};
