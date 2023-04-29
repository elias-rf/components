import { TTableDef } from "@mono/types/model";
import { Knex } from "knex";
//--
import { clearFactory } from "@mono/utils/crud/methods/clear-factory";
import { countFactory } from "@mono/utils/crud/methods/count-factory";
import { createFactory } from "@mono/utils/crud/methods/create-factory";
import { delFactory } from "@mono/utils/crud/methods/del-factory";
import { incrementFactory } from "@mono/utils/crud/methods/increment-factory";
import { listFactory } from "@mono/utils/crud/methods/list-factory";
import { nameList } from "@mono/utils/crud/methods/name-list";
import { readFactory } from "@mono/utils/crud/methods/read-factory";
import { schemaFactory } from "@mono/utils/crud/methods/schema-factory";
import { updateFactory } from "@mono/utils/crud/methods/update-factory";

export const methods = (connection: Knex, table: TTableDef) => ({
  clear: clearFactory(table),
  count: countFactory(connection, table),
  create: createFactory(connection, table),
  increment: incrementFactory(connection, table),
  del: delFactory(connection, table),
  update: updateFactory(connection, table),
  list: listFactory(connection, table),
  read: readFactory(connection, table),
  schema: schemaFactory(table),
  connection,
  nameList: nameList(table),
});

export function crudFactoryMock(connection: Knex, table: TTableDef) {
  return {
    ...methods(connection, table),
  };
}
