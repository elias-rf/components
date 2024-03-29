import { TUsuarioController } from '@/core/usuario/usuario_controller.js'
import { TDataSource } from '@/data/index.js'
import { list } from './list.js'

export const can =
  (
    dataSource: TDataSource,
    { usuarioController }: { usuarioController: TUsuarioController }
  ) =>
  async ({ kUsuario, idSubject }: { kUsuario: number; idSubject: string }) => {
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
