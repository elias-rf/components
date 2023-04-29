import { TTableDef } from "@mono/types/model";

export const BancoContaCorrenteInstrucao: TTableDef = {
  database: "plano",
  table: "BancoContaCorrenteInstrucao",
  fields: [
    {
      field: "NumBanco",
      label: "NumBanco",
      name: "NumBanco",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "NumAgencia",
      label: "NumAgencia",
      name: "NumAgencia",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "NumContaCorrente",
      label: "NumContaCorrente",
      name: "NumContaCorrente",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "Instrucao",
      label: "Instrucao",
      name: "Instrucao",
      typeField: "string",
      size: 64,
      allowNull: false,
    },
  ],
};
