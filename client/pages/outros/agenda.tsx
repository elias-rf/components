import { AgendaTelefoneForm } from '@/client/features/agenda-telefone/agenda-telefone_form'
import { AgendaTelefoneHead } from '@/client/features/agenda-telefone/agenda-telefone_head'
import { useAgendaTelefone } from '@/client/features/agenda-telefone/agenda-telefone_store'
import { AgendaTelefoneTable } from '@/client/features/agenda-telefone/agenda-telefone_table'

/**
 * Agenda de Ramais
 */
export default function Agenda() {
  const status = useAgendaTelefone.use.status()

  return (
    <div data-name="AgendaTelefone">
      <AgendaTelefoneHead />
      <AgendaTelefoneTable />
      {status !== 'none' ? (
        <div className="p-1 mb-2 border border-gray-300">
          <AgendaTelefoneForm />
        </div>
      ) : null}
    </div>
  )
}
