import QuickLRU from "quick-lru";
import { hashObject } from "./object/hash-object";

export const lru = new QuickLRU<string, any>({ maxSize: 500 });

const CINCO_MINUTOS = 5 * 60;

type TFetchParams = {
  key: string;
  args?: any[];
  callback: any;
  expiresInSeconds?: number;
  debug?: boolean;
};

export const cache = {
  fetch({
    key,
    args = [],
    callback,
    expiresInSeconds = CINCO_MINUTOS,
    debug = import.meta.env.VITE_DEBUG_CACHE,
  }: TFetchParams) {
    const hash = key + hashObject(args);
    if (lru.has(hash)) {
      if (debug) {
        console.log(`🟢 CACHED ${hash}`);
      }
      return lru.get(hash);
    }
    if (debug) {
      console.log(`🔴 MISSED ${hash}`);
    }
    const rsp = callback(...args);
    lru.set(hash, rsp, { maxAge: expiresInSeconds * 1000 });
    return rsp;
  },

  clear({ key, args }: { key: string; args?: any } = { key: "" }) {
    let hash = key + hashObject(args);
    if (hash === "") {
      lru.clear();
      return;
    }
    if (args === undefined) {
      hash = key;
    }
    for (const k of lru.keys()) {
      if (k.startsWith(hash)) {
        lru.delete(k);
      }
    }
  },
  size() {
    return lru.size;
  },
  keys() {
    return [...lru.keys()];
  },
  lru,
};
