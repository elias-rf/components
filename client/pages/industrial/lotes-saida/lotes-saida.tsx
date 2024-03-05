import { Can } from '@/client/components/can.js'
import { FormHead } from '@/client/components/form-head/form-head.js'
import { permissions } from '@/client/pages/industrial/lotes-saida/components/constants.js'
import { lotesSaidaStore } from '@/client/pages/industrial/lotes-saida/components/lotes-saida.store.js'
import { LotesSaidaTable } from '@/client/pages/industrial/lotes-saida/components/lotes-saida.table.js'
import { authStore } from '@/client/store/auth_store.js'
import { useQuery } from '@tanstack/react-query'

const permissionsList = Object.values(permissions).map(
  (permission) => permission.key
)

export default function Clientes() {
  const currentUser = authStore.state.use.currentUser()
  const canList = useQuery({
    queryKey: ['canList'],
    queryFn: () =>
      authStore.canList(currentUser.grupoIds || '', permissionsList),
  })

  return (
    <Can can={canList.data?.[permissions.READ.key]}>
      <FormHead
        editPermissions={canList.data?.[permissions.PERMISSAO.key] || false}
        permissions={permissions}
        title="Rastreamento de produtos"
      ></FormHead>
      <div className="border border-gray-400 dark:border-gray-500">
        <LotesSaidaTable store={lotesSaidaStore} />
      </div>
    </Can>
  )
}
