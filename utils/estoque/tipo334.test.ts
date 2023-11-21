import { Enlite } from '@/utils/estoque/enlite.js'
import { describe, expect, test } from 'vitest'
import { Flex } from './flex.js'
import { Tipo334 } from './tipo334.js'

describe('tipo334', () => {
  test('deve calcular máximo', () => {
    const caixa = new Tipo334()
    expect(caixa.maxQuantity()).toEqual({
      enlite: { quantidade: 66, aproveitamento: 67.06 },
      flex: { quantidade: 87, aproveitamento: 68.1 },
    })
  })

  test('deve adicionar 1 flex', () => {
    const tipo4 = new Tipo334()
    for (let i = 0; i < 1; i++) {
      const flex = new Flex()
      tipo4.add(flex)
    }
    expect(tipo4).toMatchObject({
      count: { flex: 1 },
    })
  })

  test('deve adicionar 2 flex', () => {
    const tipo4 = new Tipo334()
    for (let i = 0; i < 2; i++) {
      const flex = new Flex()
      tipo4.add(flex)
    }

    expect(tipo4).toMatchObject({
      count: { flex: 2 },
    })
  })

  test('deve adicionar 7 flex', () => {
    const tipo4 = new Tipo334()
    for (let i = 0; i < 7; i++) {
      const flex = new Flex()
      tipo4.add(flex)
    }

    expect(tipo4).toMatchObject({
      count: { flex: 7 },
    })
  })

  test('deve adicionar 14 flex', () => {
    const tipo4 = new Tipo334()
    for (let i = 0; i < 14; i++) {
      const flex = new Flex()
      tipo4.add(flex)
    }

    expect(tipo4).toMatchObject({
      count: { flex: 14 },
    })
  })

  test('deve adicionar 30 enlite', () => {
    const qtd = 30
    const tipo4 = new Tipo334()
    for (let i = 0; i < qtd; i++) {
      const enlite = new Enlite()
      tipo4.add(enlite)
    }

    expect(tipo4).toMatchObject({
      count: { enlite: qtd },
    })
  })
})
