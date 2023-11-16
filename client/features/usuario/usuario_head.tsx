import { Can } from '@/client/components/can'
import { Button } from '@/client/components/ui/button'
import { Title } from '@/client/components/ui/title'
import { Permissions } from '@/client/features/permissions'
import { usuarioStore } from '@/client/features/usuario/usuario_store'
import { authStore } from '@/client/store/auth_store'

const permissionsList = {
  usuario_permissao: 'Atribuir permissões de acesso para usuários',
  usuario_read: 'Visualizar dados do usuário',
  usuario_update: 'Alterar dados do usuário',
}

export function UsuarioHead() {
  const onNew = usuarioStore.use.onNew()
  const can = authStore.use.can()

  return (
    <div className="flex flex-row justify-between my-1 align-center">
      <div className="flex flex-row">
        <Title>Usuários</Title>
        <Can
          can={can('usuario_permissao')}
          response={null}
        >
          <Permissions permissions={permissionsList} />
        </Can>
      </div>
      <div className="flex flex-row space-x-2">
        <Button
          onClick={onNew}
          disabled={false}
          size="sm"
          outline
        >
          [N]OVO
        </Button>
      </div>
    </div>
  )
}