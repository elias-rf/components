import { Can } from '@/client/components/can.js'
import { ClienteForm } from '@/client/features/cliente/cliente_form.js'
import { ClienteHead } from '@/client/features/cliente/cliente_head.js'
import { clienteStore } from '@/client/features/cliente/cliente_store.js'
import { ClienteTable } from '@/client/features/cliente/cliente_table.js'
import { authStore } from '@/client/store/auth_store.js'

const permissions = {
  cliente_permissao: 'Atribuir permissões do cliente',
  cliente_read: 'Visualizar dados do cliente próprio',
  cliente_read_all: 'Visualizar dados de todos os cliente',
}

export default function Clientes() {
  const status = clienteStore.use.status()
  const can = authStore.use.can()

  return (
    <Can can={can('cliente_read') || can('cliente_read_all')}>
      <ClienteHead
        can={can}
        permissions={permissions}
      />
      <div className="border border-gray-400 dark:border-gray-500">
        <ClienteTable />
      </div>
      {status !== 'none' ? (
        <div className="p-1 mb-2 border border-gray-400 dark:border-gray-500">
          <ClienteForm />
        </div>
      ) : null}
    </Can>
  )
}
