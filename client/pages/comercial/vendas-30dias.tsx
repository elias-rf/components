import { Can } from '@/client/components/can.js'
import { FormHead } from '@/client/components/ui/form-head.js'
import { Vendas30dias as Vendas } from '@/client/features/comercial/vendas30dias/vendas-30dias.js'
import { vendas30DiasStore } from '@/client/features/comercial/vendas30dias/vendas-30dias.store.js'
import { authStore } from '@/client/store/auth_store.js'

const permissions = {
  comercial_vendas30dias_permissao: 'Atribuir permissões de vendas 30 dias',
  comercial_vendas30dias_read: 'Visualizar Vendas 30 dias',
}

/**
 * Componente para manipular Agenda de Ramais
 * @returns {*} componente react
 */
export default function Vendas30dias() {
  const can = authStore.use.can()

  return (
    <Can can={can('comercial_vendas30dias_read')}>
      <FormHead
        editPermissions={can('comercial_vendas30dias_permissao')}
        permissions={permissions}
        className="print:hidden"
      >
        Vendas dos últimos 30 dias
      </FormHead>
      <Vendas
        store={vendas30DiasStore}
        auth={authStore}
      />
    </Can>
  )
}
