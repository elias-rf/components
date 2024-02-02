import { Can } from '@/client/components/can.js'
import { FormHead } from '@/client/components/form-head/form-head.js'
import { ClienteForm } from '@/client/pages/comercial/cliente/components/cliente.form.js'
import { clienteStore } from '@/client/pages/comercial/cliente/components/cliente.store.js'
import { ClienteTable } from '@/client/pages/comercial/cliente/components/cliente.table.js'
import { permissions } from '@/client/pages/comercial/cliente/components/constants.js'
import { authStore } from '@/client/store/auth_store.js'

export default function Clientes() {
  const status = clienteStore.state((state) => state.status)

  return (
    <Can can={authStore.can('comercial_cliente_read_all')}>
      <div className="flex flex-col h-full px-2">
        <FormHead
          className="flex-none"
          editPermissions={authStore.can('comercial_cliente_permissao')}
          permissions={permissions}
          title="Histórico de Clientes"
        ></FormHead>

        <div className="flex-auto h-64 border border-gray-400 dark:border-gray-500">
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
