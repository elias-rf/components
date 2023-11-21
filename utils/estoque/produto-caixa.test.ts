import { produtoCaixa } from '@/utils/estoque/produto-caixa.js'
import { describe, expect, test } from 'vitest'

describe('produtoCaixa', () => {
  test('deve retornar tipo1', () => {
    expect(produtoCaixa(4, 0)).toMatchObject({
      tipo1: 43.78,
    })
    expect(produtoCaixa(0, 3)).toMatchObject({
      tipo1: 42.62,
    })
  })

  test('deve retornar tipo2', () => {
    expect(produtoCaixa(10, 0)).toMatchObject({
      tipo2: 72.01,
    })

    expect(produtoCaixa(0, 8)).toMatchObject({
      tipo2: 74.78,
    })
  })

  test('deve retornar tipo3', () => {
    expect(produtoCaixa(16, 0)).toMatchObject({
      tipo3: 66.67,
    })
    expect(produtoCaixa(0, 9)).toMatchObject({
      tipo3: 48.68,
    })
  })
  test('deve retornar tipo4', () => {
    expect(produtoCaixa(40, 0)).toMatchObject({
      tipo4: 86.69,
    })
    expect(produtoCaixa(0, 18)).toMatchObject({
      tipo4: 50.64,
    })
  })

  test('deve retornar tipo334', () => {
    expect(produtoCaixa(87, 0)).toMatchObject({
      tipo334: 68.1,
    })
    expect(produtoCaixa(0, 66)).toMatchObject({
      tipo334: 67.06,
    })
  })

  test('deve retornar tipo578', () => {
    expect(produtoCaixa(204, 0)).toMatchObject({
      tipo578: 83.72,
    })
    expect(produtoCaixa(0, 160)).toMatchObject({
      tipo578: 85.23,
    })
  })

  test('deve retornar tipo605', () => {
    expect(produtoCaixa(456, 0)).toMatchObject({
      tipo605: 79.92,
    })
    expect(produtoCaixa(0, 318)).toMatchObject({
      tipo605: 72.35,
    })
  })
})
