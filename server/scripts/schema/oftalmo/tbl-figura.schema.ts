import { TTableDef } from "../../../../types/model";

export const tbl_figura: TTableDef = {
  database: "oftalmo",
  table: "tbl_figura",
  fields: [
    {
      field: "KFigura",
      label: "KFigura",
      name: "tbl_figura_id",
      typeField: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "TipoFigura",
      label: "TipoFigura",
      name: "TipoFigura",
      typeField: "int",
      size: 1,
      allowNull: false,
    },
  ],
};
