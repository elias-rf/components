import LRU from "lru-cache";
import sdbm from "sdbm";
import stringify from "json-stable-stringify";

function generateKey(key: string, variables: Object) {
  return key + "|" + sdbm(stringify(variables)).toString(36);
}

const lru = new LRU({ max: 100, ttl: 60_000 });

function cacheGraphql() {
  const cache = {
    get: (key: string, variables: Object): any => {
      const keyFull = generateKey(key, variables);
      return lru.get(keyFull);
    },
    set: (key: string, variables: Object, data: Object) => {
      const keyFull = generateKey(key, variables);
      lru.set(keyFull, data);
    },
    del: (key: string) => {
      let count = 0;
      lru.forEach((_, keyFull) => {
        if (typeof keyFull === "string" && keyFull.startsWith(key + "|")) {
          lru.delete(keyFull);
          count++;
        }
      });
      return count;
    },
    has: (name: string, variables: Object) => {
      const key = generateKey(name, variables);
      const resp = lru.has(key);
      return resp;
    },
    clear: () => lru.clear(),
    keys: () => lru.keys(),
    count: () => lru.size,
  };
  return cache;
}

export default cacheGraphql;
