import { describe, expect, test } from 'vitest'
import { Flex } from './flex.mjs'
import { Tipo4 } from './tipo4.mjs'

describe('tipo4', () => {
  test('deve calcular máximo', () => {
    const caixa = new Tipo4()
    expect(caixa.maxQuantity()).toEqual({
      enlite: { quantidade: 18, aproveitamento: 50.64 },
      flex: { quantidade: 40, aproveitamento: 86.69 },
    })
  })

  test('deve adicionar 1 flex', () => {
    const tipo4 = new Tipo4()
    for (let i = 0; i < 1; i++) {
      const flex = new Flex()
      tipo4.add(flex)
    }
    expect(tipo4).toMatchObject({
      count: { flex: 1 },
    })
  })

  test('deve adicionar 2 flex', () => {
    const tipo4 = new Tipo4()
    for (let i = 0; i < 2; i++) {
      const flex = new Flex()
      tipo4.add(flex)
    }

    expect(tipo4).toMatchObject({
      count: { flex: 2 },
    })
  })

  test('deve adicionar 23 flex', () => {
    const tipo4 = new Tipo4()
    for (let i = 0; i < 23; i++) {
      const flex = new Flex()
      tipo4.add(flex.rotate('p3'))
    }

    expect(tipo4).toMatchObject({
      count: { flex: 23 },
    })
  })

  test('deve adicionar 22 flex', () => {
    const caixa = new Tipo4()

    caixa.addFlex(22)
    expect(caixa).toMatchObject({
      count: { flex: 22 },
    })
  })
})
