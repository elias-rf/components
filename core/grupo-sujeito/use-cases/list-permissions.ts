import { TDataSource } from '@/data/index.js'
import { list } from './list.js'

export const listPermissions =
  (dataSource: TDataSource) =>
  async ({
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
