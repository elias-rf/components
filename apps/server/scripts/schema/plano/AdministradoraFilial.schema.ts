import { TEntity } from "@er/types/*";

export const AdministradoraFilial: TEntity =
  {
  "database": "plano",
  "table": "AdministradoraFilial",
  "fields": [
    {
      "field": "CdAdministradora",
      "label": "CdAdministradora",
      "name": "CdAdministradora",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 9,
      "allowNull": false
    }
  ]
}