import { Table } from '@/client/components/table'
import { agendaTelefoneStore } from '@/client/features/agenda-telefone/agenda-telefone_store'
import { agendaTelefoneColumns } from '@/client/features/agenda-telefone/components/agenda-telefone_columns'
import { usePageSize } from '@/client/store/page-size'
import {
  TAgendaTelefoneFields,
  TAgendaTelefoneKeys,
} from '@/controllers/agenda-telefone.controller'
import type { TData, TId } from '@/types'
import { useEffect } from 'react'
import { useStore } from 'zustand'

/**
 * Agenda de Ramais
 */
export function AgendaTelefoneTable() {
  const pageHeight = usePageSize((state) => state.height * 0.7)

  const list = agendaTelefoneStore.use.list()
  const orderBy = agendaTelefoneStore.use.orderBy()
  const selection = useStore(agendaTelefoneStore, (state) => state.selection)
  const setOrderBy = useStore(agendaTelefoneStore, (state) => state.setOrderBy)
  const setSelection = useStore(
    agendaTelefoneStore,
    (state) => state.setSelection
  )
  const setWhere = useStore(agendaTelefoneStore, (state) => state.setWhere)
  const where = agendaTelefoneStore.use.where()
  const fetchList = agendaTelefoneStore.use.fetchList()

  function getId(row: TData<TAgendaTelefoneFields>): TId<TAgendaTelefoneKeys> {
    return [['id', row.id]]
  }

  useEffect(() => {
    fetchList()
  }, [where, orderBy])

  return (
    <div data-name="AgendaTelefoneTable">
      <Table
        rows={list ?? []}
        columns={agendaTelefoneColumns}
        getId={getId}
        selection={selection}
        where={where}
        orderBy={orderBy}
        onSelection={setSelection}
        onWhere={setWhere}
        onOrderBy={setOrderBy}
        height={`${pageHeight}px`}
      />
    </div>
  )
}
