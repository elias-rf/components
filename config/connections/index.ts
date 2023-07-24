import { Knex } from "knex";
import fullvision from "./fullvision.connection";
import oftalmo from "./oftalmo.connection";
import plano from "./plano.connection";
import sys from "./sys.connection";

export const connections: Record<string, Knex> = {
  sys,
  oftalmo,
  plano,
  fullvision,
};

export type TConnection = Knex;
export type TConnections = typeof connections;
export type TDbs = keyof TConnections;
