import { createTracker } from "knex-mock-client";
import * as database from "../database";
import { knexMockMsql } from "./connections.mock";

for (const table in database) {
  //@ts-ignore
  database[table].knex(knexMockMsql);
}

export function getTracker() {
  return createTracker(knexMockMsql);
}
