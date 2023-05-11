import { TTableDef } from "@/types/model";

export const tbl_Reclamacao_Causa: TTableDef = {
  database: "oftalmo",
  table: "tbl_Reclamacao_Causa",
  fields: [
    {
      field: "kCausa",
      label: "kCausa",
      name: "tbl_Reclamacao_Causa_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
  ],
};
