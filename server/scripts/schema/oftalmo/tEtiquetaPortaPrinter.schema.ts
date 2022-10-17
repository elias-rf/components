import { TEntity } from "../../../../types";

export const tEtiquetaPortaPrinter: TEntity = {
  database: "oftalmo",
  table: "tEtiquetaPortaPrinter",
  fields: [
    {
      field: "Port",
      label: "Port",
      name: "Port",
      type: "string",
      size: 5,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      type: "string",
      size: 50,
      allowNull: false,
    },
  ],
};
