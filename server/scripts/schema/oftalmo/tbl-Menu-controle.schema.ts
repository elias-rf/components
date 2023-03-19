import { TTableDef } from "../../../../types/model";

export const tbl_Menu_controle: TTableDef = {
  database: "oftalmo",
  table: "tbl_Menu_controle",
  fields: [
    {
      field: "Item",
      label: "Item",
      name: "tbl_Menu_controle_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Pai",
      label: "Pai",
      name: "Pai",
      typeField: "int",
      size: 4,
    },
    {
      field: "Noh",
      label: "Noh",
      name: "Noh",
      typeField: "int",
      size: 1,
    },
    {
      field: "ItemText",
      label: "ItemText",
      name: "ItemText",
      typeField: "string",
      size: 100,
    },
    {
      field: "Command",
      label: "Command",
      name: "Command",
      typeField: "int",
      size: 1,
    },
    {
      field: "Argument",
      label: "Argument",
      name: "Argument",
      typeField: "string",
      size: 100,
    },
    {
      field: "IconP",
      label: "IconP",
      name: "IconP",
      typeField: "int",
      size: 1,
    },
    {
      field: "fkObjeto",
      label: "fkObjeto",
      name: "fkObjeto",
      typeField: "string",
      size: 4,
      allowNull: false,
    },
    {
      field: "ObjetoPai",
      label: "ObjetoPai",
      name: "ObjetoPai",
      typeField: "string",
      size: 4,
    },
  ],
};
