import { TTable } from "../../../../types";

export const tbl_Reclamacao_Tipo: TTable = {
  database: "oftalmo",
  table: "tbl_Reclamacao_Tipo",
  fields: [
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
