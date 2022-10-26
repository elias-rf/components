import { TEntity } from "../../../../types";

export const tbl_op_liopu_processo: TEntity = {
  database: "oftalmo",
  table: "tbl_op_liopu_processo",
  schema: [
    {
      field: "fkoplio",
      label: "fkoplio",
      name: "fkoplio",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "fkoperacao",
      label: "fkoperacao",
      name: "fkoperacao",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      type: "int",
      size: 4,
      allowNull: false,
    },
  ],
};
