import { Button } from '@/client/components/button/button.js'
import { FormHead } from '@/client/components/ui-old/form-head.js'
import { AgendaTelefoneForm } from '@/client/pages/outros/agenda/agenda_form.js'
import { AgendaTelefoneTable } from '@/client/pages/outros/agenda/agenda_table.js'
import { agendaTelefoneStore } from '@/client/pages/outros/agenda/components/agenda_store.js'
import { authStore } from '@/client/store/auth_store.js'
import { useSnapshot } from 'valtio'

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
  const status = useSnapshot(agendaTelefoneStore.state).status
  return (
    <div className="flex h-full flex-col px-2">
      <FormHead
        permissions={permissions}
        editPermissions={authStore.can('outros_agenda_permissao')}
        className="flex-none"
        title="Agenda de Ramais"
      >
        <Button
          size={'sm'}
          onClick={agendaTelefoneStore.onNew}
        >
          NOVO
        </Button>
      </FormHead>
      <div className="h-64 flex-auto border border-gray-400 dark:border-gray-500">
        <AgendaTelefoneTable store={agendaTelefoneStore} />
      </div>
      {status !== 'none' ? (
        <div className="max-h-56 flex-auto">
          <AgendaTelefoneForm store={agendaTelefoneStore} />
        </div>
      ) : null}
    </div>
  )
}
