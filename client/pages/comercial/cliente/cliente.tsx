import { Can } from '@/client/components/can.js'
import { FormHead } from '@/client/components/form-head/form-head.js'
import { clienteStore } from '@/client/pages/comercial/cliente/cliente.store.js'
import { ClienteForm } from '@/client/pages/comercial/cliente/components/cliente.form.js'
import { ClienteTable } from '@/client/pages/comercial/cliente/components/cliente.table.js'
import { authStore } from '@/client/store/auth_store.js'
import { useSnapshot } from 'valtio'

const permissions = {
  comercial_cliente_permissao: 'Atribuir permissões do cliente',
  // comercial_cliente_read: 'Visualizar dados dos clientes próprios',
  comercial_cliente_read_all: 'Visualizar dados de todos os clientes',
}
type TCan = (name: keyof typeof permissions) => boolean

export default function Clientes() {
  const { status } = useSnapshot(clienteStore.state)

  return (
    <Can can={authStore.can('comercial_cliente_read_all')}>
      <div className="flex h-full flex-col px-2">
        <FormHead
          className="flex-none"
          editPermissions={authStore.can('comercial_cliente_permissao')}
          permissions={permissions}
          title="Histórico de Clientes"
        ></FormHead>

        <div className="h-64 flex-auto border border-gray-400 dark:border-gray-500">
          <ClienteTable store={clienteStore} />
        </div>
        {status !== 'none' ? (
          <div className="max-h-[300px] flex-auto">
            <ClienteForm store={clienteStore} />
          </div>
        ) : null}
      </div>
    </Can>
  )
}
