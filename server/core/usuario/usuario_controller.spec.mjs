import { beforeEach, describe, expect, it, test } from 'vitest'
import { oftalmoDb } from '../../data/oftalmo/oftalmo.db.mjs'
import { knexMockMsql } from '../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../utils/mocks/database.mock.mjs'
import { knexMockHistory } from '../../utils/mocks/knex-mock-history.mjs'
import { usuarioController } from './usuario_controller.mjs'

describe('usuarioController', () => {
  const tracker = getTracker()
  oftalmoDb.setDriver(knexMockMsql)

  beforeEach(() => {
    tracker.reset()
  })

  it('me', async () => {
    const rsp = await usuarioController.usuario_me(undefined, {
      user: { id: 1 },
      req: {},
      res: {},
    })
    expect(rsp).toEqual({
      id: 1,
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
      userName: 'user1',
      password: '123',
    })

    expect(rsp).toEqual({
      grupoIds: '',
      nome: 'Nome',
      usuario: 'nome',
      token: expect.anything(),
      id: 0,
    })

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: ['user1'],
        sql: `select * from [tbl_Seguranca_Usuario] where [NomeUsuario] = @p0`,
      },
    ])
  })
})
