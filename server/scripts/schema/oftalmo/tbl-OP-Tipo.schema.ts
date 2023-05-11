import { TTableDef } from "@/types/model";

export const tbl_OP_Tipo: TTableDef = {
  database: "oftalmo",
  table: "tbl_OP_Tipo",
  fields: [
    {
      field: "kTipoOP",
      label: "kTipoOP",
      name: "tbl_OP_Tipo_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "TipoOP",
      label: "TipoOP",
      name: "TipoOP",
      typeField: "string",

      allowNull: false,
    },
  ],
};
