import { Button } from '@/client/components/button/button.js'
import { Can } from '@/client/components/can.js'
import { FormHead } from '@/client/components/form-head/form-head.js'
import { grupoSujeitoStore } from '@/client/pages/sistema/permissoes/components/grupo-sujeito.store.js'
import { GrupoSujeitoForm } from '@/client/pages/sistema/permissoes/components/grupo-sujeito_form.js'
import { GrupoSujeitoTable } from '@/client/pages/sistema/permissoes/components/grupo-sujeito_table.js'
import { authStore } from '@/client/store/auth_store.js'
import { useQuery } from '@tanstack/react-query'
import { permissions } from './components/constants.js'

const permissionsList = Object.values(permissions).map(
  (permission) => permission.key
)

/**
 * Componente para manipular Agenda de Ramais
 *
 * @returns {*} componente react
 */
export default function GrupoSujeito() {
  const status = grupoSujeitoStore.state.use.status()
  const currentUser = authStore.state.use.currentUser()
  const canList = useQuery({
    queryKey: ['canList'],
    queryFn: () =>
      authStore.canList(currentUser.grupoIds || '', permissionsList),
  })

  return (
    <Can can={canList.data?.[permissions.READ.key]}>
      <div className="flex h-full flex-col px-2">
        <FormHead
          className="flex-none"
          editPermissions={canList.data?.[permissions.PERMISSAO.key] || false}
          permissions={permissions}
          title="Permissões"
        >
          <Button
            size={'sm'}
            onClick={grupoSujeitoStore.onNew}
          >
            NOVO
          </Button>
        </FormHead>
        <div className="h-64 flex-auto border border-gray-400 dark:border-gray-500">
          <GrupoSujeitoTable store={grupoSujeitoStore} />
        </div>
        {status !== 'none' ? (
          <div className="max-h-56 flex-auto">
            <GrupoSujeitoForm store={grupoSujeitoStore} />
          </div>
        ) : null}
      </div>
    </Can>
  )
}
