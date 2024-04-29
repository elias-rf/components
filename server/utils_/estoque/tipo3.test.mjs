import { describe, expect, test } from 'vitest'
import { Enlite } from '../../utils/estoque/enlite.mjs'
import { Flex } from './flex.mjs'
import { Tipo3 } from './tipo3.mjs'

describe('tipo3', () => {
  test('deve calcular máximo', () => {
    const caixa = new Tipo3()
    expect(caixa.maxQuantity()).toEqual({
      enlite: { quantidade: 9, aproveitamento: 48.68 },
      flex: { quantidade: 16, aproveitamento: 66.67 },
    })
  })

  test('deve adicionar 1 flex', () => {
    const tipo3 = new Tipo3()
    for (let i = 0; i < 1; i++) {
      const flex = new Flex()
      tipo3.add(flex)
    }
    expect(tipo3).toMatchObject({
      count: { flex: 1 },
      ordem: [{ x: 0, y: 0, z: 0, produto: { pos: 'p1' } }],
    })
  })

  test('deve adicionar 2 flex', () => {
    const tipo3 = new Tipo3()
    for (let i = 0; i < 2; i++) {
      const flex = new Flex()
      tipo3.add(flex)
    }

    expect(tipo3).toMatchObject({
      ordem: [
        { x: 0, y: 0, z: 0, produto: { pos: 'p1' } },
        { x: 0, y: 26, z: 0, produto: { pos: 'p1' } },
      ],
    })
  })

  test('deve adicionar 7 flex', () => {
    const tipo3 = new Tipo3()
    for (let i = 0; i < 7; i++) {
      const flex = new Flex()
      tipo3.add(flex)
    }

    expect(tipo3).toMatchObject({
      count: { flex: 7 },
    })
  })

  test('deve adicionar 14 flex', () => {
    const tipo3 = new Tipo3()
    for (let i = 0; i < 14; i++) {
      const flex = new Flex()
      tipo3.add(flex)
    }

    expect(tipo3).toMatchObject({
      count: { flex: 14 },
    })
  })

  test('deve adicionar 7 enlite', () => {
    const tipo3 = new Tipo3()
    for (let i = 0; i < 7; i++) {
      const enlite = new Enlite()
      tipo3.add(enlite)
    }

    expect(tipo3).toMatchObject({
      count: { enlite: 7 },
    })
  })
})
