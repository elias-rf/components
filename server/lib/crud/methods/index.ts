import type { Knex } from "knex";
import type { TTable } from "../../../../types";
//--
import { TCrudRpc } from "../crud.type";
import { clearFactory } from "./clear-factory";
import { connectionFactory } from "./connection";
import { countFactory } from "./count-factory";
import { createFactory } from "./create-factory";
import { decrementFactory } from "./decrement-factory";
import { delFactory } from "./del-factory";
import { incrementFactory } from "./increment-factory";
import { listFactory } from "./list-factory";
import { nameList } from "./name-list";
import { readFactory } from "./read-factory";
import { schemaFactory } from "./schema-factory";
import { updateFactory } from "./update-factory";

export const methods = (connection: Knex, table: TTable): TCrudRpc => ({
  query: {
    schema: schemaFactory(table),
    clear: clearFactory(table),
    count: countFactory(connection, table),
    list: listFactory(connection, table),
    read: readFactory(connection, table),
  },
  mutation: {
    decrement: decrementFactory(connection, table),
    increment: incrementFactory(connection, table),
    create: createFactory(connection, table),
    update: updateFactory(connection, table),
    del: delFactory(connection, table),
  },
  nameList: nameList(table),
  connection: connectionFactory(connection),
});
