import { useQuery } from '@tanstack/react-query'
import { Can } from '../../../components/can.jsx'
import { FormHead } from '../../../components/form-head/form-head.jsx'
import { TransferenciaForm } from '../../../pages/industrial/transferencia/components/transferencia_form.jsx'
import { authStore } from '../../../store/auth_store.mjs'
import { permissions } from './components/constants.mjs'

const permissionsList = Object.values(permissions).map(
  (permission) => permission.key
)

export default function Transferencia() {
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
        title="Transferência para Filial"
      ></FormHead>
      <TransferenciaForm />
    </Can>
  )
}
