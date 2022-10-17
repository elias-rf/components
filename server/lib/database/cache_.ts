/**
 * Cria um cache quem mantêm estado entre requisições
 * @returns
 */
export function cache() {
  const map = new Map();
  const cache = {
    set: (key: string, value: any) => {
      map.set(key, value);
    },
    get: (key: string) => {
      return map.get(key);
    },
    del: (key: string) => {
      map.delete(key);
    },
    has: (key: string) => {
      return map.has(key);
    },
    keys: () => {
      return map.keys();
    },
    clear: () => {
      map.clear();
    },
    count: () => {
      return map.size;
    },
  };
  return cache;
}
