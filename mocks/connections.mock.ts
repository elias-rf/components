import type { TConnections } from "@/config/connections";
import Knex from "knex";
import { MockClient } from "knex-mock-client";

export const knexMockMsql = Knex({ client: MockClient, dialect: "mssql" });
// export const knexMockSqlite = Knex({
//   client: MockClient,
//   dialect: "better-sqlite3",
// });

export const connectionsMock = {
  sys: knexMockMsql,
  plano: knexMockMsql,
  oftalmo: knexMockMsql,
  fullvision: knexMockMsql,
} as TConnections;
