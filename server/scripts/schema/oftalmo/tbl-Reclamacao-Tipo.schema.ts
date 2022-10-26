import { TEntity } from "../../../../types";

export const tbl_Reclamacao_Tipo: TEntity = {
  database: "oftalmo",
  table: "tbl_Reclamacao_Tipo",
  schema: [
    {
      field: "kTipo",
      label: "kTipo",
      name: "tbl_Reclamacao_Tipo_id",
      type: "string",
      size: 50,
      primaryKey: true,
      allowNull: false,
    },
  ],
};
