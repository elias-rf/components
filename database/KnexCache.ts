import Cache from "./Cache";
import sdbm from "sdbm";

function generateKey(query: string) {
  return sdbm(query).toString(36);
}

function KnexCache() {
  const cache = Cache();
  const cch = {
    get: (query: string): any => {
      const keyFull = generateKey(query);
      return cache.get(keyFull);
    },
    set: (query: string, data: Object) => {
      const keyFull = generateKey(query);
      cache.set(keyFull, data);
    },
    del: (query: string) => {
      const keyFull = generateKey(query);
      cache.del(keyFull);
    },
    has: (query: string) => {
      const keyFull = generateKey(query);
      const resp = cache.has(keyFull);
      return resp;
    },
    clear: () => cache.clear(),
    keys: () => cache.keys(),
    count: () => cache.count(),
  };
  return cch;
}

export default KnexCache;
