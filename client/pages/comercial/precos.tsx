import { Can } from '@/client/components/can.js'
import { FormHead } from '@/client/components/ui/form-head.js'
import { authStore } from '@/client/store/auth_store.js'
import { PrecosCliente } from '../../features/comercial/precos/precos-cliente.js'

const permissions = {
  comercial_precos_permissao: 'Atribuir permissões de preços',
  comercial_precos_read: 'Calcular preços',
}

export default function Precos() {
  const can = authStore.use.can()

  return (
    <Can can={can('comercial_precos_read')}>
      <FormHead
        editPermissions={can('comercial_precos_permissao')}
        permissions={permissions}
        className="print:hidden"
        title="Preços"
      />
      <div className="p-2">
        <PrecosCliente />
      </div>
    </Can>
  )
}
