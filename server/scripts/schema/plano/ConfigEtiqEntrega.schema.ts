import { TEntity } from "@er/types/*";

export const ConfigEtiqEntrega: TEntity =
  {
  "database": "plano",
  "table": "ConfigEtiqEntrega",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "ConfigEtiqEntrega_id",
      "type": "float",
      "size": 8,
      "scale": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "QtdeEtiquetasHorizontal",
      "label": "QtdeEtiquetasHorizontal",
      "name": "QtdeEtiquetasHorizontal",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "QtdeEtiquetasVertical",
      "label": "QtdeEtiquetasVertical",
      "name": "QtdeEtiquetasVertical",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "AlturaEtiqueta",
      "label": "AlturaEtiqueta",
      "name": "AlturaEtiqueta",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "LarguraEtiqueta",
      "label": "LarguraEtiqueta",
      "name": "LarguraEtiqueta",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "EspacoDesconsiderarInicio",
      "label": "EspacoDesconsiderarInicio",
      "name": "EspacoDesconsiderarInicio",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "EspacoDesconsiderarLateral",
      "label": "EspacoDesconsiderarLateral",
      "name": "EspacoDesconsiderarLateral",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "EspacoDesconsiderarEntreEtiquetas",
      "label": "EspacoDesconsiderarEntreEtiquetas",
      "name": "EspacoDesconsiderarEntreEtiquetas",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "QtdeLinhasEtiqueta",
      "label": "QtdeLinhasEtiqueta",
      "name": "QtdeLinhasEtiqueta",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "QtdeCaracteresLinha",
      "label": "QtdeCaracteresLinha",
      "name": "QtdeCaracteresLinha",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "Fonte",
      "label": "Fonte",
      "name": "Fonte",
      "type": "string",
      "size": 64,
      "allowNull": false
    }
  ]
}
