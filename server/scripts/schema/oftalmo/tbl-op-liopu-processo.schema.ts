import { TTable } from "../../../../types/model";

export const tbl_op_liopu_processo: TTable = {
  database: "oftalmo",
  table: "tbl_op_liopu_processo",
  fields: [
    {
      field: "fkoplio",
      label: "fkoplio",
      name: "fkoplio",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "fkoperacao",
      label: "fkoperacao",
      name: "fkoperacao",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
  ],
};
