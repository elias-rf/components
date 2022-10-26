import { TEntity } from "../../../../types";

export const TabChe: TEntity = {
  database: "plano",
  table: "TabChe",
  schema: [
    {
      field: "CdBanco",
      label: "CdBanco",
      name: "CdBanco",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdAgencia",
      label: "CdAgencia",
      name: "CdAgencia",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NumConta",
      label: "NumConta",
      name: "NumConta",
      type: "string",
      size: 12,
      allowNull: false,
    },
    {
      field: "NumCheque",
      label: "NumCheque",
      name: "NumCheque",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "CdFavorecido",
      label: "CdFavorecido",
      name: "CdFavorecido",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "NmFavorecido",
      label: "NmFavorecido",
      name: "NmFavorecido",
      type: "string",
      size: 40,
    },
    {
      field: "DtEmissao",
      label: "DtEmissao",
      name: "DtEmissao",
      type: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "VlCheque",
      label: "VlCheque",
      name: "VlCheque",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "DtPgto",
      label: "DtPgto",
      name: "DtPgto",
      type: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "TxFinalidade",
      label: "TxFinalidade",
      name: "TxFinalidade",
      type: "string",
      size: 4000,
    },
    {
      field: "FgSituacao",
      label: "FgSituacao",
      name: "FgSituacao",
      type: "string",
      size: 1,
    },
  ],
};
