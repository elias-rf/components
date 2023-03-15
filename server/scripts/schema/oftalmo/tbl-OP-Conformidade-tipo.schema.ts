import { TTable } from "../../../../types/model";

export const tbl_OP_Conformidade_tipo: TTable = {
  database: "oftalmo",
  table: "tbl_OP_Conformidade_tipo",
  fields: [
    {
      field: "kConformidade",
      label: "kConformidade",
      name: "tbl_OP_Conformidade_tipo_id",
      typeField: "string",
      size: 100,
      primaryKey: true,
      allowNull: false,
    },
  ],
};
