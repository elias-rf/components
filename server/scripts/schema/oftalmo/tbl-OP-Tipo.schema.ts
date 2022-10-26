import { TEntity } from "../../../../types";

export const tbl_OP_Tipo: TEntity = {
  database: "oftalmo",
  table: "tbl_OP_Tipo",
  schema: [
    {
      field: "kTipoOP",
      label: "kTipoOP",
      name: "tbl_OP_Tipo_id",
      type: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "TipoOP",
      label: "TipoOP",
      name: "TipoOP",
      type: "string",
      size: 50,
      allowNull: false,
    },
  ],
};
