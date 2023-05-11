import { TTableDef } from "@/types/model";

export const LotesAjuste: TTableDef = {
  database: "plano",
  table: "LotesAjuste",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumLote",
      label: "NumLote",
      name: "NumLote",
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
      field: "SaldoAnterior",
      label: "SaldoAnterior",
      name: "SaldoAnterior",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "SaldoNovo",
      label: "SaldoNovo",
      name: "SaldoNovo",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "FgAlteraSaldo",
      label: "FgAlteraSaldo",
      name: "FgAlteraSaldo",
      typeField: "string",

      allowNull: false,
    },
  ],
};
