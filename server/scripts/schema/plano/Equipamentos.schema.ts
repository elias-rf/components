import { TEntity } from "@er/types/*";

export const Equipamentos: TEntity =
  {
  "database": "plano",
  "table": "Equipamentos",
  "fields": [
    {
      "field": "CdEquipamento",
      "label": "CdEquipamento",
      "name": "Equipamentos_id",
      "type": "int",
      "size": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "NmEquipamento",
      "label": "NmEquipamento",
      "name": "NmEquipamento",
      "type": "string",
      "size": 40
    }
  ]
}
