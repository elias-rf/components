import { TEntity } from "../../../../types";

export const tbl_Menu_controle: TEntity = {
  database: "oftalmo",
  table: "tbl_Menu_controle",
  fields: [
    {
      field: "Item",
      label: "Item",
      name: "tbl_Menu_controle_id",
      type: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Pai",
      label: "Pai",
      name: "Pai",
      type: "int",
      size: 4,
    },
    {
      field: "Noh",
      label: "Noh",
      name: "Noh",
      type: "int",
      size: 1,
    },
    {
      field: "ItemText",
      label: "ItemText",
      name: "ItemText",
      type: "string",
      size: 100,
    },
    {
      field: "Command",
      label: "Command",
      name: "Command",
      type: "int",
      size: 1,
    },
    {
      field: "Argument",
      label: "Argument",
      name: "Argument",
      type: "string",
      size: 100,
    },
    {
      field: "IconP",
      label: "IconP",
      name: "IconP",
      type: "int",
      size: 1,
    },
    {
      field: "fkObjeto",
      label: "fkObjeto",
      name: "fkObjeto",
      type: "string",
      size: 4,
      allowNull: false,
    },
    {
      field: "ObjetoPai",
      label: "ObjetoPai",
      name: "ObjetoPai",
      type: "string",
      size: 4,
    },
  ],
};
