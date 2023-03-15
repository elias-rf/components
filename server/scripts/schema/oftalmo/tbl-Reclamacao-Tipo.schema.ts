import { TTable } from "../../../../types/model";

export const tbl_Reclamacao_Tipo: TTable = {
  database: "oftalmo",
  table: "tbl_Reclamacao_Tipo",
  fields: [
    {
      field: "kTipo",
      label: "kTipo",
      name: "tbl_Reclamacao_Tipo_id",
      typeField: "string",
      size: 50,
      primaryKey: true,
      allowNull: false,
    },
  ],
};
