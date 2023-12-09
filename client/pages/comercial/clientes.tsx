import { Can } from '@/client/components/can.js'
import { FormHead } from '@/client/components/ui/form-head.js'
import { ClienteForm } from '@/client/features/comercial/cliente/cliente_form.js'
import { clienteStore } from '@/client/features/comercial/cliente/cliente_store.js'
import { ClienteTable } from '@/client/features/comercial/cliente/cliente_table.js'
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
        title="Histórico de Cliente"
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
