import { getTracker } from '@/mocks/database.mock'
import { knexMockHistory } from '@/mocks/knex-mock-history'
import { expect, it, describe } from 'vitest'
import { dbSys } from '@/controllers/db-sys.db'
import { dbOftalmo } from '@/controllers/db-oftalmo.db'
import { knexMockMsql } from '@/mocks/connections.mock'
import { groupSubjectController } from '@/controllers/group-subject.controller'

describe('group-subject-model', () => {
  const tracker = getTracker()
  dbOftalmo.knex = knexMockMsql
  dbSys.knex = knexMockMsql

  it('deve validar permissao', async () => {
    tracker.reset()
    tracker.on.select('tbl_Seguranca_Usuario').response([{ idGroup: '1' }])
    tracker.on.select('groupSubject').response([{ idSubject: 'prm1' }])

    const rsp = await groupSubjectController.can({
      kUsuario: 1,
      idSubject: 'prm1',
    })

    expect(rsp).toEqual(true)
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1, 1],
        sql: 'select top (@p0) [idGroup] from [tbl_Seguranca_Usuario] where [kUsuario] = @p1',
      },
      {
        bindings: [50, '1', 'prm1'],
        sql: 'select top (@p0) [idSubject] from [groupSubject] where [idGroup] in (@p1) and [idSubject] = @p2',
      },
    ])
  })

  it('deve listar permissoes', async () => {
    tracker.reset()
    tracker.on.select('groupSubject').response([{ idSubject: 'prm1' }])

    const rsp = await groupSubjectController.listPermissions({
      idGroup: '28',
      idSubjectList: ['prm1', 'prm2'],
    })

    expect(rsp).toEqual([{ idSubject: 'prm1' }])
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [50, '28', 'prm1', 'prm2'],
        sql: 'select top (@p0) [idSubject] from [groupSubject] where [idGroup] = @p1 and [idSubject] in (@p2, @p3)',
      },
    ])
  })
})
