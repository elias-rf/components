import { TTable } from "../../../../types/model";

export const CadProEcommerce: TTable = {
  database: "plano",
  table: "CadProEcommerce",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "Altura",
      label: "Altura",
      name: "Altura",
      typeField: "int",
      size: 9,
      scale: 2,
      allowNull: false,
    },
    {
      field: "Largura",
      label: "Largura",
      name: "Largura",
      typeField: "int",
      size: 9,
      scale: 2,
      allowNull: false,
    },
    {
      field: "Profundidade",
      label: "Profundidade",
      name: "Profundidade",
      typeField: "int",
      size: 9,
      scale: 2,
      allowNull: false,
    },
    {
      field: "FgSincronizar",
      label: "FgSincronizar",
      name: "FgSincronizar",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
  ],
};
