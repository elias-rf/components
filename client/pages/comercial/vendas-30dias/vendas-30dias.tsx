import { Can } from '@/client/components/can.js'
import { FormHead } from '@/client/components/ui-old/form-head.js'
import { vendas30DiasStore } from '@/client/pages/comercial/vendas-30dias/vendas-30dias.store.js'
import { Vendas30dias as Vendas } from '@/client/pages/comercial/vendas-30dias/vendas-30dias_form.js'
import { can } from '@/client/store/auth_store.js'

const permissions = {
  comercial_vendas30dias_permissao: 'Atribuir permissões de vendas 30 dias',
  comercial_vendas30dias_read: 'Visualizar Vendas 30 dias',
}
type TCan = (name: keyof typeof permissions) => boolean

/**
 * Componente para manipular Agenda de Ramais
 * @returns {*} componente react
 */
export default function Vendas30dias() {
  return (
    <Can can={can('comercial_vendas30dias_read')}>
      <FormHead
        editPermissions={can('comercial_vendas30dias_permissao')}
        permissions={permissions}
        className="print:hidden"
      >
        Vendas dos últimos 30 dias
      </FormHead>
      <Vendas store={vendas30DiasStore} />
    </Can>
  )
}
