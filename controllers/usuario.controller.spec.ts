import { getTracker } from '@/mocks/database.mock'
import { knexMockHistory } from '@/mocks/knex-mock-history'
import { usuarioController } from './usuario.controller'
import { describe, expect, it, test, beforeEach } from 'vitest'
import { knexMockMsql } from '@/mocks/connections.mock'
import { dbOftalmo } from '@/controllers/db-oftalmo.db'

describe('UsuarioModel', () => {
  const tracker = getTracker()
  dbOftalmo.knex = knexMockMsql

  beforeEach(() => {
    tracker.reset()
  })

  it('me', async () => {
    const rsp = await usuarioController.me({ req: { user: { idUser: '1' } } })
    expect(rsp).toEqual({
      idUser: '1',
    })
  })

  test('login', async () => {
    tracker.on.select('tbl_Seguranca_Usuario').response([
      {
        NomeUsuario: 'nome',
        hash: 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',
      },
    ])

    const rsp = await usuarioController.login.call(
      {
        reply: {
          jwtSign() {
            return 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3'
          },
          setCookie() {},
        },
      },
      {
        user: 'user1',
        password: '123',
      }
    )

    expect(rsp).toEqual({
      group_id: '',
      nome: '',
      nome_login: 'nome',
      token: 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',
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
