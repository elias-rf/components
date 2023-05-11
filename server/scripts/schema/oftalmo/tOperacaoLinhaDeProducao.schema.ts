import { TTableDef } from "@/types/model";

export const tOperacaoLinhaDeProducao: TTableDef = {
  database: "oftalmo",
  table: "tOperacaoLinhaDeProducao",
  fields: [
    {
      field: "kOperacaoLP",
      label: "kOperacaoLP",
      name: "tOperacaoLinhaDeProducao_id",
      typeField: "int",

      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "fkLinhaDeProducao",
      label: "fkLinhaDeProducao",
      name: "fkLinhaDeProducao",
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
      field: "Condicional",
      label: "Condicional",
      name: "Condicional",
      typeField: "int",

      allowNull: false,
      defaultValue: "0",
    },
    {
      field: "NextOLP",
      label: "NextOLP",
      name: "NextOLP",
      typeField: "int",
    },
    {
      field: "NextOLPRet",
      label: "NextOLPRet",
      name: "NextOLPRet",
      typeField: "int",
    },
    {
      field: "Ordem",
      label: "Ordem",
      name: "Ordem",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "MarcoA",
      label: "MarcoA",
      name: "MarcoA",
      typeField: "int",

      allowNull: false,
      defaultValue: "0",
    },
    {
      field: "CheckOrdem",
      label: "CheckOrdem",
      name: "CheckOrdem",
      typeField: "string",
    },
    {
      field: "CheckOrdemRet",
      label: "CheckOrdemRet",
      name: "CheckOrdemRet",
      typeField: "int",
    },
    {
      field: "CheckOrdemIsNotNeedClosed",
      label: "CheckOrdemIsNotNeedClosed",
      name: "CheckOrdemIsNotNeedClosed",
      typeField: "int",
    },
    {
      field: "CheckQtd",
      label: "CheckQtd",
      name: "CheckQtd",
      typeField: "int",
    },
    {
      field: "CheckQtdRet",
      label: "CheckQtdRet",
      name: "CheckQtdRet",
      typeField: "int",
    },
    {
      field: "CheckAmostragem",
      label: "CheckAmostragem",
      name: "CheckAmostragem",
      typeField: "int",
    },
  ],
};
