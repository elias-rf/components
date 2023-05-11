import { TTableDef } from "@/types/model";

export const tbl_OP_LIOPU_Operacao: TTableDef = {
  database: "oftalmo",
  table: "tbl_OP_LIOPU_Operacao",
  fields: [
    {
      field: "kOpLIOItem",
      label: "kOpLIOItem",
      name: "tbl_OP_LIOPU_Operacao_id",
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
      defaultValue: "0",
    },
    {
      field: "Rejeitos",
      label: "Rejeitos",
      name: "Rejeitos",
      typeField: "int",

      allowNull: false,
      defaultValue: "0",
    },
    {
      field: "Retrabalho",
      label: "Retrabalho",
      name: "Retrabalho",
      typeField: "int",

      allowNull: false,
      defaultValue: "0",
    },
    {
      field: "QtdFinal",
      label: "QtdFinal",
      name: "QtdFinal",
      typeField: "int",

      allowNull: false,
      defaultValue: "0",
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
