import { Table } from '@/client/components/table'
import { useAgendaTelefone } from '@/client/features/agenda-telefone/agenda-telefone_store'
import { agendaTelefoneColumns } from '@/client/features/agenda-telefone/components/agenda-telefone_columns'
import { usePageSize } from '@/client/store/page-size'
import {
  TAgendaTelefoneFields,
  TAgendaTelefoneKeys,
} from '@/controllers/agenda-telefone.controller'
import type { TData, TId } from '@/types'

/**
 * Agenda de Ramais
 */
export function AgendaTelefoneTable() {
  const pageHeight = usePageSize((state) => state.height * 0.7)

  const list = useAgendaTelefone.use.list()
  const orderBy = useAgendaTelefone.use.orderBy()
  const selection = useAgendaTelefone.use.selection()
  const setOrderBy = useAgendaTelefone.use.setOrderBy()
  const setSelection = useAgendaTelefone.use.setSelection()
  const setWhere = useAgendaTelefone.use.setWhere()
  const where = useAgendaTelefone.use.where()

  function getId(row: TData<TAgendaTelefoneFields>): TId<TAgendaTelefoneKeys> {
    return [['id', row.id]]
  }

  return (
    <div data-name="AgendaTelefone">
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
