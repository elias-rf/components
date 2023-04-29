import type { TConnection } from "@mono/models/connections";
import type { TTableDef } from "@mono/types";
import { Knex } from "knex";
import type { TCrudRpc } from "../crud.type";
import { clearFactory } from "./clear-factory";
import { countFactory } from "./count-factory";
import { createFactory } from "./create-factory";
import { delFactory } from "./del-factory";
import { incrementFactory } from "./increment-factory";
import { listFactory } from "./list-factory";
import { readFactory } from "./read-factory";
import { schemaFactory } from "./schema-factory";
import { updateFactory } from "./update-factory";

export const methods = (
  connection: TConnection,
  table: TTableDef
): TCrudRpc => ({
  query: {
    schema: schemaFactory(table),
    clear: clearFactory(table),
    count: countFactory(connection as Knex, table),
    list: listFactory(connection as Knex, table),
    read: readFactory(connection as Knex, table),
  },
  mutation: {
    increment: incrementFactory(connection as Knex, table),
    create: createFactory(connection as Knex, table),
    update: updateFactory(connection as Knex, table),
    del: delFactory(connection as Knex, table),
  },
  connection,
});
