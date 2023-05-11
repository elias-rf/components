import { TTableDef } from "@/types/model";

export const tbl_Reclamacao_Tipo: TTableDef = {
  database: "oftalmo",
  table: "tbl_Reclamacao_Tipo",
  fields: [
    {
      field: "kTipo",
      label: "kTipo",
      name: "tbl_Reclamacao_Tipo_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
  ],
};
