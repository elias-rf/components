import { dbOftalmo } from '@/controllers/db/db-oftalmo.db.js'
import { knexMockMsql } from '@/mocks/connections.mock.js'
import { getTracker } from '@/mocks/database.mock.js'
import { knexMockHistory } from '@/mocks/knex-mock-history.js'
import { TRpcContext } from '@/server/routes/rpc2.js'
import { beforeEach, describe, expect, it, test } from 'vitest'
import { usuarioController } from './usuario_controller.js'

describe('usuarioController', () => {
  const tracker = getTracker()
  dbOftalmo.setDriver(knexMockMsql)

  beforeEach(() => {
    tracker.reset()
  })

  it('me', async () => {
    const rsp = await usuarioController.usuario_me(undefined, {
      user: { usuario_id: 1 },
      req: {},
      res: {},
    } as TRpcContext)
    expect(rsp).toEqual({
      usuario_id: 1,
    })
  })

  test('login', async () => {
    tracker.on.select('tbl_Seguranca_Usuario').response([
      {
        NomeUsuario: 'nome',
        nome: 'Nome',
        hash: 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',
      },
    ])

    const rsp = await usuarioController.usuario_login({
      user: 'user1',
      password: '123',
    })

    expect(rsp).toEqual({
      group_ids: '',
      nome: 'Nome',
      nome_login: 'nome',
      token: expect.anything(),
      usuario_id: 0,
    })

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [50, 'user1'],
        sql: `select top (@p0) * from [tbl_Seguranca_Usuario] where [NomeUsuario] = @p1`,
      },
    ])
  })
})
