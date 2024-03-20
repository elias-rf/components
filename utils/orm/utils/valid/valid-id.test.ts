import { nfSaidaSchema } from '@/data/plano/nf-saida/nf-saida.schema.js'
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
        nfSaidaSchema
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
    expect(() => validId([['ids', 1]], nfSaidaSchema)).toThrow(
      '[ids] não é id válido em MestreNota use: CdFilial,Modelo,NumNota,Serie'
    )
  })

  test('id composto incompleto', () => {
    expect(() => validId([['CdFilial', 1]], nfSaidaSchema)).toThrow(
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
        nfSaidaSchema
      )
    ).toThrow('[CdFornecedor] não é id válido')
  })
})
