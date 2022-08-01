import QuickLRU from "quick-lru";
import { calcMd5 } from "./calc-md5";
const cache = new QuickLRU({ maxSize: 2 });

export function memoize(callback: any) {
  function memoized(...args: any) {
    const hash = calcMd5(args.toString());
    if (cache.has(hash)) return cache.get(hash);
    const rsp = callback(...args);
    cache.set(hash, rsp);
    return rsp;
  }
  return memoized;
}
