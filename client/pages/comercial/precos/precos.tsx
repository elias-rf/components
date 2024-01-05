import { Can } from '@/client/components/can.js'
import { FormHead } from '@/client/components/ui-old/form-head.js'
import { authStore } from '@/client/store/auth_store.js'
import { PrecosCliente } from './precos-cliente.js'

const permissions = {
  comercial_precos_permissao: 'Atribuir permissões de preços',
  comercial_precos_read: 'Calcular preços',
}
type TCan = (name: keyof typeof permissions) => boolean

export default function Precos() {
  return (
    <Can can={authStore.can('comercial_precos_read')}>
      <FormHead
        editPermissions={authStore.can('comercial_precos_permissao')}
        permissions={permissions}
        className="print:hidden"
      >
        Preços
      </FormHead>
      <PrecosCliente />
    </Can>
  )
}
