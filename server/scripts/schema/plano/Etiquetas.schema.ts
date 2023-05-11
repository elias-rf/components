import { TTableDef } from "@/types/model";

export const Etiquetas: TTableDef = {
  database: "plano",
  table: "Etiquetas",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
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
      field: "Qtde",
      label: "Qtde",
      name: "Qtde",
      typeField: "int",
    },
    {
      field: "NumSerie",
      label: "NumSerie",
      name: "NumSerie",
      typeField: "string",

      allowNull: false,
    },
  ],
};
