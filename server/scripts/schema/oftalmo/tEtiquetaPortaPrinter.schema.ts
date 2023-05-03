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
      size: 5,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 50,
      allowNull: false,
    },
  ],
};
