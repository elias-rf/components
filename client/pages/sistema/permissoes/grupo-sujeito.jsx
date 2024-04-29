import { useQuery } from '@tanstack/react-query'
import { Button } from '../../../components/button/button.jsx'
import { Can } from '../../../components/can.jsx'
import { FormHead } from '../../../components/form-head/form-head.jsx'
import { grupoSujeitoStore } from '../../../pages/sistema/permissoes/components/grupo-sujeito.store.mjs'
import { GrupoSujeitoForm } from '../../../pages/sistema/permissoes/components/grupo-sujeito_form.jsx'
import { GrupoSujeitoTable } from '../../../pages/sistema/permissoes/components/grupo-sujeito_table.jsx'
import { authStore } from '../../../store/auth_store.mjs'
import { permissions } from './components/constants.mjs'

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
