import type { TTableDef } from "@/types";
import { Knex } from "knex";
import { clearFactory } from "./clear-factory";
import { countFactory } from "./count-factory";
import { createFactory } from "./create-factory";
import { delFactory } from "./del-factory";
import { incrementFactory } from "./increment-factory";
import { listFactory } from "./list-factory";
import { readFactory } from "./read-factory";
import { schemaFactory } from "./schema-factory";
import { updateFactory } from "./update-factory";

export const methods = (connection: Knex, table: TTableDef) => ({
  query: {
    schema: schemaFactory(table),
    clear: clearFactory(table),
    count: countFactory(connection, table),
    list: listFactory(connection, table),
    read: readFactory(connection, table),
  },
  mutation: {
    increment: incrementFactory(connection, table),
    create: createFactory(connection, table),
    update: updateFactory(connection, table),
    del: delFactory(connection, table),
  },
  connection,
});
