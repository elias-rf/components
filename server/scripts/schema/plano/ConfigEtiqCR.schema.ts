import { TTableDef } from "@/types/model";

export const ConfigEtiqCR: TTableDef = {
  database: "plano",
  table: "ConfigEtiqCR",
  fields: [
    {
      field: "Impressora",
      label: "Impressora",
      name: "ConfigEtiqCR_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "QtdeEtiquetasLinha",
      label: "QtdeEtiquetasLinha",
      name: "QtdeEtiquetasLinha",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "QtdeEtiquetasColunas",
      label: "QtdeEtiquetasColunas",
      name: "QtdeEtiquetasColunas",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "QtdeLinhasInicial",
      label: "QtdeLinhasInicial",
      name: "QtdeLinhasInicial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "EspLateral",
      label: "EspLateral",
      name: "EspLateral",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "QtdeCaracteres",
      label: "QtdeCaracteres",
      name: "QtdeCaracteres",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "QtdeLinhas",
      label: "QtdeLinhas",
      name: "QtdeLinhas",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CaracteresEntreEtiquetas",
      label: "CaracteresEntreEtiquetas",
      name: "CaracteresEntreEtiquetas",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "TipoImpressao",
      label: "TipoImpressao",
      name: "TipoImpressao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "AlturaEtiqueta",
      label: "AlturaEtiqueta",
      name: "AlturaEtiqueta",
      typeField: "float",

      scale: 4,
    },
    {
      field: "AlturaPagina",
      label: "AlturaPagina",
      name: "AlturaPagina",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Orientacao",
      label: "Orientacao",
      name: "Orientacao",
      typeField: "string",
    },
  ],
};
