import { TTableDef } from "@/types/model";

export const tbl_figura: TTableDef = {
  database: "oftalmo",
  table: "tbl_figura",
  fields: [
    {
      field: "KFigura",
      label: "KFigura",
      name: "tbl_figura_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "TipoFigura",
      label: "TipoFigura",
      name: "TipoFigura",
      typeField: "int",

      allowNull: false,
    },
  ],
};
