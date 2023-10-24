import { dbOftalmo } from '@/controllers/db/db-oftalmo.db'
import { usuarioController } from '@/controllers/usuario_controller'
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
  listPermissions.rpc = true

  const can = async ({
    kUsuario,
    idSubject,
  }: {
    kUsuario: number
    idSubject: string
  }) => {
    const { idGroup } = await usuarioController.read({
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
  can.rpc = true

  return {
    ...orm.rpc,
    listPermissions,
    can,
  }
}

export const groupSubjectController = groupSubjectControllerFactory(
  dbOftalmo,
  groupSubject
)
