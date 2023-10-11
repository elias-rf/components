import { hashObject } from '@/utils/object/hash-object'
import { LRUCache } from 'lru-cache'

// https://github.com/rsandor/mkc/tree/master

/**
 * Multi-Key LRU cache.
 * @class
 * @param {object} options Options for the cache.
 */
export function MultiKeyCache(options: any = { max: 10 }) {
  const dispose = options.dispose

  options.dispose = function (value: any, key: string) {
    self._dispose(key)
    if (dispose) {
      dispose(value, key)
    }
  }

  const self: {
    cache: LRUCache<string, any, unknown>
    _keyMap: any
    _dispose: (keyHash: string) => void
    set: (keyValues: any, object: any) => void
    has: (keyValues: any) => boolean
    get: (keyValues: any) => any
    purge: (keyValues: any) => void
    delete: (keyValues: any) => void
    reset: () => void
    itemCount: () => number
    length: () => number
    fetch: (keyValues: any) => Promise<any>
    keys: () => Array<string>
  } = {
    cache: undefined as any,
    _keyMap: {} as { [key: string]: any },

    /**
     * Removes mappings when objects are disposed by the LRU.
     * @param {string} keyHash Key hash for the disposed object.
     */
    _dispose(keyHash: string) {
      const keyValues = parse(keyHash)
      for (const key in keyValues) {
        const value = keyValues[key]
        if (!self._keyMap[key]) {
          continue
        }
        if (!Array.isArray(self._keyMap[key][value])) {
          continue
        }
        const map = self._keyMap[key][value]
        const index = map.indexOf(keyHash)
        if (~index) {
          map.splice(index, 1)
        }
        if (map.length === 0) {
          delete self._keyMap[key][value]
        }
      }
    },

    /**
     * Puts an object into the cache with the given key values.
     * @param {object} keyValues Key values that identify the object in the cache.
     * @param object Object to store in the cache.
     */

    set(keyValues: any, object: any) {
      const keyHash = hash(keyValues)
      for (const key in keyValues) {
        const value = keyValues[key]
        if (!self._keyMap[key]) {
          self._keyMap[key] = {}
        }
        if (!self._keyMap[key][value]) {
          self._keyMap[key][value] = []
        }
        self._keyMap[key][value].push(keyHash)
      }
      self.cache.set(keyHash, object)
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
    get(keyValues) {
      const keyHash = hash(keyValues)
      return self.cache.get(keyHash)
    },

    /**
     * Determines if an object exists in the cache for the given key values.
     * @param {Object} keyValues Key values that identify the object in the cache.
     * @return {Boolean} `true` if found, `false` otherwise.
     */
    has(keyValues) {
      const keyHash = hash(keyValues)
      return self.cache.has(keyHash)
    },

    delete(keyValues) {
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
    purge(keyValues) {
      const delKeyHashSet = {} as { [key: string]: boolean }

      for (const key in keyValues) {
        const value = keyValues[key]

        if (!self._keyMap[key]) {
          continue
        }
        if (!Array.isArray(self._keyMap[key][value])) {
          continue
        }

        const map = self._keyMap[key][value]
        for (let i = 0; i < map.length; i++) {
          delKeyHashSet[map[i]] = true
        }
      }

      for (const keyHash in delKeyHashSet) {
        self.cache.delete(keyHash)
      }
    },

    /**
     * Clears the entire cache.
     */
    reset() {
      self.cache.clear()
      self._keyMap = {}
    },

    fetch(keyValues) {
      const keyHash = hash(keyValues)
      return self.cache.fetch(keyHash)
    },

    keys() {
      return Array.from(self.cache.keys())
    },
  }

  self.cache = new LRUCache(options)

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
