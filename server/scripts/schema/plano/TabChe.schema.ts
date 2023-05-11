import { TTableDef } from "@/types/model";

export const TabChe: TTableDef = {
  database: "plano",
  table: "TabChe",
  fields: [
    {
      field: "CdBanco",
      label: "CdBanco",
      name: "CdBanco",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdAgencia",
      label: "CdAgencia",
      name: "CdAgencia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumConta",
      label: "NumConta",
      name: "NumConta",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumCheque",
      label: "NumCheque",
      name: "NumCheque",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdFavorecido",
      label: "CdFavorecido",
      name: "CdFavorecido",
      typeField: "float",

      scale: 4,
    },
    {
      field: "NmFavorecido",
      label: "NmFavorecido",
      name: "NmFavorecido",
      typeField: "string",
    },
    {
      field: "DtEmissao",
      label: "DtEmissao",
      name: "DtEmissao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "VlCheque",
      label: "VlCheque",
      name: "VlCheque",
      typeField: "float",

      scale: 4,
    },
    {
      field: "DtPgto",
      label: "DtPgto",
      name: "DtPgto",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "TxFinalidade",
      label: "TxFinalidade",
      name: "TxFinalidade",
      typeField: "string",
    },
    {
      field: "FgSituacao",
      label: "FgSituacao",
      name: "FgSituacao",
      typeField: "string",
    },
  ],
};
