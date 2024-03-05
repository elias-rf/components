import { Can } from '@/client/components/can.js'
import { FormHead } from '@/client/components/form-head/form-head.js'
import { authStore } from '@/client/store/auth_store.js'
import { useQuery } from '@tanstack/react-query'
import { permissions } from './components/constants.js'
import { PrecosCliente } from './components/precos-cliente.js'

const permissionsList = Object.values(permissions).map(
  (permission) => permission.key
)

export default function Precos() {
  const currentUser = authStore.state.use.currentUser()
  const canList = useQuery({
    queryKey: ['canList'],
    queryFn: () =>
      authStore.canList(currentUser.grupoIds || '', permissionsList),
  })

  return (
    <Can can={canList.data?.[permissions.READ.key]}>
      <div className="px-4">
        <FormHead
          editPermissions={canList.data?.[permissions.PERMISSAO.key] || false}
          permissions={permissions}
          className="print:hidden"
          title="Preços"
        ></FormHead>
        <PrecosCliente />
      </div>
    </Can>
  )
}
