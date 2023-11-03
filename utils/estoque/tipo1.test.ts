import { Enlite } from '@/utils/estoque/enlite'
import { describe, expect, test } from 'vitest'
import { Flex } from './flex'
import { Tipo1 } from './tipo1'

describe('tipo1', () => {
  test('deve calcular máximo', () => {
    const caixa = new Tipo1()
    expect(caixa.maxQuantity()).toEqual({
      enlite: { quantidade: 3, aproveitamento: 42.62 },
      flex: { quantidade: 4, aproveitamento: 43.78 },
    })
  })

  test('deve adicionar 3 enlite', () => {
    const tipo1 = new Tipo1()
    for (let i = 0; i < 3; i++) {
      const enlite = new Enlite()
      tipo1.add(enlite)
    }
    expect(tipo1).toMatchObject({
      count: { enlite: 3 },
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
          y: 22,
          z: 0,
        },
        {
          produto: { pos: 'p1' },
          x: 0,
          y: 44,
          z: 0,
        },
      ],
    })
  })
  test('deve adicionar 4 flex', () => {
    const tipo1 = new Tipo1()
    for (let i = 0; i < 4; i++) {
      const flex = new Flex()
      tipo1.add(flex)
    }
    expect(tipo1).toMatchObject({
      count: { flex: 4 },
      ordem: [
        {
          produto: { pos: 'p3' },
          x: 0,
          y: 0,
          z: 0,
        },
        {
          produto: { pos: 'p3' },
          x: 0,
          y: 26,
          z: 0,
        },
        {
          produto: { pos: 'p3' },
          x: 88,
          y: 0,
          z: 0,
        },
        {
          produto: { pos: 'p3' },
          x: 88,
          y: 26,
          z: 0,
        },
      ],
    })
  })
})
