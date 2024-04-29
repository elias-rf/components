import { useQuery } from '@tanstack/react-query'
import { Can } from '../../../components/can.jsx'
import { FormHead } from '../../../components/form-head/form-head.jsx'
import { authStore } from '../../../store/auth_store.mjs'
import { permissions } from './components/constants.mjs'
import { PrecosCliente } from './components/precos-cliente.jsx'

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
