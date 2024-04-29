import { useQuery } from '@tanstack/react-query'
import { Button } from '../../../components_/button/button.jsx'
import { Can } from '../../../components_/can.jsx'
import { FormHead } from '../../../components_/form-head/form-head.jsx'
import { GruposForm } from '../../../pages/sistema/grupos/components/grupos.form.jsx'
import { grupoStore } from '../../../pages/sistema/grupos/components/grupos.store.mjs'
import { GruposTable } from '../../../pages/sistema/grupos/components/grupos.table.jsx'
import { authStore } from '../../../store/auth_store.mjs'
import { permissions } from './components/constants.mjs'

const permissionsList = Object.values(permissions).map(
  (permission) => permission.key
)

export default function Grupos() {
  const status = grupoStore.state.use.status()
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
          title="Grupos"
        >
          <Button
            size={'sm'}
            onClick={grupoStore.onNew}
          >
            NOVO
          </Button>
        </FormHead>
        <div>
          <div className="h-64 flex-auto border border-gray-400 dark:border-gray-500">
            <GruposTable store={grupoStore} />
          </div>
          {status !== 'none' ? (
            <div className="max-h-56 flex-auto">
              <GruposForm store={grupoStore} />
            </div>
          ) : null}
        </div>
      </div>
    </Can>
  )
}
