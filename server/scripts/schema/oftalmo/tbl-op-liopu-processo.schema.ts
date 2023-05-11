import { TTableDef } from "@/types/model";

export const tbl_op_liopu_processo: TTableDef = {
  database: "oftalmo",
  table: "tbl_op_liopu_processo",
  fields: [
    {
      field: "fkoplio",
      label: "fkoplio",
      name: "fkoplio",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "fkoperacao",
      label: "fkoperacao",
      name: "fkoperacao",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "int",

      allowNull: false,
    },
  ],
};
