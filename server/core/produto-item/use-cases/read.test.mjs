import { beforeEach, describe, expect, test } from 'vitest'
import { dataSource } from '../../../data/index.mjs'
import { oftalmoDb } from '../../../data/oftalmo/oftalmo.db.mjs'
import { planoDb } from '../../../data/plano/plano.db.mjs'
import { knexMockMsql } from '../../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../../utils/mocks/database.mock.mjs'
import { read } from './read.mjs'

describe('read', () => {
  const tracker = getTracker()
  oftalmoDb.setDriver(knexMockMsql)
  planoDb.setDriver(knexMockMsql)
  const useCase = read(dataSource)

  beforeEach(() => {
    oftalmoDb.startLog()
    tracker.reset()
  })

  test('read', async () => {
    tracker.on.select('tbl_Produto_Item').response([{ kProdutoItem: '1' }])

    const rsp = await useCase({
      where: [['id', 10]],
      select: ['id', 'nome'],
    })
    expect(oftalmoDb.log()).toEqual([
      'select top (1) [kProdutoItem], [NomeProdutoItem] from [tbl_Produto_Item] where [kProdutoItem] = 10',
    ])
    expect(rsp).toEqual({ id: '1' })
  })

  // it('read with include', async () => {
  //   tracker.on.select('tbl_Produto_Item').response([{ id: 1, fkProduto: 1 }])
  //   tracker.on.select('tbl_Produto').response([{ kProduto: 1 }])
  //   const rsp = await produtoItemController.produtoItem_read({
  //     where: [['id', 1]],
  //     include: { produto: ['kProduto'] },
  //   })

  //   expect(rsp).toEqual({
  //     id: 1,
  //     fkProduto: 1,
  //     produto: { kProduto: 1 },
  //   })
  //   expect(knexMockHistory(tracker)).toEqual([
  //     {
  //       bindings: [1, 1],
  //       sql: 'select top (@p0) [fkProduto] from [tbl_Produto_Item] where [id] = @p1',
  //     },
  //     {
  //       bindings: [1, 1],
  //       sql: 'select top (@p0) [kProduto] from [tbl_Produto] where [kProduto] = @p1',
  //     },
  //   ])
  // })
})
