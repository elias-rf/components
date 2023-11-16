import { Can } from '@/client/components/can'
import { PrecosHead } from '@/client/features/precos/precos-head'
import { authStore } from '@/client/store/auth_store'
import { PrecosCliente } from '../../features/precos/precos-cliente'

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
      />
      <div className="p-2">
        <PrecosCliente />
      </div>
    </Can>
  )
}
