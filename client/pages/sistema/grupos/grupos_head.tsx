import { Can } from '@/client/components/can.js'
import { Button } from '@/client/components/ui/button/button.js'
import { Title } from '@/client/components/ui/title.js'
import { Permissions } from '@/client/features/permissions.js'
import { gruposStore } from '@/client/pages/sistema/grupos/grupos_store.js'
import { authStore } from '@/client/store/auth_store.js'

const permissions = {
  grupos_permissao: 'Atribuir permissões de acesso para usuários',
  grupos_read: 'Visualizar dados do usuário',
  grupos_update: 'Alterar dados do usuário',
}
type TCan = (name: keyof typeof permissions) => boolean

export function GruposHead() {
  const onNew = gruposStore.use.onNew()
  const can: TCan = authStore.use.can()

  return (
    <div className="align-center my-1 flex flex-row justify-between">
      <div className="flex flex-row space-x-1">
        <Title>Grupos de segurança</Title>
        <Can
          can={can('grupos_permissao')}
          elseCan={null}
        >
          <Permissions permissions={permissions} />
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
