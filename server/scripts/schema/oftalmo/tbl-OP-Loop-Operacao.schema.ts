import { TTableDef } from "@/types/model";

export const tbl_OP_Loop_Operacao: TTableDef = {
  database: "oftalmo",
  table: "tbl_OP_Loop_Operacao",
  fields: [
    {
      field: "kOpLoopItem",
      label: "kOpLoopItem",
      name: "tbl_OP_Loop_Operacao_id",
      typeField: "int",

      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "fkOpLoop",
      label: "fkOpLoop",
      name: "fkOpLoop",
      typeField: "string",

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

      defaultValue: "0",
    },
    {
      field: "Rejeitos",
      label: "Rejeitos",
      name: "Rejeitos",
      typeField: "int",

      defaultValue: "0",
    },
    {
      field: "QtdFinal",
      label: "QtdFinal",
      name: "QtdFinal",
      typeField: "int",

      defaultValue: "0",
    },
    {
      field: "fkFuncionario",
      label: "fkFuncionario",
      name: "fkFuncionario",
      typeField: "int",

    },
    {
      field: "DataOp",
      label: "DataOp",
      name: "DataOp",
      typeField: "date",

    },
  ],
};
