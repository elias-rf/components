import Knex from "knex";
import { MockClient } from "knex-mock-client";
import { TConnections } from "../types";

export const knexMock = Knex({ client: MockClient, dialect: "mssql" });

export const connectionsMock = {
  plano: knexMock,
  oftalmo: knexMock,
  fullvision: knexMock,
} as TConnections;
