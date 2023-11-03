import { describe, expect, test } from 'vitest'
import { Tipo605 } from './tipo605'

describe('tipo605', () => {
  test('deve calcular máximo', () => {
    const caixa = new Tipo605()
    expect(caixa.maxQuantity()).toEqual({
      enlite: { quantidade: 318, aproveitamento: 72.35 },
      flex: { quantidade: 456, aproveitamento: 79.92 },
    })
  })

  test('deve adicionar 20 enlite', () => {
    const caixa = new Tipo605()
    caixa.addEnlite(48)

    expect(caixa).toMatchObject({
      count: { enlite: 48 },
    })
  })
})
