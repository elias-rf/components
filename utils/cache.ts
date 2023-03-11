import QuickLRU from "quick-lru";
import { hashObject } from "./object/hash-object";

export const lru = new QuickLRU<string, any>({ maxSize: 500 });
const DEBUG = true;
const CINCO_MINUTOS = 5 * 60;

type TFetchParams = {
  key: string;
  args?: any[];
  callback: any;
  expiresInSeconds?: number;
};

export const cache = {
  fetch({
    key,
    args = [],
    callback,
    expiresInSeconds = CINCO_MINUTOS,
  }: TFetchParams) {
    const hash = key + hashObject(args);
    if (lru.has(hash)) {
      if (DEBUG) {
        console.log(`🟢 CACHED ${hash}`);
      }
      return lru.get(hash);
    }
    if (DEBUG) {
      console.log(`🔴 MISSED ${hash}`);
    }
    const rsp = callback(...args);
    lru.set(hash, rsp, { maxAge: expiresInSeconds * 1000 });
    return rsp;
  },

  clear({ key = "", args }: { key: string; args?: any }) {
    let hash = key + hashObject(args);
    if (hash === "") {
      lru.clear();
      if (DEBUG) {
        console.log(`🟠 CLEAR ALL`);
      }
      return;
    }
    if (args === undefined) {
      hash = key;
    }
    for (const k of lru.keys()) {
      if (k.startsWith(hash)) {
        lru.delete(k);
        if (DEBUG) {
          console.log(`🟠 CLEAR ${k}`);
        }
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
