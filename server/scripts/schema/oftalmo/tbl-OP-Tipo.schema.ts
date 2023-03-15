import { TTable } from "../../../../types/model";

export const tbl_OP_Tipo: TTable = {
  database: "oftalmo",
  table: "tbl_OP_Tipo",
  fields: [
    {
      field: "kTipoOP",
      label: "kTipoOP",
      name: "tbl_OP_Tipo_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "TipoOP",
      label: "TipoOP",
      name: "TipoOP",
      typeField: "string",
      size: 50,
      allowNull: false,
    },
  ],
};
