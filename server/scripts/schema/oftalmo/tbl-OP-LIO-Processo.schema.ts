import { TTable } from "../../../../types";

export const tbl_OP_LIO_Processo: TTable = {
  database: "oftalmo",
  table: "tbl_OP_LIO_Processo",
  fields: [
    {
      field: "fkOPLio",
      label: "fkOPLio",
      name: "fkOPLio",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "fkOperacao",
      label: "fkOperacao",
      name: "fkOperacao",
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
      defaultValue: "0",
    },
  ],
};
