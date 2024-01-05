import { Can } from '@/client/components/can.js'
import { FormHead } from '@/client/components/ui-old/form-head.js'
import { ClienteForm } from '@/client/pages/comercial/clientes/clientes_form.js'
import { ClienteTable } from '@/client/pages/comercial/clientes/clientes_table.js'
import { clienteStore } from '@/client/pages/comercial/clientes/components/clientes_store.js'
import { authStore } from '@/client/store/auth_store.js'
import { pageSizeState } from '@/client/store/page-size-store.js'
import { useSnapshot } from 'valtio'

const permissions = {
  comercial_cliente_permissao: 'Atribuir permissões do cliente',
  // comercial_cliente_read: 'Visualizar dados dos clientes próprios',
  comercial_cliente_read_all: 'Visualizar dados de todos os clientes',
}
type TCan = (name: keyof typeof permissions) => boolean

export default function Clientes() {
  const pageHeight = useSnapshot(pageSizeState).height

  const status = useSnapshot(clienteStore.state).status

  return (
    <Can can={authStore.can('comercial_cliente_read_all')}>
      <div className="flex flex-col h-full px-2">
        <FormHead
          editPermissions={authStore.can('comercial_cliente_permissao')}
          permissions={permissions}
          className="flex-none"
        >
          Histórico de Clientes
        </FormHead>

        <div className="flex-auto border border-gray-400 min-h-40 dark:border-gray-500">
          <ClienteTable store={clienteStore} />
        </div>
        {status !== 'none' ? (
          <div className="flex-auto max-h-96">
            <ClienteForm store={clienteStore} />
          </div>
        ) : null}
      </div>
    </Can>
  )
}
