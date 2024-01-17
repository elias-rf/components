import { Button } from '@/client/components/button/button.js'
import { Can } from '@/client/components/can.js'
import { Title } from '@/client/components/title/title.js'
import { Permissions } from '@/client/features/permissions.js'
import { groupStore } from '@/client/pages/sistema/grupos/components/grupos_store.js'
import { authStore } from '@/client/store/auth_store.js'

const permissions = {
  grupos_permissao: 'Atribuir permissões de acesso para usuários',
  grupos_read: 'Visualizar dados do usuário',
  grupos_update: 'Alterar dados do usuário',
}
type TCan = (name: keyof typeof permissions) => boolean

export function GruposHead() {
  return (
    <div className="align-center my-1 flex flex-row justify-between">
      <div className="flex flex-row space-x-1">
        <Title>Grupos de segurança</Title>
        <Can
          can={authStore.can('grupos_permissao')}
          elseCan={null}
        >
          <Permissions permissions={permissions} />
        </Can>
      </div>
      <div className="flex flex-row space-x-2">
        <Button
          onClick={groupStore.onNew}
          disabled={false}
          size="sm"
        >
          NOVO
        </Button>
      </div>
    </div>
  )
}
