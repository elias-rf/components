import { useQuery } from '@tanstack/react-query'
import { Can } from '../../../components_/can.jsx'
import { FormHead } from '../../../components_/form-head/form-head.jsx'
import { permissions } from '../../../pages/industrial/lotes-saida/components/constants.mjs'
import { lotesSaidaStore } from '../../../pages/industrial/lotes-saida/components/lotes-saida.store.mjs'
import { LotesSaidaTable } from '../../../pages/industrial/lotes-saida/components/lotes-saida.table.jsx'
import { authStore } from '../../../store/auth_store.mjs'

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
