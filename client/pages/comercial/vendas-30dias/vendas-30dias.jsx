import { Can } from '@/client/components/can.jsx'
import { FormHead } from '@/client/components/form-head/form-head.jsx'
import { permissions } from '@/client/pages/comercial/vendas-30dias/components/constants.mjs'
import { vendas30DiasStore } from '@/client/pages/comercial/vendas-30dias/components/vendas-30dias.store.mjs'
import { Vendas30dias as Vendas } from '@/client/pages/comercial/vendas-30dias/components/vendas-30dias_form.jsx'
import { authStore } from '@/client/store/auth_store.mjs'
import { useQuery } from '@tanstack/react-query'

const permissionsList = Object.values(permissions).map(
  (permission) => permission.key
)

/**
 * Componente para manipular Agenda de Ramais
 * @returns {*} componente react
 */
export default function Vendas30dias() {
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
        title="Vendas dos primeiros 30 dias"
      ></FormHead>
      <Vendas store={vendas30DiasStore} />
    </Can>
  )
}
