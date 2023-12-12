import { FormHead } from '@/client/components/ui/form-head.js'
import { AgendaTelefoneForm } from '@/client/features/outros/agenda-telefone/agenda-telefone_form.js'
import { agendaTelefoneStore } from '@/client/features/outros/agenda-telefone/agenda-telefone_store.js'
import { AgendaTelefoneTable } from '@/client/features/outros/agenda-telefone/agenda-telefone_table.js'
import { authStore } from '@/client/store/auth_store.js'

const permissions = {
  outros_agenda_permissao: 'Atribuir permissões',
  outros_agenda_edit: 'Alterar ramais',
  outros_agenda_create: 'Lançar novos ramais',
}

/**
 * Agenda de Ramais
 */
export default function Agenda() {
  const status = agendaTelefoneStore.use.status()
  const can = authStore.use.can()

  return (
    <div data-name="AgendaTelefone">
      <FormHead
        permissions={permissions}
        editPermissions={can('comercial_cliente_permissao')}
      >
        Agenda de Ramais
      </FormHead>
      <div className="border border-gray-400 dark:border-gray-500">
        <AgendaTelefoneTable
          store={agendaTelefoneStore}
          auth={authStore}
        />
      </div>
      {status !== 'none' ? (
        <div className="p-1 mb-2 border border-gray-400 dark:border-gray-500">
          <AgendaTelefoneForm
            store={agendaTelefoneStore}
            auth={authStore}
          />
        </div>
      ) : null}
    </div>
  )
}
