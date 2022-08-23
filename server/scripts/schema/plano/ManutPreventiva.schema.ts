import { TEntity } from "@er/types/*";

export const ManutPreventiva: TEntity =
  {
  "database": "plano",
  "table": "ManutPreventiva",
  "fields": [
    {
      "field": "CdCliente",
      "label": "CdCliente",
      "name": "CdCliente",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "Sequencia",
      "label": "Sequencia",
      "name": "Sequencia",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CdEquipamento",
      "label": "CdEquipamento",
      "name": "CdEquipamento",
      "type": "int",
      "size": 4
    },
    {
      "field": "NumSerie",
      "label": "NumSerie",
      "name": "NumSerie",
      "type": "string",
      "size": 20
    },
    {
      "field": "Periodo",
      "label": "Periodo",
      "name": "Periodo",
      "type": "int",
      "size": 4
    },
    {
      "field": "DtultPreventiva",
      "label": "DtultPreventiva",
      "name": "DtultPreventiva",
      "type": "datetime",
      "size": 8,
      "scale": 3
    }
  ]
}
