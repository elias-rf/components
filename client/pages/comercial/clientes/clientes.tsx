import { Can } from '@/client/components/can.js'
import { FormHead } from '@/client/components/ui-old/form-head.js'
import { ClienteForm } from '@/client/pages/comercial/clientes/cliente_form.js'
import { clienteStore } from '@/client/pages/comercial/clientes/cliente_store.js'
import { ClienteTable } from '@/client/pages/comercial/clientes/cliente_table.js'
import { can } from '@/client/store/auth_store.js'
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

  const status = clienteStore.use.status()

  return (
    <Can can={can('comercial_cliente_read_all')}>
      <FormHead
        editPermissions={can('comercial_cliente_permissao')}
        permissions={permissions}
      >
        Histórico de Clientes
      </FormHead>

      <div className="border border-gray-400 dark:border-gray-500">
        <ClienteTable
          store={clienteStore}
          height={`${status !== 'none' ? pageHeight - 400 : pageHeight}px`}
        />
      </div>
      {status !== 'none' ? (
        <div className="p-1 mb-2 border border-gray-400 dark:border-gray-500">
          <ClienteForm store={clienteStore} />
        </div>
      ) : null}
    </Can>
  )
}
