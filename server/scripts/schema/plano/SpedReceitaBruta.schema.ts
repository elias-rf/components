import { TEntity } from "@er/types/*";

export const SpedReceitaBruta: TEntity =
  {
  "database": "plano",
  "table": "SpedReceitaBruta",
  "fields": [
    {
      "field": "CNPJCentralizador",
      "label": "CNPJCentralizador",
      "name": "CNPJCentralizador",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "PeriodoApuracao",
      "label": "PeriodoApuracao",
      "name": "PeriodoApuracao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "VlTributadoInterno",
      "label": "VlTributadoInterno",
      "name": "VlTributadoInterno",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlNaoTributadoIterno",
      "label": "VlNaoTributadoIterno",
      "name": "VlNaoTributadoIterno",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlExportacao",
      "label": "VlExportacao",
      "name": "VlExportacao",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlReceitaCumulativa",
      "label": "VlReceitaCumulativa",
      "name": "VlReceitaCumulativa",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlReceitaBruta",
      "label": "VlReceitaBruta",
      "name": "VlReceitaBruta",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    }
  ]
}
