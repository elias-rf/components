import { Can } from '@/client/components/can.js'
import { FormHead } from '@/client/components/ui-old/form-head.js'
import { lotesSaidaStore } from '@/client/pages/industrial/lotes-saida/components/lotes-saida_store.js'
import { LotesSaidaTable } from '@/client/pages/industrial/lotes-saida/lotes-saida_table.js'
import { authStore } from '@/client/store/auth_store.js'

const permissions = {
  industrial_lotesSaida_permissao: 'Atribuir permissões do cliente',
  industrial_lotesSaida_read: 'Visualizar dados do cliente próprio',
}
type TCan = (name: keyof typeof permissions) => boolean

export default function Clientes() {
  return (
    <Can can={authStore.can('industrial_lotesSaida_read')}>
      <FormHead
        editPermissions={authStore.can('industrial_lotesSaida_permissao')}
        permissions={permissions}
        title="Rastreamento de produtos"
      ></FormHead>
      <div className="border border-gray-400 dark:border-gray-500">
        <LotesSaidaTable store={lotesSaidaStore} />
      </div>
    </Can>
  )
}
