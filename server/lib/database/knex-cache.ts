import type { Knex } from "knex";
import { calcMd5 } from "../../../utils/calc-md5";
import { cache } from "./cache_";

function generateKey(query: string) {
  return calcMd5(query);
}

export function KnexCache() {
  const cache_ = cache();
  return async function handle(knex: Knex) {
    const keyString = knex.toString();
    const key = generateKey(keyString);
    if (!cache_.has(key)) {
      console.log(`Cache MISS: ${key}`);
      cache_.set(key, knex);
    } else {
      console.log(`Cache HIT: ${key}`);
    }
    return await cache_.get(key);
  };
}
