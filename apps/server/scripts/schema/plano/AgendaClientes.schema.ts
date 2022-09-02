import { TEntity } from "@er/types/*";

export const AgendaClientes: TEntity =
  {
  "database": "plano",
  "table": "AgendaClientes",
  "fields": [
    {
      "field": "IdCompromisso",
      "label": "IdCompromisso",
      "name": "AgendaClientes_id",
      "type": "int",
      "size": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "NmCliente",
      "label": "NmCliente",
      "name": "NmCliente",
      "type": "string",
      "size": 40
    },
    {
      "field": "Telefone",
      "label": "Telefone",
      "name": "Telefone",
      "type": "string",
      "size": 18
    }
  ]
}
