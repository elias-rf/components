import { Can } from '@/client/components/can.js'
import { FormHead } from '@/client/components/ui-old/form-head.js'
import { groupStore } from '@/client/pages/sistema/grupos/components/grupos_store.js'
import { GruposForm } from '@/client/pages/sistema/grupos/grupos_form.js'
import { GruposTable } from '@/client/pages/sistema/grupos/grupos_table.js'
import { authStore } from '@/client/store/auth_store.js'
import { useSnapshot } from 'valtio'

const permissions = {
  sistema_grupos_permissao: 'Atribuir permissões de grupos',
  sistema_grupos_read: 'Visualizar grupos',
}

export type TCan = (name: keyof typeof permissions) => boolean

export default function Grupos() {
  const status = useSnapshot(groupStore.state).status

  return (
    <Can can={authStore.can('sistema_grupos_read')}>
      <FormHead
        editPermissions={authStore.can('sistema_grupos_permissao')}
        permissions={permissions}
        className="print:hidden"
      >
        Grupos
      </FormHead>
      <div>
        <GruposTable store={groupStore} />
        {status !== 'none' ? (
          <div className="p-1 mb-2 border border-gray-300">
            <GruposForm store={groupStore} />
          </div>
        ) : null}
      </div>
    </Can>
  )
}
