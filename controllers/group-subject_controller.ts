import { dbOftalmo } from '@/controllers/db/db-oftalmo.db.js'
import { usuarioController } from '@/controllers/usuario_controller.js'
import { TAdapterKnex } from '@/orm/adapter-knex.js'
import { ormTable } from '@/orm/index.js'
import type { TSchema } from '@/schemas/schema.type.js'

export const groupSubject = {
  table: 'groupSubject',
  primary: ['idGroup', 'idSubject'] as const,
  fields: ['idGroup', 'idSubject'] as const,
}

export type TGroupSubjectFields = (typeof groupSubject.fields)[number]
export type TGroupSubjectKeys = (typeof groupSubject.primary)[number]

function groupSubjectControllerFactory(db: TAdapterKnex, schema: TSchema) {
  const orm = ormTable<TGroupSubjectFields, TGroupSubjectKeys>(db, schema)

  const groupSubject_listPermissions = async ({
    idGroup,
    idSubjectList,
  }: {
    idGroup: string
    idSubjectList: string[]
  }) => {
    const groups = idGroup.split(',')
    if (groups.includes('0')) {
      return idSubjectList.map((idSubject) => ({
        idSubject,
      }))
    }
    const resp = await orm.rpc.list({
      select: ['idSubject'],
      where: [
        ['idGroup', 'in', groups],
        ['idSubject', 'in', idSubjectList],
      ],
    })

    return resp
  }

  const groupSubject_can = async ({
    kUsuario,
    idSubject,
  }: {
    kUsuario: number
    idSubject: string
  }) => {
    const { idGroup } = await usuarioController.usuario_read({
      where: [['kUsuario', kUsuario]],
      select: ['idGroup'],
    })

    const idGroupList = idGroup.split(',')

    if (idGroupList.includes('0')) {
      return true
    }

    const permissions = await orm.rpc.list({
      select: ['idSubject'],
      where: [
        ['idGroup', 'in', idGroupList],
        ['idSubject', idSubject],
      ],
    })
    return permissions.length > 0
  }

  return {
    groupSubject_list: orm.rpc.list,
    groupSubject_read: orm.rpc.read,
    groupSubject_count: orm.rpc.count,
    groupSubject_update: orm.rpc.update,
    groupSubject_create: orm.rpc.create,
    groupSubject_del: orm.rpc.del,
    groupSubject_increment: orm.rpc.increment,
    groupSubject_listPermissions,
    groupSubject_can,
  }
}

export const groupSubjectController = groupSubjectControllerFactory(
  dbOftalmo,
  groupSubject
)
