import Knex from "knex";
import { MockClient } from "knex-mock-client";

export const knexMockMsql = Knex({ client: MockClient, dialect: "mssql" });
