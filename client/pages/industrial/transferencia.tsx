import { Can } from '@/client/components/can.js'
import { Transferencia } from '@/client/features/indutrial/transferencia/transferencia.js'
import { TransferenciaHead } from '@/client/features/indutrial/transferencia/transferencia_head.js'
import { authStore } from '@/client/store/auth_store.js'

const permissions = {
  industrial_transferencia_permissao: 'Atribuir permissões de transferência',
  industrial_transferencia_create: 'Criar transferências para filial',
}

export default function IndustrialTransferencia() {
  const can = authStore.use.can()

  return (
    <Can can={can('transferencia_create')}>
      <TransferenciaHead
        can={can}
        permissions={permissions}
      />
      <Transferencia />
    </Can>
  )
}
