import { TTableDef } from "@/types/model";

export const ConfigEtiqEntrega: TTableDef = {
  database: "plano",
  table: "ConfigEtiqEntrega",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "ConfigEtiqEntrega_id",
      typeField: "float",

      scale: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "QtdeEtiquetasHorizontal",
      label: "QtdeEtiquetasHorizontal",
      name: "QtdeEtiquetasHorizontal",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "QtdeEtiquetasVertical",
      label: "QtdeEtiquetasVertical",
      name: "QtdeEtiquetasVertical",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "AlturaEtiqueta",
      label: "AlturaEtiqueta",
      name: "AlturaEtiqueta",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "LarguraEtiqueta",
      label: "LarguraEtiqueta",
      name: "LarguraEtiqueta",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "EspacoDesconsiderarInicio",
      label: "EspacoDesconsiderarInicio",
      name: "EspacoDesconsiderarInicio",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "EspacoDesconsiderarLateral",
      label: "EspacoDesconsiderarLateral",
      name: "EspacoDesconsiderarLateral",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "EspacoDesconsiderarEntreEtiquetas",
      label: "EspacoDesconsiderarEntreEtiquetas",
      name: "EspacoDesconsiderarEntreEtiquetas",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "QtdeLinhasEtiqueta",
      label: "QtdeLinhasEtiqueta",
      name: "QtdeLinhasEtiqueta",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "QtdeCaracteresLinha",
      label: "QtdeCaracteresLinha",
      name: "QtdeCaracteresLinha",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Fonte",
      label: "Fonte",
      name: "Fonte",
      typeField: "string",

      allowNull: false,
    },
  ],
};
