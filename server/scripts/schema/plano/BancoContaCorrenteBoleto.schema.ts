import { TEntity } from "../../../../types";

export const BancoContaCorrenteBoleto: TEntity = {
  database: "plano",
  table: "BancoContaCorrenteBoleto",
  schema: [
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
      field: "Especie",
      label: "Especie",
      name: "Especie",
      type: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "Aceite",
      label: "Aceite",
      name: "Aceite",
      type: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "Moeda",
      label: "Moeda",
      name: "Moeda",
      type: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "LocalPagamento",
      label: "LocalPagamento",
      name: "LocalPagamento",
      type: "string",
      size: 256,
      allowNull: false,
    },
    {
      field: "NumCarteira",
      label: "NumCarteira",
      name: "NumCarteira",
      type: "int",
      size: 5,
    },
    {
      field: "SeqNossoNumero",
      label: "SeqNossoNumero",
      name: "SeqNossoNumero",
      type: "int",
      size: 5,
    },
  ],
};
