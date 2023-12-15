import { Can } from '@/client/components/can.js'
import { FormHead } from '@/client/components/ui/form-head.js'
import { GruposForm } from '@/client/pages/sistema/grupos/grupos_form.js'
import { gruposStore } from '@/client/pages/sistema/grupos/grupos_store.js'
import { GruposTable } from '@/client/pages/sistema/grupos/grupos_table.js'
import { authStore } from '@/client/store/auth_store.js'

const permissions = {
  sistema_grupos_permissao: 'Atribuir permissões de grupos',
  sistema_grupos_read: 'Visualizar grupos',
}

export type TCan = (name: keyof typeof permissions) => boolean

export default function Grupos() {
  const status = gruposStore.use.status()
  const can: TCan = authStore.use.can()

  return (
    <Can can={can('sistema_grupos_read')}>
      <FormHead
        editPermissions={can('sistema_grupos_permissao')}
        permissions={permissions}
        className="print:hidden"
      >
        Grupos
      </FormHead>
      <div data-name="Grupos">
        <GruposTable
          store={gruposStore}
          auth={authStore}
        />
        {status !== 'none' ? (
          <div className="mb-2 border border-gray-300 p-1">
            <GruposForm
              store={gruposStore}
              auth={authStore}
            />
          </div>
        ) : null}
      </div>
    </Can>
  )
}
