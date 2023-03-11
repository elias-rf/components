import { Knex } from "knex";
import { TTable } from "../types";
//--
import { clearFactory } from "../server/lib/crud/methods/clear-factory";
import { connectionFactory } from "../server/lib/crud/methods/connection";
import { countFactory } from "../server/lib/crud/methods/count-factory";
import { createFactory } from "../server/lib/crud/methods/create-factory";
import { decrementFactory } from "../server/lib/crud/methods/decrement-factory";
import { delFactory } from "../server/lib/crud/methods/del-factory";
import { incrementFactory } from "../server/lib/crud/methods/increment-factory";
import { listFactory } from "../server/lib/crud/methods/list-factory";
import { nameList } from "../server/lib/crud/methods/name-list";
import { readFactory } from "../server/lib/crud/methods/read-factory";
import { schemaFactory } from "../server/lib/crud/methods/schema-factory";
import { updateFactory } from "../server/lib/crud/methods/update-factory";

export const methods = (connection: Knex, table: TTable) => ({
  clear: clearFactory(table),
  count: countFactory(connection, table),
  create: createFactory(connection, table),
  decrement: decrementFactory(connection, table),
  increment: incrementFactory(connection, table),
  del: delFactory(connection, table),
  update: updateFactory(connection, table),
  list: listFactory(connection, table),
  read: readFactory(connection, table),
  schema: schemaFactory(table),
  connection: connectionFactory(connection),
  nameList: nameList(table),
});

export function crudFactoryMock(connection: Knex, table: TTable) {
  return {
    ...methods(connection, table),
  };
}
