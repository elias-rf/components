import { dbOftalmo } from '@/controllers/db/db-oftalmo.db.js'
import { dbSys } from '@/controllers/db/db-sys.db.js'
import { groupSubjectController } from '@/controllers/group-subject_controller.js'
import { knexMockMsql } from '@/mocks/connections.mock.js'
import { getTracker } from '@/mocks/database.mock.js'
import { knexMockHistory } from '@/mocks/knex-mock-history.js'
import { describe, expect, it } from 'vitest'

describe('group-subject-model', () => {
  const tracker = getTracker()
  dbOftalmo.setDriver(knexMockMsql)
  dbSys.setDriver(knexMockMsql)

  it('deve validar permissao', async () => {
    tracker.reset()
    tracker.on.select('tbl_Seguranca_Usuario').response([{ idGroup: '1' }])
    tracker.on.select('groupSubject').response([{ idSubject: 'prm1' }])

    const rsp = await groupSubjectController.groupSubject_can({
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

    const rsp = await groupSubjectController.groupSubject_listPermissions({
      idGroup: '28',
      idSubjectList: ['prm1', 'prm2'],
    })

    expect(rsp).toEqual([{ idSubject: 'prm1' }])
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [50, '28', 'prm1', 'prm2'],
        sql: 'select top (@p0) [idSubject] from [groupSubject] where [idGroup] in (@p1) and [idSubject] in (@p2, @p3)',
      },
    ])
  })
})
