import { list } from './list.mjs'

export const listPermissions =
  (dataSource) =>
  async ({ idGroup, idSubjectList }) => {
    const groups = idGroup.split(',')
    if (groups.includes('0')) {
      return idSubjectList.map((idSubject) => ({
        idSubject,
      }))
    }
    const listUseCase = list(dataSource)
    const resp = await listUseCase({
      select: ['sujeitoId'],
      where: [
        ['grupoId', 'in', groups],
        ['sujeitoId', 'in', idSubjectList],
      ],
    })

    return resp
  }
