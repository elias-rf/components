import { Table } from '@/client/components/table/table.js'
import { TAgendaTelefoneStore } from '@/client/pages/outros/agenda/agenda-telefone_store.js'
import { agendaTelefoneColumns } from '@/client/pages/outros/agenda/components/agenda-telefone_columns.js'
import { TAuthStore } from '@/client/store/auth_store.js'
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
export function AgendaTelefoneTable({
  store,
  auth,
}: {
  store: TAgendaTelefoneStore
  auth: TAuthStore
}) {
  const pageHeight = usePageSize((state) => state.height * 0.7)

  const fetchList = store.use.fetchList()
  const list = store.use.list()
  const orderBy = store.use.orderBy()
  const selection = store.use.selection()
  const setOrderBy = store.use.setOrderBy()
  const setSelection = store.use.setSelection()
  const setWhere = store.use.setWhere()
  const where = store.use.where()

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
