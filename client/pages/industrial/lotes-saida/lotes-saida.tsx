import { Can } from '@/client/components/can.js'
import { FormHead } from '@/client/components/form-head/form-head.js'
import { permissions } from '@/client/pages/industrial/lotes-saida/components/constants.js'
import { lotesSaidaStore } from '@/client/pages/industrial/lotes-saida/components/lotes-saida.store.js'
import { LotesSaidaTable } from '@/client/pages/industrial/lotes-saida/components/lotes-saida.table.js'
import { authStore } from '@/client/store/auth_store.js'

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
