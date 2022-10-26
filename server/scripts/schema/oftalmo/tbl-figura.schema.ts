import { TEntity } from "../../../../types";

export const tbl_figura: TEntity = {
  database: "oftalmo",
  table: "tbl_figura",
  schema: [
    {
      field: "KFigura",
      label: "KFigura",
      name: "tbl_figura_id",
      type: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "TipoFigura",
      label: "TipoFigura",
      name: "TipoFigura",
      type: "int",
      size: 1,
      allowNull: false,
    },
  ],
};
