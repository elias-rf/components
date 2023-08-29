import { dbOftalmo } from '@/controllers/db-oftalmo.db'
import { usuarioController } from '@/controllers/usuario.controller'
import { GroupSubject } from '@/database'
import { OrmDatabase, OrmTable } from '@/orm'
import {
  TgroupSubject,
  groupSubject,
} from '@/schemas/oftalmo/groupSubject.schema'
import { TSchema } from '@/schemas/schema.type'

class GroupSubjectModel extends OrmTable<TgroupSubject> {
  constructor(db: OrmDatabase, schema: TSchema) {
    super(db, schema)
  }

  async listPermissions({
    idGroup,
    idSubjectList,
  }: {
    idGroup: string
    idSubjectList: string[]
  }) {
    const resp = await GroupSubject.query()
      .select('idSubject')
      .where({ idGroup })
      .whereIn('idSubject', idSubjectList)

    return resp
  }

  async can({ kUsuario, idSubject }: { kUsuario: number; idSubject: string }) {
    const { idGroup } = await usuarioController.read({
      id: [['kUsuario', kUsuario]],
      select: ['idGroup'],
    })

    const idGroupList = idGroup.split(',')

    if (idGroupList.includes('0')) {
      return true
    }

    const permissions = await GroupSubject.query()
      .select('idSubject')
      .whereIn('idGroup', idGroupList)
      .where('idSubject', idSubject)

    return permissions.length > 0
  }
}

export const groupSubjectModel = new GroupSubjectModel(dbOftalmo, groupSubject)
