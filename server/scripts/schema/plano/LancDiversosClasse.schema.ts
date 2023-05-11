import { TTableDef } from "@/types/model";

export const LancDiversosClasse: TTableDef = {
  database: "plano",
  table: "LancDiversosClasse",
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
      field: "DtBase",
      label: "DtBase",
      name: "DtBase",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "NumLcto",
      label: "NumLcto",
      name: "NumLcto",
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
