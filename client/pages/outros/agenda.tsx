import { AgendaTelefoneForm } from '@/client/features/agenda-telefone/agenda-telefone_form'
import { AgendaTelefoneHead } from '@/client/features/agenda-telefone/agenda-telefone_head'
import { agendaTelefoneStore } from '@/client/features/agenda-telefone/agenda-telefone_store'
import { AgendaTelefoneTable } from '@/client/features/agenda-telefone/agenda-telefone_table'

/**
 * Agenda de Ramais
 */
export default function Agenda() {
  const status = agendaTelefoneStore.use.status()

  return (
    <div data-name="AgendaTelefone">
      <AgendaTelefoneHead />
      <div className="border border-gray-400 dark:border-gray-500">
        <AgendaTelefoneTable />
      </div>
      {status !== 'none' ? (
        <div className="p-1 mb-2 border border-gray-400 dark:border-gray-500">
          <AgendaTelefoneForm />
        </div>
      ) : null}
    </div>
  )
}
