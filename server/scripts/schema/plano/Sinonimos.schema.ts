import { TTableDef } from "../../../../types/model";

export const Sinonimos: TTableDef = {
  database: "plano",
  table: "Sinonimos",
  fields: [
    {
      field: "Sinonimo",
      label: "Sinonimo",
      name: "Sinonimo",
      typeField: "string",
      size: 40,
      allowNull: false,
    },
    {
      field: "CdProdutoAssociado",
      label: "CdProdutoAssociado",
      name: "CdProdutoAssociado",
      typeField: "string",
      size: 15,
      allowNull: false,
    },
  ],
};
