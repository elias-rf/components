import { Can } from '@/client/components/can.js'
import { PrecosHead } from '@/client/features/precos/precos-head.js'
import { authStore } from '@/client/store/auth_store.js'
import { PrecosCliente } from '../../features/precos/precos-cliente.js'

const permissions = {
  precos_permissao: 'Atribuir permissões de preços',
  precos_read: 'Calcular preços',
}

export default function Precos() {
  const can = authStore.use.can()

  return (
    <Can can={can('cliente_read') || can('cliente_read_all')}>
      <PrecosHead
        can={can}
        permissions={permissions}
        className="print:hidden"
      />
      <div className="p-2">
        <PrecosCliente />
      </div>
    </Can>
  )
}
