import { Button } from '@/client/components/button/button.js'
import { Can } from '@/client/components/can.js'
import { FormHead } from '@/client/components/form-head/form-head.js'
import { agendaTelefoneStore } from '@/client/pages/outros/agenda/agenda.store.js'
import { AgendaTelefoneForm } from '@/client/pages/outros/agenda/components/agenda.form.js'
import { AgendaTelefoneTable } from '@/client/pages/outros/agenda/components/agenda.table.js'
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
  const { status } = useSnapshot(agendaTelefoneStore.state)

  return (
    <Can can={true}>
      <div className="flex h-full flex-col px-2">
        <FormHead
          className="flex-none"
          editPermissions={authStore.can('outros_agenda_permissao')}
          permissions={permissions}
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
    </Can>
  )
}
