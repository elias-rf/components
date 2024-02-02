import { Can } from '@/client/components/can.js'
import { FormHead } from '@/client/components/form-head/form-head.js'
import { Transferencia } from '@/client/pages/industrial/transferencia/components/transferencia_form.js'
import { authStore } from '@/client/store/auth_store.js'
import { permissions } from './components/constants.js'

export default function IndustrialTransferencia() {
  return (
    <Can can={authStore.can('industrial_transferencia_create')}>
      <FormHead
        editPermissions={authStore.can('industrial_transferencia_permissao')}
        permissions={permissions}
        title="Transferência para Filial"
      ></FormHead>
      <Transferencia />
    </Can>
  )
}
