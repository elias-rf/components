import { Can } from '@/client/components/can.js'
import { Button } from '@/client/components/ui/button.js'
import { Title } from '@/client/components/ui/title.js'
import { gruposStore } from '@/client/features/grupos/grupos_store.js'
import { Permissions } from '@/client/features/permissions.js'
import { authStore } from '@/client/store/auth_store.js'

const permissionsList = {
  grupos_permissao: 'Atribuir permissões de acesso para usuários',
  grupos_read: 'Visualizar dados do usuário',
  grupos_update: 'Alterar dados do usuário',
}

export function GruposHead() {
  const onNew = gruposStore.use.onNew()
  const can = authStore.use.can()

  return (
    <div className="flex flex-row justify-between my-1 align-center">
      <div className="flex flex-row space-x-1">
        <Title>Grupos de segurança</Title>
        <Can
          can={can('grupos_permissao')}
          elseCan={null}
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
