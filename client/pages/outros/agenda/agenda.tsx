import { FormHead } from '@/client/components/ui-old/form-head.js'
import { AgendaTelefoneForm } from '@/client/pages/outros/agenda/agenda-telefone_form.js'
import { agendaTelefoneStore } from '@/client/pages/outros/agenda/agenda-telefone_store.js'
import { AgendaTelefoneTable } from '@/client/pages/outros/agenda/agenda-telefone_table.js'
import { can } from '@/client/store/auth_store.js'
import { useHookstate } from '@hookstate/core'

const permissions = {
  outros_agenda_permissao: 'Atribuir permissões',
  outros_agenda_edit: 'Alterar ramais',
  outros_agenda_create: 'Lançar novos ramais',
}
type TCan = (name: keyof typeof permissions) => boolean

/**
 * Agenda de Ramais
 */
export default function Agenda() {
  const status = useHookstate(agendaTelefoneStore.state.status)
  return (
    <div data-name="AgendaTelefone">
      <FormHead
        permissions={permissions}
        editPermissions={can('outros_agenda_permissao')}
      >
        Agenda de Ramais
      </FormHead>
      <div className="border border-gray-400 dark:border-gray-500">
        <AgendaTelefoneTable store={agendaTelefoneStore} />
      </div>
      {status.value !== 'none' ? (
        <div className="mb-2 border border-gray-400 p-1 dark:border-gray-500">
          <AgendaTelefoneForm store={agendaTelefoneStore} />
        </div>
      ) : null}
    </div>
  )
}
