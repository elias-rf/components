import { describe, expect, test } from 'vitest'
import { Flex } from './flex.mjs'

describe('flex', () => {
  test('deve rotacionar para p1', () => {
    const flex = new Flex()
    expect(flex.rotate('p1')).toEqual({
      name: 'flex',
      pos: 'p1',
      x: 148,
      y: 26,
      z: 88,
    })
  })
  test('deve rotacionar para p2', () => {
    const flex = new Flex()
    expect(flex.rotate('p2')).toEqual({
      name: 'flex',
      pos: 'p2',
      x: 26,
      y: 148,
      z: 88,
    })
  })
  test('deve rotacionar para p3', () => {
    const flex = new Flex()
    expect(flex.rotate('p3')).toEqual({
      name: 'flex',
      pos: 'p3',
      x: 88,
      y: 26,
      z: 148,
    })
  })
  test('deve rotacionar para p4', () => {
    const flex = new Flex()
    expect(flex.rotate('p4')).toEqual({
      name: 'flex',
      pos: 'p4',
      x: 26,
      y: 88,
      z: 148,
    })
  })

  test('deve rotacionar todos', () => {
    const flex = new Flex()
    expect(flex.rotate('p1')).toEqual({
      name: 'flex',
      pos: 'p1',
      x: 148,
      y: 26,
      z: 88,
    })
    expect(flex.rotate('p2')).toEqual({
      name: 'flex',
      pos: 'p2',
      x: 26,
      y: 148,
      z: 88,
    })
    expect(flex.rotate('p3')).toEqual({
      name: 'flex',
      pos: 'p3',
      x: 88,
      y: 26,
      z: 148,
    })
    expect(flex.rotate('p4')).toEqual({
      name: 'flex',
      pos: 'p4',
      x: 26,
      y: 88,
      z: 148,
    })
  })
})
