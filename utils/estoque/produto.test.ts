import { describe, expect, test } from 'vitest'
import { Produto } from './produto'

describe('Produto', () => {
  test('deve criar produto', () => {
    const produto = new Produto(100, 25, 50)
    expect(produto).toMatchObject({
      x: 100,
      y: 25,
      z: 50,
      name: 'produto',
      pos: 'p1',
    })
  })
  test('deve medir produto', () => {
    const produto = new Produto(100, 25, 50)
    expect(produto.volume()).toBe(125000)
  })
  test('deve rotacionar produto', () => {
    const produto = new Produto(100, 25, 50)
    expect(produto).toMatchObject({
      x: 100,
      y: 25,
      z: 50,
      name: 'produto',
      pos: 'p1',
    })
    expect(produto.rotate('p2')).toMatchObject({
      x: 25,
      y: 100,
      z: 50,
      name: 'produto',
      pos: 'p2',
    })
    expect(produto.rotate('p3')).toMatchObject({
      x: 50,
      y: 25,
      z: 100,
      name: 'produto',
      pos: 'p3',
    })
    expect(produto.rotate('p4')).toMatchObject({
      x: 25,
      y: 50,
      z: 100,
      name: 'produto',
      pos: 'p4',
    })
  })
})
