import { createTracker } from "knex-mock-client";

import { knexMockMsql } from "./connections.mock.mjs";

export function getTracker() {
  return createTracker(knexMockMsql);
}
