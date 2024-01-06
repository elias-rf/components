import { MestreNota } from '@/core/nf-saida_controller.js'
import { validId } from '@/utils/orm/utils/valid/valid-id.js'
import { describe, expect, test } from 'vitest'

describe('validId', () => {
  test('schema incompleto', () => {
    expect(() =>
      validId([['CdFilial', 1]], {
        table: 'MestreNota',
        primary: [],
        fields: [],
      })
    ).toThrow('MestreNota não possui primary keys')
  })

  test('válido', () => {
    expect(
      validId(
        [
          ['CdFilial', 1],
          ['NumNota', 1],
          ['Serie', '1'],
          ['Modelo', '1'],
          ['CdCliente', 1],
        ],
        MestreNota
      )
    ).toEqual({
      where: [
        ['CdFilial', 1],
        ['NumNota', 1],
        ['Serie', '1'],
        ['Modelo', '1'],
        ['CdCliente', 1],
      ],
    })
  })

  test('campo inexistente', () => {
    expect(() => validId([['ids', 1]], MestreNota)).toThrow(
      '[ids] não é id válido em MestreNota use: CdFilial,Modelo,NumNota,Serie'
    )
  })

  test('id composto incompleto', () => {
    expect(() => validId([['CdFilial', 1]], MestreNota)).toThrow(
      '[Modelo,NumNota,Serie] não foram usados em MestreNota use: Modelo,NumNota,Serie'
    )
  })

  test('id composto excedente', () => {
    expect(() =>
      validId(
        [
          ['CdFilial', 1],
          ['NumNota', 1],
          ['Serie', '1'],
          ['Modelo', '1'],
          ['CdFornecedor', 1],
        ],
        MestreNota
      )
    ).toThrow('[CdFornecedor] não é id válido')
  })
})
