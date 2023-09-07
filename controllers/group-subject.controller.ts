import { dbOftalmo } from '@/controllers/db-oftalmo.db'
import { usuarioController } from '@/controllers/usuario.controller'
import { OrmDatabase, ormTable } from '@/orm'
import { groupSubject } from '@/schemas/oftalmo/groupSubject.schema'
import { TSchema } from '@/schemas/schema.type'

export type TGroupSubjectFields = keyof typeof groupSubject.fields
export type TGroupSubjectKeys = (typeof groupSubject.primary)[number]

function groupSubjectControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TGroupSubjectFields, TGroupSubjectKeys>(db, schema)

  const listPermissions = async ({
    idGroup,
    idSubjectList,
  }: {
    idGroup: string
    idSubjectList: string[]
  }) => {
    const resp = await orm.list({
      select: ['idSubject'],
      where: [
        ['idGroup', idGroup],
        ['idSubject', 'in', idSubjectList],
      ],
    })
    return resp
  }

  const can = async ({
    kUsuario,
    idSubject,
  }: {
    kUsuario: number
    idSubject: string
  }) => {
    const { idGroup } = await usuarioController.read({
      id: [['kUsuario', kUsuario]],
      select: ['idGroup'],
    })

    const idGroupList = idGroup.split(',')

    if (idGroupList.includes('0')) {
      return true
    }

    const permissions = await orm.list({
      select: ['idSubject'],
      where: [
        ['idGroup', 'in', idGroupList],
        ['idSubject', idSubject],
      ],
    })
    return permissions.length > 0
  }
  return {
    list: orm.list,
    read: orm.read,
    update: orm.update,
    create: orm.create,
    del: orm.del,
    orm,
    listPermissions,
    can,
  }
}

export const groupSubjectController = groupSubjectControllerFactory(
  dbOftalmo,
  groupSubject
)
