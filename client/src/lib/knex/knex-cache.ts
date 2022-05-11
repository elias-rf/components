import LRU from "lru-cache";
// import sdbm from "sdbm";
import stringify from "json-stable-stringify";

function generateKey(query: string) {
  return query;
  // return sdbm(stringify(query)).toString(36);
}

const lru = new LRU({ max: 100, ttl: 60_000 });

function cacheKnex() {
  const cache = {
    get: (query: string): any => {
      const queryKey = generateKey(query);
      return lru.get(queryKey);
    },
    set: (query: string, data: Object) => {
      const queryKey = generateKey(query);
      lru.set(queryKey, data);
    },
    del: (query: string) => {
      const queryKey = generateKey(query);
      lru.delete(queryKey);
    },
    delOperation: (from: string) => {
      for (const key of lru.keys()) {
        const jsonKey = JSON.parse(key as string);
        if (jsonKey.from === from) {
          lru.delete(key);
        }
      }
    },
    has: (query: string) => {
      const queryKey = generateKey(query);
      const resp = lru.has(queryKey);
      return resp;
    },
    clear: () => lru.clear(),
    keys: () => lru.keys(),
    count: () => lru.size,
  };
  return cache;
}

export default cacheKnex;
