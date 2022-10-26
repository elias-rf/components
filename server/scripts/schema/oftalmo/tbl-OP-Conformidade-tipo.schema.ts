import { TEntity } from "../../../../types";

export const tbl_OP_Conformidade_tipo: TEntity = {
  database: "oftalmo",
  table: "tbl_OP_Conformidade_tipo",
  schema: [
    {
      field: "kConformidade",
      label: "kConformidade",
      name: "tbl_OP_Conformidade_tipo_id",
      type: "string",
      size: 100,
      primaryKey: true,
      allowNull: false,
    },
  ],
};
