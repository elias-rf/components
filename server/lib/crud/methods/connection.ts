import { Knex } from "knex";

export const connectionFactory = (db: Knex) => (): Knex => {
  return db;
};
