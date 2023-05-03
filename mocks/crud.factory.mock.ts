import { TTableDef } from "@/types/model";
import { Knex } from "knex";
//--
import { clearFactory } from "@/utils/crud/methods/clear-factory";
import { countFactory } from "@/utils/crud/methods/count-factory";
import { createFactory } from "@/utils/crud/methods/create-factory";
import { delFactory } from "@/utils/crud/methods/del-factory";
import { incrementFactory } from "@/utils/crud/methods/increment-factory";
import { listFactory } from "@/utils/crud/methods/list-factory";
import { nameList } from "@/utils/crud/methods/name-list";
import { readFactory } from "@/utils/crud/methods/read-factory";
import { schemaFactory } from "@/utils/crud/methods/schema-factory";
import { updateFactory } from "@/utils/crud/methods/update-factory";

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
