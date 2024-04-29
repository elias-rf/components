import { useQuery } from '@tanstack/react-query'
import { Can } from '../../../components_/can.jsx'
import { FormHead } from '../../../components_/form-head/form-head.jsx'
import { ClienteForm } from '../../../pages/comercial/cliente/components/cliente.form.jsx'
import { clienteStore } from '../../../pages/comercial/cliente/components/cliente.store.mjs'
import { ClienteTable } from '../../../pages/comercial/cliente/components/cliente.table.jsx'
import { permissions } from '../../../pages/comercial/cliente/components/constants.mjs'
import { authStore } from '../../../store/auth_store.mjs'

const permissionsList = Object.values(permissions).map(
  (permission) => permission.key
)

export default function Clientes() {
  const status = clienteStore.state.use.status()
  const currentUser = authStore.state.use.currentUser()
  const canList = useQuery({
    queryKey: ['canList'],
    queryFn: () =>
      authStore.canList(currentUser.grupoIds || '', permissionsList),
  })

  if (!canList.data) {
    return null
  }

  return (
    <Can can={canList.data?.[permissions.READ.key]}>
      <div className="flex h-full flex-col px-2">
        <FormHead
          className="flex-none"
          editPermissions={canList.data?.[permissions.PERMISSAO.key] || false}
          permissions={permissions}
          title="Histórico de Clientes"
        ></FormHead>

        <div className="h-64 flex-auto border border-gray-400 dark:border-gray-500">
          <ClienteTable store={clienteStore} />
        </div>
        {status !== 'none' ? (
          <div className="max-h-[300px] flex-auto">
            <ClienteForm store={clienteStore} />
          </div>
        ) : null}
      </div>
    </Can>
  )
}
