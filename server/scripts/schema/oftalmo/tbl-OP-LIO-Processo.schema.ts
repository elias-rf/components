import { TTableDef } from "@/types/model";

export const tbl_OP_LIO_Processo: TTableDef = {
  database: "oftalmo",
  table: "tbl_OP_LIO_Processo",
  fields: [
    {
      field: "fkOPLio",
      label: "fkOPLio",
      name: "fkOPLio",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "fkOperacao",
      label: "fkOperacao",
      name: "fkOperacao",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "int",

      allowNull: false,
      defaultValue: "0",
    },
  ],
};
