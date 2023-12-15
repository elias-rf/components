import { Can } from '@/client/components/can.js'
import { FormHead } from '@/client/components/ui/form-head.js'
import { ClienteForm } from '@/client/pages/comercial/clientes/cliente_form.js'
import { clienteStore } from '@/client/pages/comercial/clientes/cliente_store.js'
import { ClienteTable } from '@/client/pages/comercial/clientes/cliente_table.js'
import { authStore } from '@/client/store/auth_store.js'

const permissions = {
  comercial_cliente_permissao: 'Atribuir permissões do cliente',
  // comercial_cliente_read: 'Visualizar dados dos clientes próprios',
  comercial_cliente_read_all: 'Visualizar dados de todos os clientes',
}

export default function Clientes() {
  const status = clienteStore.use.status()
  const can = authStore.use.can()

  return (
    <Can can={can('comercial_cliente_read') || can('cliente_read_all')}>
      <FormHead
        editPermissions={can('comercial_cliente_permissao')}
        permissions={permissions}
      >
        Histórico de Clientes
      </FormHead>

      <div className="border border-gray-400 dark:border-gray-500">
        <ClienteTable
          store={clienteStore}
          auth={authStore}
        />
      </div>
      {status !== 'none' ? (
        <div className="mb-2 border border-gray-400 p-1 dark:border-gray-500">
          <ClienteForm
            store={clienteStore}
            auth={authStore}
          />
        </div>
      ) : null}
    </Can>
  )
}
