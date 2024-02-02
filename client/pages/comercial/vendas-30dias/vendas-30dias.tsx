import { Can } from '@/client/components/can.js'
import { FormHead } from '@/client/components/form-head/form-head.js'
import { permissions } from '@/client/pages/comercial/vendas-30dias/components/constants.js'
import { vendas30DiasStore } from '@/client/pages/comercial/vendas-30dias/components/vendas-30dias.store.js'
import { Vendas30dias as Vendas } from '@/client/pages/comercial/vendas-30dias/components/vendas-30dias_form.js'
import { authStore } from '@/client/store/auth_store.js'

/**
 * Componente para manipular Agenda de Ramais
 * @returns {*} componente react
 */
export default function Vendas30dias() {
  return (
    <Can can={authStore.can('comercial_vendas30dias_read')}>
      <FormHead
        editPermissions={authStore.can('comercial_vendas30dias_permissao')}
        permissions={permissions}
        title="Vendas dos primeiros 30 dias"
      ></FormHead>
      <Vendas store={vendas30DiasStore} />
    </Can>
  )
}
