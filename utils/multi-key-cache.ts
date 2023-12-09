import { hashObject } from '@/utils/object/hash-object.js'
import { Cache, TCacheOptions } from './cache.js'

type TMultiKeyCacheOptions = {
  max?: number
  onEvent?: (event: any, description?: any) => void
  ttl?: number
}

// https://github.com/rsandor/mkc/tree/master

/**
 * Multi-Key LRU cache.
 * @class
 * @param {object} options Options for the cache.
 */
export function MultiKeyCache(options: TCacheOptions = {}) {
  const opt = {
    max: 50,
    ...options,
  }
  const cache = new Cache(options)
  opt.onEvent && opt.onEvent('MultiKeyCache created', opt)

  const self = {
    ...cache,
    cache,

    /**
     * Puts an object into the cache with the given key values.
     * @param {object} keyValues Key values that identify the object in the cache.
     * @param object Object to store in the cache.
     */

    set(
      keyValues: any,
      object: any,
      options?: { ttl?: number; size?: number; isPermanet?: boolean }
    ) {
      const keyHash = hash(keyValues)
      self.cache.set(keyHash, object, options)
      opt.onEvent && opt.onEvent('set', keyHash)
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

      const response = self.cache.get(keyHash)
      opt.onEvent && opt.onEvent('get', keyHash)
      return response
    },

    /**
     * Determines if an object exists in the cache for the given key values.
     * @param {Object} keyValues Key values that identify the object in the cache.
     * @return {Boolean} `true` if found, `false` otherwise.
     */
    has(keyValues: any) {
      const keyHash = hash(keyValues)
      const response = self.cache.has(keyHash)
      opt.onEvent && opt.onEvent('has', keyHash)
      return response
    },

    delete(keyValues: any) {
      const keyHash = hash(keyValues)
      opt.onEvent && opt.onEvent('delete', keyHash)
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
      if (typeof filter !== 'function') return
      const list = []
      for (const key of self.keys()) {
        if (filter(parse(key))) {
          list.push(key)
        }
      }
      for (const key of list) {
        self.cache.delete(key)
      }
      opt.onEvent && opt.onEvent('purge', { count: list.length, list })
    },

    purgeTable(table: string) {
      self.purge((key: any) => {
        if (key._tables && key._tables.includes(table)) return true
        if (key._table && key._table === table) return true
        return false
      })
    },

    /**
     * Clears the entire cache.
     */
    reset() {
      self.cache.clearAll()
      opt.onEvent && opt.onEvent('reset')
    },

    memo(
      keyValues: any,
      fn: () => any | Promise<any>,
      options?: { ttl?: number; size?: number; isPermanet?: boolean }
    ) {
      const keyHash = hash(keyValues)
      const response = self.cache.memo(keyHash, fn, options)
      opt.onEvent && opt.onEvent('memo', keyHash)
      return response
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
