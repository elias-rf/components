import { TTableDef } from "@/types/model";

export const tbl_OP_Conformidade_tipo: TTableDef = {
  database: "oftalmo",
  table: "tbl_OP_Conformidade_tipo",
  fields: [
    {
      field: "kConformidade",
      label: "kConformidade",
      name: "tbl_OP_Conformidade_tipo_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
  ],
};
