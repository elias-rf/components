import { TTableDef } from "@/types/model";

export const LotesOrdemProducao: TTableDef = {
  database: "plano",
  table: "LotesOrdemProducao",
  fields: [
    {
      field: "NumFormula",
      label: "NumFormula",
      name: "NumFormula",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdLote",
      label: "CdLote",
      name: "CdLote",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "QtdeLote",
      label: "QtdeLote",
      name: "QtdeLote",
      typeField: "int",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CdFase",
      label: "CdFase",
      name: "CdFase",
      typeField: "int",
    },
    {
      field: "DtFabricacao",
      label: "DtFabricacao",
      name: "DtFabricacao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
  ],
};
