import { Can } from '@/client/components/can.js'
import { FormHead } from '@/client/components/ui/form-head.js'
import { precosStore } from '@/client/pages/comercial/precos/precos_store.js'
import { authStore } from '@/client/store/auth_store.js'
import { PrecosCliente } from './precos-cliente.js'

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
      >
        Preços
      </FormHead>
      <PrecosCliente auth={authStore} />
    </Can>
  )
}
