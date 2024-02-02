import { Can } from '@/client/components/can.js'
import { FormHead } from '@/client/components/form-head/form-head.js'
import { authStore } from '@/client/store/auth_store.js'
import { permissions } from './components/constants.js'
import { PrecosCliente } from './components/precos-cliente.js'

export default function Precos() {
  return (
    <Can can={authStore.can('comercial_precos_read')}>
      <FormHead
        editPermissions={authStore.can('comercial_precos_permissao')}
        permissions={permissions}
        className="print:hidden"
        title="Preços"
      ></FormHead>
      <PrecosCliente />
    </Can>
  )
}
