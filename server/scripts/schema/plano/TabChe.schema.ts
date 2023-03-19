import { TTableDef } from "../../../../types/model";

export const TabChe: TTableDef = {
  database: "plano",
  table: "TabChe",
  fields: [
    {
      field: "CdBanco",
      label: "CdBanco",
      name: "CdBanco",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdAgencia",
      label: "CdAgencia",
      name: "CdAgencia",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NumConta",
      label: "NumConta",
      name: "NumConta",
      typeField: "string",
      size: 12,
      allowNull: false,
    },
    {
      field: "NumCheque",
      label: "NumCheque",
      name: "NumCheque",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "CdFavorecido",
      label: "CdFavorecido",
      name: "CdFavorecido",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "NmFavorecido",
      label: "NmFavorecido",
      name: "NmFavorecido",
      typeField: "string",
      size: 40,
    },
    {
      field: "DtEmissao",
      label: "DtEmissao",
      name: "DtEmissao",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "VlCheque",
      label: "VlCheque",
      name: "VlCheque",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "DtPgto",
      label: "DtPgto",
      name: "DtPgto",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "TxFinalidade",
      label: "TxFinalidade",
      name: "TxFinalidade",
      typeField: "string",
      size: 4000,
    },
    {
      field: "FgSituacao",
      label: "FgSituacao",
      name: "FgSituacao",
      typeField: "string",
      size: 1,
    },
  ],
};
