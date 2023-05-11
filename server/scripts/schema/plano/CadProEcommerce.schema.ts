import { TTableDef } from "@/types/model";

export const CadProEcommerce: TTableDef = {
  database: "plano",
  table: "CadProEcommerce",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Altura",
      label: "Altura",
      name: "Altura",
      typeField: "int",

      scale: 2,
      allowNull: false,
    },
    {
      field: "Largura",
      label: "Largura",
      name: "Largura",
      typeField: "int",

      scale: 2,
      allowNull: false,
    },
    {
      field: "Profundidade",
      label: "Profundidade",
      name: "Profundidade",
      typeField: "int",

      scale: 2,
      allowNull: false,
    },
    {
      field: "FgSincronizar",
      label: "FgSincronizar",
      name: "FgSincronizar",
      typeField: "string",

      allowNull: false,
    },
  ],
};
