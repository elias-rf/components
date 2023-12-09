import { Table } from '@/client/components/table/table.js'
import { agendaTelefoneStore } from '@/client/features/outros/agenda-telefone/agenda-telefone_store.js'
import { agendaTelefoneColumns } from '@/client/features/outros/agenda-telefone/components/agenda-telefone_columns.js'
import { usePageSize } from '@/client/store/page-size.js'
import {
  TAgendaTelefoneFields,
  TAgendaTelefoneKeys,
} from '@/controllers/agenda-telefone_controller.js'
import type { TData, TId } from '@/types/index.js'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'

/**
 * Agenda de Ramais
 */
export function AgendaTelefoneTable() {
  const pageHeight = usePageSize((state) => state.height * 0.7)

  const fetchList = agendaTelefoneStore.use.fetchList()
  const list = agendaTelefoneStore.use.list()
  const orderBy = agendaTelefoneStore.use.orderBy()
  const selection = agendaTelefoneStore.use.selection()
  const setOrderBy = agendaTelefoneStore.use.setOrderBy()
  const setSelection = agendaTelefoneStore.use.setSelection()
  const setWhere = agendaTelefoneStore.use.setWhere()
  const where = agendaTelefoneStore.use.where()

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
        onOrderBy={setOrderBy}
        onSelection={setSelection}
        onWhere={setWhere}
        orderBy={orderBy}
        rows={list ?? []}
        selection={selection}
        where={where}
      />
    </div>
  )
}
