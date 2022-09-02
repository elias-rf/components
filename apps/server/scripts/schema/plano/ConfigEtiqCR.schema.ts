import { TEntity } from "@er/types/*";

export const ConfigEtiqCR: TEntity =
  {
  "database": "plano",
  "table": "ConfigEtiqCR",
  "fields": [
    {
      "field": "Impressora",
      "label": "Impressora",
      "name": "ConfigEtiqCR_id",
      "type": "string",
      "size": 40,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "QtdeEtiquetasLinha",
      "label": "QtdeEtiquetasLinha",
      "name": "QtdeEtiquetasLinha",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "QtdeEtiquetasColunas",
      "label": "QtdeEtiquetasColunas",
      "name": "QtdeEtiquetasColunas",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "QtdeLinhasInicial",
      "label": "QtdeLinhasInicial",
      "name": "QtdeLinhasInicial",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "EspLateral",
      "label": "EspLateral",
      "name": "EspLateral",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "QtdeCaracteres",
      "label": "QtdeCaracteres",
      "name": "QtdeCaracteres",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "QtdeLinhas",
      "label": "QtdeLinhas",
      "name": "QtdeLinhas",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CaracteresEntreEtiquetas",
      "label": "CaracteresEntreEtiquetas",
      "name": "CaracteresEntreEtiquetas",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "TipoImpressao",
      "label": "TipoImpressao",
      "name": "TipoImpressao",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "AlturaEtiqueta",
      "label": "AlturaEtiqueta",
      "name": "AlturaEtiqueta",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "AlturaPagina",
      "label": "AlturaPagina",
      "name": "AlturaPagina",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Orientacao",
      "label": "Orientacao",
      "name": "Orientacao",
      "type": "string",
      "size": 1
    }
  ]
}
