import { Can } from '@/client/components/can.js'
import { LotesSaidaHead } from '@/client/features/indutrial/lotes-saida/lotes-saida_head.js'
import { LotesSaidaTable } from '@/client/features/indutrial/lotes-saida/lotes-saida_table.js'
import { authStore } from '@/client/store/auth_store.js'

const permissions = {
  industrial_lotesSaida_permissao: 'Atribuir permissões do cliente',
  industrial_lotesSaida_read: 'Visualizar dados do cliente próprio',
}

export default function Clientes() {
  const can = authStore.use.can()

  return (
    <Can can={can('lotes_saida_read')}>
      <LotesSaidaHead
        can={can}
        permissions={permissions}
      />
      <div className="border border-gray-400 dark:border-gray-500">
        <LotesSaidaTable />
      </div>
    </Can>
  )
}
