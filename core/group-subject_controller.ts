import { usuarioController } from '@/core/usuario/usuario_controller.js'
import { oftalmoDb } from '@/data/oftalmo/oftalmo.db.js'
import type { TSchema } from '@/schemas/schema.type.js'
import { TAdapterKnex } from '@/utils/orm/adapter-knex.js'
import { ormTable } from '@/utils/orm/index.js'

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
    const { grupoId } = await usuarioController.usuario_read({
      where: [['id', kUsuario]],
      select: ['grupoId'],
    })

    const idGroupList = grupoId.split(',')

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
  oftalmoDb,
  groupSubject
)
