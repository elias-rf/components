import { TTableDef } from "@/types/model";

export const Deposito: TTableDef = {
  database: "plano",
  table: "Deposito",
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
      field: "DtDeposito",
      label: "DtDeposito",
      name: "DtDeposito",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "SeqDep",
      label: "SeqDep",
      name: "SeqDep",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Finalidade",
      label: "Finalidade",
      name: "Finalidade",
      typeField: "string",
    },
    {
      field: "VlDinheiro",
      label: "VlDinheiro",
      name: "VlDinheiro",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlChequePraca",
      label: "VlChequePraca",
      name: "VlChequePraca",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlChequeOutros",
      label: "VlChequeOutros",
      name: "VlChequeOutros",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdFilialAssociada",
      label: "CdFilialAssociada",
      name: "CdFilialAssociada",
      typeField: "int",
    },
    {
      field: "FgSituacao",
      label: "FgSituacao",
      name: "FgSituacao",
      typeField: "string",
    },
  ],
};
