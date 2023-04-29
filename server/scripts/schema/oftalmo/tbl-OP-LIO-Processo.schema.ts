import { TTableDef } from "@mono/types/model";

export const tbl_OP_LIO_Processo: TTableDef = {
  database: "oftalmo",
  table: "tbl_OP_LIO_Processo",
  fields: [
    {
      field: "fkOPLio",
      label: "fkOPLio",
      name: "fkOPLio",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "fkOperacao",
      label: "fkOperacao",
      name: "fkOperacao",
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
      defaultValue: "0",
    },
  ],
};
