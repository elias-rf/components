import { describe, expect, it } from 'vitest'
import { grupoSujeitoController } from '../../core/grupo-sujeito/grupo-sujeito_controller.mjs'
import { oftalmoDb } from '../../data/oftalmo/oftalmo.db.mjs'
import { dbSys } from '../../data/sys/db-sys.db.mjs'
import { knexMockMsql } from '../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../utils/mocks/database.mock.mjs'
import { knexMockHistory } from '../../utils/mocks/knex-mock-history.mjs'

describe('group-subject-model', () => {
  const tracker = getTracker()
  oftalmoDb.setDriver(knexMockMsql)
  dbSys.setDriver(knexMockMsql)

  it('deve validar permissao', async () => {
    tracker.reset()
    tracker.on.select('tbl_Seguranca_Usuario').response([{ idGroup: '1' }])
    tracker.on.select('groupSubject').response([{ idSubject: 'prm1' }])

    const rsp = await grupoSujeitoController.grupoSujeito_can({
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
        bindings: ['1', 'prm1'],
        sql: 'select [idSubject] from [groupSubject] where [idGroup] in (@p0) and [idSubject] = @p1',
      },
    ])
  })

  it('deve listar permissoes', async () => {
    tracker.reset()
    tracker.on.select('groupSubject').response([{ idSubject: 'prm1' }])

    const rsp = await grupoSujeitoController.grupoSujeito_listPermissions({
      idGroup: '28',
      idSubjectList: ['prm1', 'prm2'],
    })

    expect(rsp).toEqual([{ sujeitoId: 'prm1' }])
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: ['28', 'prm1', 'prm2'],
        sql: 'select [idSubject] from [groupSubject] where [idGroup] in (@p0) and [idSubject] in (@p1, @p2)',
      },
    ])
  })
})
