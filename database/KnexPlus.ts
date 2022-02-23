import Knex from "knex";
import type { Knex as KnexOriginal } from "knex";

Knex.QueryBuilder.extend("cache", async function (cache: any) {
  const query = this.toString();
  if (cache.has(query)) {
    console.log(
      "🚀 ~ file: knexPlus.ts ~ line 8 ~ cache.has(query)",
      cache.has(query)
    );
    return Promise.resolve(cache.get(query));
  } else {
    const result = await this.clone();
    cache.set(query, result);
    return Promise.resolve(result);
  }
});

export default Knex;
