import { TTableDef } from "@/types/model";

export const tbl_OP_Botao_Operacao: TTableDef = {
  database: "oftalmo",
  table: "tbl_OP_Botao_Operacao",
  fields: [
    {
      field: "kOPBotaoItem",
      label: "kOPBotaoItem",
      name: "tbl_OP_Botao_Operacao_id",
      typeField: "int",

      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "fkOPBotao",
      label: "fkOPBotao",
      name: "fkOPBotao",
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
      field: "DataInicial",
      label: "DataInicial",
      name: "DataInicial",
      typeField: "datetime",

      scale: 3,
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
  ],
};
