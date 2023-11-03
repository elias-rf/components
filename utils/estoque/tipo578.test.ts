import { describe, expect, test } from 'vitest'
import { Tipo578 } from './tipo578'

describe('tipo578', () => {
  test('deve calcular máximo', () => {
    const caixa = new Tipo578()
    expect(caixa.maxQuantity()).toEqual({
      enlite: { quantidade: 160, aproveitamento: 85.23 },
      flex: { quantidade: 204, aproveitamento: 83.72 },
    })
  })
})
