import { TTableDef } from "../../../../types/model";

export const BancoContaCorrenteBoleto: TTableDef = {
  database: "plano",
  table: "BancoContaCorrenteBoleto",
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
      field: "Especie",
      label: "Especie",
      name: "Especie",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "Aceite",
      label: "Aceite",
      name: "Aceite",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "Moeda",
      label: "Moeda",
      name: "Moeda",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "LocalPagamento",
      label: "LocalPagamento",
      name: "LocalPagamento",
      typeField: "string",
      size: 256,
      allowNull: false,
    },
    {
      field: "NumCarteira",
      label: "NumCarteira",
      name: "NumCarteira",
      typeField: "int",
      size: 5,
    },
    {
      field: "SeqNossoNumero",
      label: "SeqNossoNumero",
      name: "SeqNossoNumero",
      typeField: "int",
      size: 5,
    },
  ],
};
