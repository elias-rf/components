import { Button } from '@/client/components/button/button.js'
import { Can } from '@/client/components/can.js'
import { FormHead } from '@/client/components/form-head/form-head.js'
import { GruposForm } from '@/client/pages/sistema/grupos/components/grupos.form.js'
import { grupoStore } from '@/client/pages/sistema/grupos/components/grupos.store.js'
import { GruposTable } from '@/client/pages/sistema/grupos/components/grupos.table.js'
import { authStore } from '@/client/store/auth_store.js'
import { useQuery } from '@tanstack/react-query'
import { permissions } from './components/constants.js'

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
