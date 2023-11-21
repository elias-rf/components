import { describe, expect, test } from 'vitest'
import { Caixa } from './caixa.js'
import { Produto } from './produto.js'

describe('Caixa', () => {
  test('deve criar caixa', () => {
    const caixa = new Caixa(10, 2, 5)
    expect(caixa).toMatchObject({
      count: {},
      ordem: [],
      name: 'caixa',
      dim: {
        x: 10,
        y: 2,
        z: 5,
      },
    })
    expect(caixa.volume()).toBe(100)
  })

  test('deve adicionar 1 produto em caixa 1x1x1', () => {
    const produto = new Produto(1, 1, 1)
    const caixa = new Caixa(1, 1, 1)

    caixa.add(produto)

    expect(caixa).toMatchObject({
      ordem: [
        {
          x: 0,
          y: 0,
          z: 0,
          produto: { pos: 'p1' },
        },
      ],
    })
  })

  test('deve adicionar 2 produto em caixa 2x1x1', () => {
    const caixa = new Caixa(2, 1, 1)
    for (let i = 0; i < 2; i++) {
      caixa.add(new Produto(1, 1, 1))
    }

    expect(caixa).toMatchObject({
      ordem: [
        {
          x: 0,
          y: 0,
          z: 0,
          produto: { pos: 'p1' },
        },
        {
          x: 1,
          y: 0,
          z: 0,
          produto: { pos: 'p1' },
        },
      ],
    })
  })

  test('deve adicionar 2 produto em caixa 1x2x1', () => {
    const caixa = new Caixa(1, 2, 1)
    for (let i = 0; i < 2; i++) {
      caixa.add(new Produto(1, 1, 1))
    }

    expect(caixa).toMatchObject({
      ordem: [
        {
          x: 0,
          y: 0,
          z: 0,
          produto: { pos: 'p1' },
        },
        {
          x: 0,
          y: 1,
          z: 0,
          produto: { pos: 'p1' },
        },
      ],
    })
  })

  test('deve adicionar 2 produto em caixa 1x1x2', () => {
    const caixa = new Caixa(1, 1, 2)
    for (let i = 0; i < 2; i++) {
      caixa.add(new Produto(1, 1, 1))
    }

    expect(caixa).toMatchObject({
      ordem: [
        {
          x: 0,
          y: 0,
          z: 0,
          produto: { pos: 'p1' },
        },
        {
          x: 0,
          y: 0,
          z: 1,
          produto: { pos: 'p1' },
        },
      ],
    })
  })

  test('deve adicionar 8 produto em caixa 2x2x2', () => {
    const caixa = new Caixa(2, 2, 2)
    for (let i = 0; i < 8; i++) {
      caixa.add(new Produto(1, 1, 1))
    }

    expect(caixa).toMatchObject({
      ordem: [
        {
          produto: { pos: 'p1' },
          x: 0,
          y: 0,
          z: 0,
        },
        {
          produto: { pos: 'p1' },
          x: 0,
          y: 1,
          z: 0,
        },
        {
          produto: { pos: 'p1' },
          x: 1,
          y: 0,
          z: 0,
        },
        {
          produto: { pos: 'p1' },
          x: 1,
          y: 1,
          z: 0,
        },
        {
          produto: { pos: 'p1' },
          x: 0,
          y: 0,
          z: 1,
        },
        {
          produto: { pos: 'p1' },
          x: 0,
          y: 1,
          z: 1,
        },
        {
          produto: { pos: 'p1' },
          x: 1,
          y: 0,
          z: 1,
        },
        {
          produto: { pos: 'p1' },
          x: 1,
          y: 1,
          z: 1,
        },
      ],
    })
  })

  test('deve adicionar 6 produto em caixa 2x2x2', () => {
    const caixa = new Caixa(2, 2, 2)
    for (let i = 0; i < 4; i++) {
      caixa.add(new Produto(2, 1, 1))
    }

    expect(caixa).toMatchObject({
      ordem: [
        {
          produto: { pos: 'p1' },
          x: 0,
          y: 0,
          z: 0,
        },
        {
          produto: { pos: 'p1' },
          x: 0,
          y: 1,
          z: 0,
        },
        {
          produto: { pos: 'p1' },
          x: 0,
          y: 0,
          z: 1,
        },
        {
          produto: { pos: 'p1' },
          x: 0,
          y: 1,
          z: 1,
        },
      ],
    })
  })

  test('deve adicionar 6 produto em caixa 4x4x4', () => {
    const caixa = new Caixa(4, 4, 4)
    for (let i = 0; i < 6; i++) {
      caixa.add(new Produto(3, 1, 2))
    }

    expect(caixa).toMatchObject({
      ordem: [
        {
          produto: { pos: 'p1' },
          x: 0,
          y: 0,
          z: 0,
        },
        {
          produto: { pos: 'p1' },
          x: 0,
          y: 1,
          z: 0,
        },
        {
          produto: { pos: 'p1' },
          x: 0,
          y: 2,
          z: 0,
        },
        {
          produto: { pos: 'p1' },
          x: 0,
          y: 3,
          z: 0,
        },
        {
          produto: { pos: 'p1' },
          x: 0,
          y: 0,
          z: 2,
        },
        {
          produto: { pos: 'p1' },
          x: 0,
          y: 1,
          z: 2,
        },
      ],
    })
  })
  test.only('deve adicionar 6 flex em caixa', () => {
    const caixa = new Caixa(210, 150, 90)
    for (let i = 0; i < 7; i++) {
      caixa.add(new Produto(148, 26, 88, 'flex'))
    }

    expect(caixa).toMatchObject({
      max: { x: 26, y: 0, z: 88 },
      next: {
        x: 174,
        y: 148,
        z: 0,
      },
      ordem: [
        {
          produto: { pos: 'p1' },
          x: 0,
          y: 0,
          z: 0,
        },
        {
          produto: { pos: 'p1' },
          x: 0,
          y: 26,
          z: 0,
        },
        {
          produto: { pos: 'p1' },
          x: 0,
          y: 52,
          z: 0,
        },
        {
          produto: { pos: 'p1' },
          x: 0,
          y: 78,
          z: 0,
        },
        {
          produto: { pos: 'p1' },
          x: 0,
          y: 104,
          z: 0,
        },
        {
          produto: { pos: 'p2' },
          x: 148,
          y: 0,
          z: 0,
        },
        {
          produto: { pos: 'p2' },
          x: 174,
          y: 0,
          z: 0,
        },
      ],
    })
  })
})
