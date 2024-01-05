import { sleep } from '@/utils/sleep.js'
import { describe, expect, it } from 'vitest'
import { Cache } from './cache.js'

describe('Cache Test', function () {
  describe('Default methods', () => {
    it('should insert elements', () => {
      const cache = new Cache({ onEvent: (e, s) => console.log(e, s) })
      cache
        .set('key1', 'value1')
        .set('key2', 2)
        .set(3, { value: 1 })
        .set(JSON.stringify({ key: 1 }), { value: 1 })
        .set('promise', Promise.resolve(1))
      expect(cache.size).toEqual(5)
    })

    it('Should returns number value for string key', () => {
      const cache = new Cache({ onEvent: (e, s) => console.log(e, s) })
      cache.set('key2', 2)
      expect(cache.get('key2')).toEqual(2)
    })

    it('Should returns string value for string key', () => {
      const cache = new Cache({ onEvent: (e, s) => console.log(e, s) })
      cache.set('key1', 'value1')
      expect(cache.get('key1')).toEqual('value1')
    })

    it('Should returns object value for number key', () => {
      const cache = new Cache({ onEvent: (e, s) => console.log(e, s) })
      cache.set(3, { value: 1 })
      expect(cache.get(3)).toEqual({ value: 1 })
    })

    it('Should returns object value for object key', () => {
      const cache = new Cache({ onEvent: (e, s) => console.log(e, s) })
      cache.set(JSON.stringify({ key: 1 }), { value: 1 })
      expect(cache.get(JSON.stringify({ key: 1 }))).toEqual({ value: 1 })
    })

    it('Should returns promise value', async () => {
      const cache = new Cache()
      cache.set('promise', Promise.resolve(1))
      expect(await Promise.resolve(1)).toEqual(1)
      expect(await cache.get('promise')).toEqual(1)
    })

    it('Should returns all keys', () => {
      const cache = new Cache()
      cache
        .set('key1', 'value1')
        .set('key2', 2)
        .set(3, { value: 1 })
        .set(JSON.stringify({ key: 1 }), { value: 1 })
        .set('promise', Promise.resolve(1))
      expect(Array.from(cache.keys())).toEqual([
        'key1',
        'key2',
        3,
        JSON.stringify({ key: 1 }),
        'promise',
      ])
    })
  })

  describe('Memo', function () {
    it('memoize function', () => {
      const cache = new Cache({
        max: 4,
        onEvent: (e, s) => console.log(e, s),
      })
      const fn = (rsp: any) => {
        console.log('called', rsp)
        return () => rsp
      }

      expect(cache.memo('42', fn(42))).toEqual(42)
      expect(cache.memo('43', fn(43))).toEqual(43)
      expect(cache.memo('42', fn(42))).toEqual(42)
    })

    it('memoize promise', async () => {
      const cache = new Cache({
        max: 4,
        onEvent: (e, s) => console.log(e, s),
      })
      const fn = (rsp: any) => {
        console.log('called', rsp)
        return () => Promise.resolve(rsp)
      }

      expect(await cache.memo('42', fn(42))).toEqual(42)
      expect(await cache.memo('43', fn(43))).toEqual(43)
      expect(await cache.memo('42', fn(42))).toEqual(42)
    })
  })

  describe('LRU', function () {
    it('should keep last 4 elements only', () => {
      const cache = new Cache({
        max: 4,
        onEvent: (e, s) => console.log(e, s),
      })
      cache.set('ky1', 'v')
      cache.set('ky2', 'v')
      cache.set('ky3', 'v')
      cache.set('ky4', 'v')
      cache.set('ky5', 'v')
      cache.set('ky6', 'v')
      cache.set('ky7', 'v')
      cache.set('ky8', 'v')
      cache.set('ky9', 'v')
      expect(cache.size).toEqual(cache.max)
    })
  })

  describe('TTL', function () {
    it('Should delete item after timeout', async () => {
      const cache = new Cache({
        ttl: 1000,
        onEvent: (e, s) => console.log(e, s),
      })
      cache.set('k1', 1)
      cache.set('k2', 2)
      cache.set('k3', 3)
      cache.setPermanent('k4', 'hello world')
      await sleep(3000)
      expect(cache.get('k4')).toEqual('hello world')
      expect(cache.size).toEqual(1)
    })
  })
})
