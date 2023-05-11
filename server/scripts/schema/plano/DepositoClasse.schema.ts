import { TTableDef } from "@/types/model";

export const DepositoClasse: TTableDef = {
  database: "plano",
  table: "DepositoClasse",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",

      allowNull: false,
    },
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
      typeField: "string",

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
      field: "NumContaClasse",
      label: "NumContaClasse",
      name: "NumContaClasse",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Percentual",
      label: "Percentual",
      name: "Percentual",
      typeField: "int",

      scale: 2,
      allowNull: false,
    },
  ],
};
