import { it, expect } from "vitest";
import KnexPlus from "./KnexPlus";
import KnexCache from "./KnexCache";

const knex = KnexPlus({ client: "mssql" });

it("deve fazer algo", async () => {
  const cache = KnexCache();
  cache.set("select * from [teste]", { id: 11 });
  const result = await knex("teste").cache(cache);
  expect(result).toEqual({ id: 11 });
});
