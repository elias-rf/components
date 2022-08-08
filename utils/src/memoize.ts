import QuickLRU from "quick-lru";
import { hashObject } from "./hash-object";
const cache = new QuickLRU({ maxSize: 500 });

const CINCO_MINUTOS = 5 * 60 * 1000;

export function memoize(callback: any, maxAge: number = CINCO_MINUTOS) {
  function memoized(...args: any) {
    const hash = callback.name + hashObject(args);
    if (cache.has(hash)) {
      console.log("CACHED", hash);
      return cache.get(hash);
    }
    console.log("MISSED", hash);
    const rsp = callback(...args);
    cache.set(hash, rsp, { maxAge });
    return rsp;
  }
  return memoized;
}
