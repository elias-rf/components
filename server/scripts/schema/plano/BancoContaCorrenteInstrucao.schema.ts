import { TEntity } from "../../../../types";

export const BancoContaCorrenteInstrucao: TEntity = {
  database: "plano",
  table: "BancoContaCorrenteInstrucao",
  fields: [
    {
      field: "NumBanco",
      label: "NumBanco",
      name: "NumBanco",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "NumAgencia",
      label: "NumAgencia",
      name: "NumAgencia",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "NumContaCorrente",
      label: "NumContaCorrente",
      name: "NumContaCorrente",
      type: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "Instrucao",
      label: "Instrucao",
      name: "Instrucao",
      type: "string",
      size: 64,
      allowNull: false,
    },
  ],
};
