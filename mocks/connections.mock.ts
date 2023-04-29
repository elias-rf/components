import { TConnections } from "@mono/models/connections";
import Knex from "knex";
import { MockClient } from "knex-mock-client";

export const knexMock = Knex({ client: MockClient, dialect: "mssql" });

export const connectionsMock = {
  plano: knexMock,
  oftalmo: knexMock,
  fullvision: knexMock,
} as TConnections;
