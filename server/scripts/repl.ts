import Knex from "knex";
import { Orm, TConnections, TSchema } from "../src/lib/orm";

const knex = Knex({
  client: "mssql",
});

const connections: TConnections = { ms: knex };

const schema: TSchema = {
  telefone: {
    database: "ms",
    table: "phonebook",
    pk: ["id"],
    fields: [
      { field: "id", name: "ramal", label: "Ramal", type: "number", size: 1 },
    ],
  },
};

const orm = new Orm(connections, schema);

console.log(orm.schema);

let rsp;

rsp = knex
  .from("phonebook")
  .select()
  .column({ a: "id", b: "name", c: "department" })
  .where("id", "<=", 120)
  .toString();

console.log(rsp);

rsp = knex
  .from("phonebook")
  .select({ a: "id", b: "name", c: "department" })
  .where("id", "<=", 120)
  .toString();

console.log(rsp);
