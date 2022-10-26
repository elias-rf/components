import { TEntity } from "../../../../types";

export const CadProEcommerce: TEntity = {
  database: "plano",
  table: "CadProEcommerce",
  schema: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      type: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "Altura",
      label: "Altura",
      name: "Altura",
      type: "int",
      size: 9,
      scale: 2,
      allowNull: false,
    },
    {
      field: "Largura",
      label: "Largura",
      name: "Largura",
      type: "int",
      size: 9,
      scale: 2,
      allowNull: false,
    },
    {
      field: "Profundidade",
      label: "Profundidade",
      name: "Profundidade",
      type: "int",
      size: 9,
      scale: 2,
      allowNull: false,
    },
    {
      field: "FgSincronizar",
      label: "FgSincronizar",
      name: "FgSincronizar",
      type: "string",
      size: 1,
      allowNull: false,
    },
  ],
};
