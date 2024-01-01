import { Can } from '@/client/components/can.js'
import { FormHead } from '@/client/components/ui-old/form-head.js'
import { precosStore } from '@/client/pages/comercial/precos/precos_store.js'
import { can } from '@/client/store/auth_store.js'
import { PrecosCliente } from './precos-cliente.js'

const permissions = {
  comercial_precos_permissao: 'Atribuir permissões de preços',
  comercial_precos_read: 'Calcular preços',
}
type TCan = (name: keyof typeof permissions) => boolean

export default function Precos() {
  return (
    <Can can={can('comercial_precos_read')}>
      <FormHead
        editPermissions={can('comercial_precos_permissao')}
        permissions={permissions}
        className="print:hidden"
      >
        Preços
      </FormHead>
      <PrecosCliente />
    </Can>
  )
}
