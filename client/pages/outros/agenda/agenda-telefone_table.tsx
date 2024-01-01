import { Table } from '@/client/components/table/table.js'
import { TAgendaTelefoneStore } from '@/client/pages/outros/agenda/agenda-telefone_store.js'
import { agendaTelefoneColumns } from '@/client/pages/outros/agenda/components/agenda-telefone_columns.js'
import { pageSizeState } from '@/client/store/page-size-store.js'
import {
  TAgendaTelefoneFields,
  TAgendaTelefoneKeys,
} from '@/controllers/agenda-telefone_controller.js'
import type { TData, TId, TOrderBy, TWhere } from '@/types/index.js'
import { useHookstate } from '@hookstate/core'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'

/**
 * Agenda de Ramais
 */
export function AgendaTelefoneTable({
  store,
}: {
  store: TAgendaTelefoneStore
}) {
  const pageHeight = pageSizeState.value.height * 0.7
  const { where, orderBy, list, selection } = useHookstate(store.state)
  const { setSelection, fetchList } = store.action

  function getId(row: TData<TAgendaTelefoneFields>): TId<TAgendaTelefoneKeys> {
    return [['id', row.id]]
  }

  useEffect(() => {
    toast.promise(
      fetchList(),
      {
        loading: 'lendo...',
        success: 'sucesso!',
        error: 'Erro ao carregar agenda de telefones!',
      },
      {
        id: 'agenda-telefone-table',
      }
    )
  }, [where, orderBy])

  return (
    <div data-name="AgendaTelefoneTable">
      <Table
        columns={agendaTelefoneColumns}
        getId={getId}
        height={`${pageHeight}px`}
        onOrderBy={(e) => orderBy.set(e)}
        onSelection={setSelection}
        onWhere={(e) => where.set(e)}
        orderBy={orderBy.value as TOrderBy<TAgendaTelefoneFields>}
        rows={list.value as TData<TAgendaTelefoneFields>[]}
        selection={selection.value as TId<TAgendaTelefoneKeys>}
        where={where.value as TWhere<TAgendaTelefoneFields>}
      />
    </div>
  )
}
