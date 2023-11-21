import { MultiKeyCache } from '@/utils/multi-key-cache.js'
import { beforeEach, describe, expect, it } from 'vitest'

describe('MultiKeyCache', () => {
  const status = {}

  describe('behaviors', function () {
    let cache: any

    beforeEach(function () {
      cache = MultiKeyCache({
        max: 10,
        logger(args: any) {
          console.log(args)
        },
      })
    })

    it('should not find values that are not in the cache', function () {
      expect(cache.get({})).toBeUndefined()
      expect(cache.get({ anything: 'anything' })).toBeUndefined()
    })

    it('should set and get values', function () {
      const keyValuesOne = { k1: 'a', k2: 'one' }
      const keyValuesTwo = { k1: 'b', k2: 'one' }
      const keyValuesThree = { k1: 'c' }
      const objectOne = 'one'
      const objectTwo = 'two'
      const objectThree = 'three'

      cache.set(keyValuesOne, objectOne)
      cache.set(keyValuesTwo, objectTwo)
      cache.set(keyValuesThree, objectThree)

      expect(cache.get(keyValuesOne)).toEqual(objectOne)
      expect(cache.get(keyValuesTwo)).toEqual(objectTwo)
      expect(cache.get(keyValuesThree)).toEqual(objectThree)
      expect(cache.itemCount()).toEqual(3)
      expect(cache.length()).toEqual(10)
      cache.delete(keyValuesOne)
      expect(cache.itemCount()).toEqual(2)
    })

    it('should get and set values with keys in different orders', function () {
      const keyValuesA = { k1: 'a', k2: 'b' }
      const keyValuesB = { k2: 'b', k1: 'a' }
      const valueA = { alpha: 'beta', gamma: 'delta' }

      cache.set(keyValuesA, valueA)
      const valueB = cache.get(keyValuesB)
      expect(valueA).to.equal(valueB)
    })

    it('reset the cache', function () {
      const keyValues = { a: 'a' }
      cache.set(keyValues, 'example')
      cache.reset()
      expect(cache.get(keyValues)).toBeUndefined()
    })

    it('should purge values', function () {
      cache.set({ a: '1', b: '1' }, '1-1')
      cache.set({ a: '1', b: '2' }, '1-2')
      cache.set({ a: '1', b: '3' }, '1-3')
      cache.set({ a: '2', b: '1' }, '2-1')
      cache.set({ a: '2', b: '2' }, '2-2')

      cache.purge((key: any) => key.a === '1')
      expect(cache.keys()).toEqual(['{"a":"2","b":"2"}', '{"a":"2","b":"1"}'])
    })

    it('should report when items are in the cache', function () {
      const hasKey = { a: '1', b: '1' }
      const hasNotKey = { a: '1', b: '2' }
      cache.set(hasKey, '1-1')
      expect(cache.has(hasKey)).toBeTruthy()
      expect(cache.has(hasNotKey)).toBeFalsy()
    })

    it('should gracefully handle invalid purges', function () {
      cache.purge({ b: 47 })
      cache.set({ a: 12 })
      cache.purge({ a: 13 })
    })
  }) // end 'behaviors'

  describe('lru', function () {
    it('should properly evict entries', function () {
      const cache = MultiKeyCache({
        max: 1,
        logger(args: any) {
          console.log(args)
        },
      })
      cache.set({ k: 1 }, 'one', { status })
      cache.set({ k: 2 }, 'two')
      cache.get({ k: 1 })
      cache.set({ k: 3 }, 'three')
      expect(cache.get({ k: 2 })).toBeUndefined()
    })

    it('should gracefully handle invalid disposals', function () {
      const cache = MultiKeyCache({
        max: 10,
        logger(args: any) {
          console.log(args)
        },
      })
      cache.set({ a: 1 })
      cache.set({ b: 2 })
    })
  })
  describe('fetch', function () {
    it('deve gerir depend', function () {
      const cache = MultiKeyCache({
        max: 10,
        logger(args: any) {
          console.log(args)
        },
      })
      cache.set(
        {
          depend: ['cliente'],
        },
        1
      )
      cache.set(
        {
          depend: ['cliente', 'user'],
        },
        1
      )
      cache.purge((key: any) => key.depend.includes('user'))
      expect(cache.keys()).toEqual(['{"depend":["cliente"]}'])
    })

    it('deve executar fetch', async () => {
      const fn = (response: number) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(response)
          }, 200)
        })
      }

      const fetchFunction = (
        key: string,
        staleValue: any,
        { context }: any
      ) => {
        return context.method(JSON.parse(key))
      }
      const cache = MultiKeyCache({
        max: 10,
        fetchMethod: fetchFunction,
        logger(args: any) {
          console.log(args)
        },
      })
      expect(
        await cache.fetch(
          { id: 1 },
          { status, context: { method: fn, name: 'teste' } }
        )
      ).toEqual({ id: 1 })

      expect(
        await cache.fetch({ id: 3 }, { context: { method: fn, name: 'teste' } })
      ).toEqual({ id: 3 })
      expect(
        await cache.fetch(
          { id: 1 },
          { status, context: { method: fn, name: 'teste' } }
        )
      ).toEqual({ id: 1 })

      expect(cache.keys()).toEqual(['{"id":1}', '{"id":3}'])
    })
  })

  it('deve trabalhar com caches independentes', () => {
    const cache1 = MultiKeyCache()
    const cache2 = MultiKeyCache()
    cache1.set({ a: 1 }, '1')
    cache2.set({ a: 1 }, '2')
    expect(cache1.get({ a: 1 })).toEqual('1')
    expect(cache2.get({ a: 1 })).toEqual('2')
  })
  it('should purge table', function () {
    const cache = MultiKeyCache()
    cache.set({ a: '1', b: '1', _table: 'tbl1' }, '1-1')
    cache.set({ a: '1', b: '2', _table: 'tbl1' }, '1-2')
    cache.set({ a: '1', b: '3', _table: 'tbl1' }, '1-3')
    cache.set({ a: '2', b: '1', _table: 'tbl2' }, '2-1')
    cache.set({ a: '2', b: '2', _table: 'tbl2' }, '2-2')

    cache.purgeTable('tbl1')
    expect(cache.keys()).toEqual([
      '{"_table":"tbl2","a":"2","b":"2"}',
      '{"_table":"tbl2","a":"2","b":"1"}',
    ])
  })
})
