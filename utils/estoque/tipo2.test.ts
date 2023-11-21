import { Enlite } from '@/utils/estoque/enlite.js'
import { describe, expect, test } from 'vitest'
import { Flex } from './flex.js'
import { Tipo2 } from './tipo2.js'

describe('tipo2', () => {
  test('deve calcular máximo', () => {
    const caixa = new Tipo2()
    expect(caixa.maxQuantity()).toEqual({
      enlite: { quantidade: 8, aproveitamento: 74.78 },
      flex: { quantidade: 10, aproveitamento: 72.01 },
    })
  })

  test('deve adicionar 1 flex', () => {
    const tipo1 = new Tipo2()
    for (let i = 0; i < 1; i++) {
      const flex = new Flex()
      tipo1.add(flex)
    }
    expect(tipo1).toMatchObject({
      ordem: [{ x: 0, y: 0, z: 0, produto: { pos: 'p1' } }],
    })
  })
  test('deve adicionar 2 flex', () => {
    const tipo1 = new Tipo2()
    for (let i = 0; i < 2; i++) {
      const flex = new Flex()
      tipo1.add(flex)
    }

    expect(tipo1).toMatchObject({
      ordem: [
        { x: 0, y: 0, z: 0, produto: { pos: 'p1' } },
        { x: 0, y: 26, z: 0, produto: { pos: 'p1' } },
      ],
    })
  })
  test('deve adicionar 10 flex', () => {
    const tipo1 = new Tipo2()
    for (let i = 0; i < 10; i++) {
      const flex = new Flex()
      tipo1.add(flex)
    }

    expect(tipo1).toMatchObject({
      count: { flex: 10 },
    })
  })

  test('deve adicionar 8 enlite', () => {
    const tipo1 = new Tipo2()
    for (let i = 0; i < 8; i++) {
      const enlite = new Enlite()
      tipo1.add(enlite)
    }

    expect(tipo1).toMatchObject({
      count: { enlite: 8 },
    })
  })
})
