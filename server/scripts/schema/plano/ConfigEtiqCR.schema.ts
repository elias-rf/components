import { TTableDef } from "../../../../types/model";

export const ConfigEtiqCR: TTableDef = {
  database: "plano",
  table: "ConfigEtiqCR",
  fields: [
    {
      field: "Impressora",
      label: "Impressora",
      name: "ConfigEtiqCR_id",
      typeField: "string",
      size: 40,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "QtdeEtiquetasLinha",
      label: "QtdeEtiquetasLinha",
      name: "QtdeEtiquetasLinha",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "QtdeEtiquetasColunas",
      label: "QtdeEtiquetasColunas",
      name: "QtdeEtiquetasColunas",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "QtdeLinhasInicial",
      label: "QtdeLinhasInicial",
      name: "QtdeLinhasInicial",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "EspLateral",
      label: "EspLateral",
      name: "EspLateral",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "QtdeCaracteres",
      label: "QtdeCaracteres",
      name: "QtdeCaracteres",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "QtdeLinhas",
      label: "QtdeLinhas",
      name: "QtdeLinhas",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CaracteresEntreEtiquetas",
      label: "CaracteresEntreEtiquetas",
      name: "CaracteresEntreEtiquetas",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "TipoImpressao",
      label: "TipoImpressao",
      name: "TipoImpressao",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "AlturaEtiqueta",
      label: "AlturaEtiqueta",
      name: "AlturaEtiqueta",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "AlturaPagina",
      label: "AlturaPagina",
      name: "AlturaPagina",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Orientacao",
      label: "Orientacao",
      name: "Orientacao",
      typeField: "string",
      size: 1,
    },
  ],
};
