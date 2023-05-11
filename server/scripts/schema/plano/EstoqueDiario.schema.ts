import { TTableDef } from "@/types/model";

export const EstoqueDiario: TTableDef = {
  database: "plano",
  table: "EstoqueDiario",
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
      field: "DtBase",
      label: "DtBase",
      name: "DtBase",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "QtdeEstoque",
      label: "QtdeEstoque",
      name: "QtdeEstoque",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
  ],
};
