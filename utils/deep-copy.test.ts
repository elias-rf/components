import { describe, expect, it } from 'vitest'

import { deepCopy } from './deep-copy.js'

describe('preserve', function () {
  it('number', function () {
    var copy = deepCopy(42)
    expect(copy).toEqual(42)
  })

  it('string', function () {
    var copy = deepCopy('a')
    expect(copy).toEqual('a')
  })

  it('boolean', function () {
    var copy = deepCopy(true)
    expect(copy).toEqual(true)
  })
})

describe('copy', function () {
  it('object', function () {
    var target = { a: 0 }
    var copy = deepCopy(target)
    expect(target).toEqual(copy)
    copy.a = 1
    expect(target).toEqual({ a: 0 })
    expect(copy).toEqual({ a: 1 })
  })

  it('array', function () {
    var target = [0]
    var copy = deepCopy(target)
    expect(target, copy)

    copy[0] = 1
    expect(target, copy)

    expect(target).toEqual([0])
    expect(copy).toEqual([1])
  })

  it('date', function () {
    var target = new Date(2017, 0, 1)
    var copy = deepCopy(target)
    expect(target, copy)

    copy.setMonth(5)
    expect(target, copy)

    expect(target.getMonth()).toEqual(0)
    expect(copy.getMonth()).toEqual(5)
  })
})

describe('deep copy', function () {
  it('object', function () {
    var target = {
      object: { a: 0 },
    }
    var copy = deepCopy(target)
    expect(target, copy)

    copy.object.a = 1
    expect(target, copy)

    expect(target).toEqual({ object: { a: 0 } })
    expect(copy).toEqual({ object: { a: 1 } })
  })

  it('array', function () {
    var target = {
      array: [0],
    }
    var copy = deepCopy(target)
    expect(target, copy)

    copy.array[0] = 1
    expect(target, copy)

    expect(target).toEqual({ array: [0] })
    expect(copy).toEqual({ array: [1] })
  })

  it('date', function () {
    var target = {
      date: new Date(2017, 0, 1),
    }
    var copy = deepCopy(target)
    expect(target, copy)

    copy.date.setMonth(5)
    expect(target, copy)

    expect(target.date.getMonth()).toEqual(0)
    expect(copy.date.getMonth()).toEqual(5)
  })
})

describe('deep preserve', function () {
  it('function', function () {
    var target = {
      func: function () {},
    }
    var copy = deepCopy(target)
    expect(target, copy)

    expect(typeof copy.func).toEqual('function')
  })
})
