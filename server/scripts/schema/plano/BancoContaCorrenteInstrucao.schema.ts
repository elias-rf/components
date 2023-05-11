import { TTableDef } from "@/types/model";

export const BancoContaCorrenteInstrucao: TTableDef = {
  database: "plano",
  table: "BancoContaCorrenteInstrucao",
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
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Instrucao",
      label: "Instrucao",
      name: "Instrucao",
      typeField: "string",

      allowNull: false,
    },
  ],
};
