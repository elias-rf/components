import { TTableDef } from "@/types/model";

export const BancoContaCorrenteBoleto: TTableDef = {
  database: "plano",
  table: "BancoContaCorrenteBoleto",
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
      field: "Especie",
      label: "Especie",
      name: "Especie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Aceite",
      label: "Aceite",
      name: "Aceite",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Moeda",
      label: "Moeda",
      name: "Moeda",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "LocalPagamento",
      label: "LocalPagamento",
      name: "LocalPagamento",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumCarteira",
      label: "NumCarteira",
      name: "NumCarteira",
      typeField: "int",
    },
    {
      field: "SeqNossoNumero",
      label: "SeqNossoNumero",
      name: "SeqNossoNumero",
      typeField: "int",
    },
  ],
};
