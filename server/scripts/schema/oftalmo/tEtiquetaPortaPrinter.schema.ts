import { TTableDef } from "@/types/model";

export const tEtiquetaPortaPrinter: TTableDef = {
  database: "oftalmo",
  table: "tEtiquetaPortaPrinter",
  fields: [
    {
      field: "Port",
      label: "Port",
      name: "Port",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",

      allowNull: false,
    },
  ],
};
