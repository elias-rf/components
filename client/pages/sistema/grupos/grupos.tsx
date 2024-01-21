import { Button } from '@/client/components/button/button.js'
import { Can } from '@/client/components/can.js'
import { FormHead } from '@/client/components/form-head/form-head.js'
import { GruposForm } from '@/client/pages/sistema/grupos/components/grupos.form.js'
import { GruposTable } from '@/client/pages/sistema/grupos/components/grupos.table.js'
import { groupStore } from '@/client/pages/sistema/grupos/grupos.store.js'
import { authStore } from '@/client/store/auth_store.js'
import { useSnapshot } from 'valtio'

const permissions = {
  sistema_grupos_permissao: 'Atribuir permissões de grupos',
  sistema_grupos_read: 'Visualizar grupos',
}

type TCan = (name: keyof typeof permissions) => boolean

export default function Grupos() {
  const status = useSnapshot(groupStore.state).status

  return (
    <Can can={authStore.can('sistema_grupos_read')}>
      <div className="flex flex-col h-full px-2">
        <FormHead
          className="flex-none"
          editPermissions={authStore.can('sistema_grupos_permissao')}
          permissions={permissions}
          title="Grupos"
        >
          <Button
            size={'sm'}
            onClick={groupStore.onNew}
          >
            NOVO
          </Button>
        </FormHead>
        <div>
          <div className="flex-auto h-64 border border-gray-400 dark:border-gray-500">
            <GruposTable store={groupStore} />
          </div>
          {status !== 'none' ? (
            <div className="flex-auto max-h-56">
              <GruposForm store={groupStore} />
            </div>
          ) : null}
        </div>
      </div>
    </Can>
  )
}
