import { TTableDef } from "@/types/model";

export const tbl_OP_Operacao_Item: TTableDef = {
  database: "oftalmo",
  table: "tbl_OP_Operacao_Item",
  fields: [
    {
      field: "kOpLIOItem",
      label: "kOpLIOItem",
      name: "tbl_OP_Operacao_Item_id",
      typeField: "int",

      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "fkOpLIO",
      label: "fkOpLIO",
      name: "fkOpLIO",
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
      field: "QtdInicial",
      label: "QtdInicial",
      name: "QtdInicial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Rejeitos",
      label: "Rejeitos",
      name: "Rejeitos",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Retrabalho",
      label: "Retrabalho",
      name: "Retrabalho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "QtdFinal",
      label: "QtdFinal",
      name: "QtdFinal",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "fkFuncionario",
      label: "fkFuncionario",
      name: "fkFuncionario",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DataOp",
      label: "DataOp",
      name: "DataOp",
      typeField: "date",

      allowNull: false,
    },
    {
      field: "ViaFilha",
      label: "ViaFilha",
      name: "ViaFilha",
      typeField: "float",
    },
  ],
};
