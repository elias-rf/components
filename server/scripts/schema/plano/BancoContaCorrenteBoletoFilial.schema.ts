import { TTableDef } from "@/types/model";

export const BancoContaCorrenteBoletoFilial: TTableDef = {
  database: "plano",
  table: "BancoContaCorrenteBoletoFilial",
  fields: [
    {
      field: "NumBanco",
      label: "NumBanco",
      name: "NumBanco",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumAgencia",
      label: "NumAgencia",
      name: "NumAgencia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumContaCorrente",
      label: "NumContaCorrente",
      name: "NumContaCorrente",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
  ],
};
