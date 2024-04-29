import { list } from './list.mjs'

export const can =
  (dataSource, { usuarioController }) =>
  async ({ kUsuario, idSubject }) => {
    const { grupoId } = await usuarioController.usuario_read({
      where: [['id', kUsuario]],
      select: ['grupoId'],
    })

    const idGroupList = grupoId.split(',')

    if (idGroupList.includes('0')) {
      return true
    }

    const listUseCase = list(dataSource)

    const permissions = await listUseCase({
      select: ['sujeitoId'],
      where: [
        ['grupoId', 'in', idGroupList],
        ['sujeitoId', idSubject],
      ],
    })
    return permissions.length > 0
  }
