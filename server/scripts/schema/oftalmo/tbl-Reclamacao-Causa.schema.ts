import { TEntity } from "../../../../types";

export const tbl_Reclamacao_Causa: TEntity = {
  database: "oftalmo",
  table: "tbl_Reclamacao_Causa",
  schema: [
    {
      field: "kCausa",
      label: "kCausa",
      name: "tbl_Reclamacao_Causa_id",
      type: "string",
      size: 50,
      primaryKey: true,
      allowNull: false,
    },
  ],
};
