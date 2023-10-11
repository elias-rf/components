import { hashObject } from '@/utils/object/hash-object'
import { LRUCache } from 'lru-cache'

// https://github.com/rsandor/mkc/tree/master

/**
 * Multi-Key LRU cache.
 * @class
 * @param {object} options Options for the cache.
 */
export function MultiKeyCache(options: any = { max: 10 }) {
  const cache = new LRUCache(options)

  const self = {
    ...cache,
    cache,

    /**
     * Puts an object into the cache with the given key values.
     * @param {object} keyValues Key values that identify the object in the cache.
     * @param object Object to store in the cache.
     */

    set(keyValues: any, object?: any, options?: any) {
      const keyHash = hash(keyValues)
      self.cache.set(keyHash, object, options)
    },

    /**
     * Reports the number of items in the multi-key cache.
     * @return The number of items in the cache.
     */
    itemCount() {
      return self.cache.size
    },

    /**
     * Reports the total length of the items in the multi-key cache.
     * @return The length of the items in the cache.
     */
    length() {
      return self.cache.max
    },

    /**
     * Gets and object from the cache with the given key values.
     * @param {Object} keyValues Key values that identify the object in the cache.
     * @return If found, the object with the given key values. `undefined`
     *   otherwise.
     */
    get(keyValues: any) {
      const keyHash = hash(keyValues)
      return self.cache.get(keyHash)
    },

    /**
     * Determines if an object exists in the cache for the given key values.
     * @param {Object} keyValues Key values that identify the object in the cache.
     * @return {Boolean} `true` if found, `false` otherwise.
     */
    has(keyValues: any) {
      const keyHash = hash(keyValues)
      return self.cache.has(keyHash)
    },

    delete(keyValues: any) {
      const keyHash = hash(keyValues)
      return self.cache.delete(keyHash)
    },

    /**
     * Removes all objects with the given key values.
     *
     * @example
     * // Add two objects
     * cache.set({ type: 'string', id: 1 }, 'one');
     * cache.set({ type: 'number', id: 1 }, 1);
     *
     * // Remove only objects with the key `type === 'string'`
     * // (only the object with type number will remain...)
     * cache.purge({ type: 'string' });
     *
     * @param {Object} keyValues Key values to identify the objects to remove.
     */
    purge(filter: (keyValues: any) => boolean) {
      for (const key of self.keys()) {
        if (filter(parse(key))) {
          self.cache.delete(key)
        }
      }
    },

    /**
     * Clears the entire cache.
     */
    reset() {
      self.cache.clear()
    },

    fetch(keyValues: any, options: any) {
      const keyHash = hash(keyValues)
      return self.cache.fetch(keyHash, options)
    },

    keys() {
      return Array.from(self.cache.keys()) as string[]
    },
  }
  return self
}

/**
 * Hashes a set of key values into a single key.
 * @param {object} keyValues Key values to hash.
 * @return {string} The hash string for the set of key values.
 */
function hash(keyValues: any) {
  return hashObject(keyValues)
}

/**
 * Parses a hashed key value set.
 * @param {string} key Key to parse.
 * @return {object} Set of key values represented by the key.
 */
function parse(key: string) {
  return JSON.parse(key)
}
