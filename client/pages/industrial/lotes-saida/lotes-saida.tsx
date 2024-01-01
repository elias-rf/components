import { Can } from '@/client/components/can.js'
import { FormHead } from '@/client/components/ui-old/form-head.js'
import { lotesSaidaStore } from '@/client/pages/industrial/lotes-saida/lotes-saida_store.js'
import { LotesSaidaTable } from '@/client/pages/industrial/lotes-saida/lotes-saida_table.js'
import { can } from '@/client/store/auth_store.js'

const permissions = {
  industrial_lotesSaida_permissao: 'Atribuir permissões do cliente',
  industrial_lotesSaida_read: 'Visualizar dados do cliente próprio',
}
type TCan = (name: keyof typeof permissions) => boolean

export default function Clientes() {
  return (
    <Can can={can('industrial_lotesSaida_read')}>
      <FormHead
        editPermissions={can('industrial_lotesSaida_permissao')}
        permissions={permissions}
      >
        Rastreamento de produtos
      </FormHead>
      <div className="border border-gray-400 dark:border-gray-500">
        <LotesSaidaTable store={lotesSaidaStore} />
      </div>
    </Can>
  )
}
