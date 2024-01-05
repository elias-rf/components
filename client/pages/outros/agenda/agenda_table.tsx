import { Table } from '@/client/components/table/table.js'
import { agendaTelefoneColumns } from '@/client/pages/outros/agenda/components/agenda_columns.js'
import { TAgendaTelefoneStore } from '@/client/pages/outros/agenda/components/agenda_store.js'
import {
  TAgendaTelefoneFields,
  TAgendaTelefoneKeys,
} from '@/controllers/agenda-telefone_controller.js'
import type { TData, TId, TOrderBy, TWhere } from '@/types/index.js'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useSnapshot } from 'valtio'

/**
 * Agenda de Ramais
 */
export function AgendaTelefoneTable({
  store,
}: {
  store: TAgendaTelefoneStore
}) {
  const state = useSnapshot(store.state)

  function getId(row: TData<TAgendaTelefoneFields>): TId<TAgendaTelefoneKeys> {
    return [['id', row.id]]
  }

  useEffect(() => {
    toast.promise(
      store.fetchList(),
      {
        loading: 'lendo...',
        success: 'sucesso!',
        error: 'Erro ao carregar agenda de telefones!',
      },
      {
        id: 'agenda-telefone-table',
      }
    )
  }, [state.where, state.orderBy])

  return (
    <div
      data-name="AgendaTelefoneTable"
      className="h-full"
    >
      <Table
        columns={agendaTelefoneColumns}
        getId={getId}
        onOrderBy={store.setOrderBy}
        onSelection={store.setSelection}
        onWhere={store.setWhere}
        orderBy={state.orderBy as TOrderBy<TAgendaTelefoneFields>}
        rows={state.list as TData<TAgendaTelefoneFields>[]}
        selection={state.selection as TId<TAgendaTelefoneKeys>}
        where={state.where as TWhere<TAgendaTelefoneFields>}
      />
    </div>
  )
}
