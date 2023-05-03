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
      size: 4,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "fkOPBotao",
      label: "fkOPBotao",
      name: "fkOPBotao",
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
      field: "DataInicial",
      label: "DataInicial",
      name: "DataInicial",
      typeField: "datetime",
      size: 8,
      scale: 3,
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
  ],
};
