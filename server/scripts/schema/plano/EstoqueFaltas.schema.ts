import { TTableDef } from "@/types/model";

export const EstoqueFaltas: TTableDef = {
  database: "plano",
  table: "EstoqueFaltas",
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
      field: "DtInicial",
      label: "DtInicial",
      name: "DtInicial",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "DtFinal",
      label: "DtFinal",
      name: "DtFinal",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
  ],
};
