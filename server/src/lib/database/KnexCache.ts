import type { Knex } from "knex";
import Cache from "./Cache";
import md5 from "../../utils/string/calcMd5";

function generateKey(query: string) {
  return md5(query);
}

export default function KnexCache() {
  const cache = Cache();
  return async function handle(knex: Knex) {
    const keyString = knex.toString();
    const key = generateKey(keyString);
    if (!cache.has(key)) {
      console.log(`Cache MISS: ${key}`);
      cache.set(key, knex);
    } else {
      console.log(`Cache HIT: ${key}`);
    }
    return await cache.get(key);
  };
}
