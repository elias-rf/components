import { Can } from '@/client/components/can.js'
import { FormHead } from '@/client/components/ui-old/form-head.js'
import { Transferencia } from '@/client/pages/industrial/transferencia/transferencia_form.js'
import { authStore } from '@/client/store/auth_store.js'

const permissions = {
  industrial_transferencia_permissao: 'Atribuir permissões de transferência',
  industrial_transferencia_create: 'Criar transferências para filial',
}
type TCan = (name: keyof typeof permissions) => boolean

export default function IndustrialTransferencia() {
  return (
    <Can can={authStore.can('industrial_transferencia_create')}>
      <FormHead
        editPermissions={authStore.can('industrial_transferencia_permissao')}
        permissions={permissions}
      >
        Transferências para Filial
      </FormHead>
      <Transferencia />
    </Can>
  )
}
