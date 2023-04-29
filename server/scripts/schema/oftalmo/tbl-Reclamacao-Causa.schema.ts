import { TTableDef } from "@mono/types/model";

export const tbl_Reclamacao_Causa: TTableDef = {
  database: "oftalmo",
  table: "tbl_Reclamacao_Causa",
  fields: [
    {
      field: "kCausa",
      label: "kCausa",
      name: "tbl_Reclamacao_Causa_id",
      typeField: "string",
      size: 50,
      primaryKey: true,
      allowNull: false,
    },
  ],
};
