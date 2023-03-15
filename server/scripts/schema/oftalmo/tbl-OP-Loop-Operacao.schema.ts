import { TTable } from "../../../../types/model";

export const tbl_OP_Loop_Operacao: TTable = {
  database: "oftalmo",
  table: "tbl_OP_Loop_Operacao",
  fields: [
    {
      field: "kOpLoopItem",
      label: "kOpLoopItem",
      name: "tbl_OP_Loop_Operacao_id",
      typeField: "int",
      size: 4,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "fkOpLoop",
      label: "fkOpLoop",
      name: "fkOpLoop",
      typeField: "string",
      size: 8,
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
      field: "QtdInicial",
      label: "QtdInicial",
      name: "QtdInicial",
      typeField: "int",
      size: 4,
      defaultValue: "0",
    },
    {
      field: "Rejeitos",
      label: "Rejeitos",
      name: "Rejeitos",
      typeField: "int",
      size: 4,
      defaultValue: "0",
    },
    {
      field: "QtdFinal",
      label: "QtdFinal",
      name: "QtdFinal",
      typeField: "int",
      size: 4,
      defaultValue: "0",
    },
    {
      field: "fkFuncionario",
      label: "fkFuncionario",
      name: "fkFuncionario",
      typeField: "int",
      size: 4,
    },
    {
      field: "DataOp",
      label: "DataOp",
      name: "DataOp",
      typeField: "date",
      size: 4,
    },
  ],
};
