import { Table } from '@/client/components/table-full/table.js'
import { agendaTelefoneColumns } from '@/client/pages/outros/agenda/components/agenda.columns.js'
import { TAgendaTelefoneStore } from '@/client/pages/outros/agenda/components/agenda.store.js'
import {
  TAgendaTelefoneFields,
  TAgendaTelefoneKeys,
} from '@/core/agenda-telefone_controller.js'
import type { TData, TId, TSelect } from '@/types/index.js'
import { useQuery } from '@tanstack/react-query'

const select = agendaTelefoneColumns.map(
  (col) => col.name
) as TSelect<TAgendaTelefoneFields>

export function AgendaTelefoneTable({
  store,
}: {
  store: TAgendaTelefoneStore
}) {
  const where = store.state((state) => state.where)
  const orderBy = store.state((state) => state.orderBy)
  const selection = store.state((state) => state.selection)

  const query = useQuery({
    queryKey: ['agendaTelefone', { where, orderBy }],
    queryFn: () => store.fetchList({ where, orderBy, select }),
  })

  function getId(row: TData<TAgendaTelefoneFields>): TId<TAgendaTelefoneKeys> {
    return [['id', row.id]]
  }

  return (
    <div className="h-full">
      <Table
        columns={agendaTelefoneColumns}
        getId={getId}
        onOrderBy={store.setOrderBy}
        onSelection={store.setSelection}
        onWhere={store.setWhere}
        orderBy={orderBy}
        rows={query.data || []}
        selection={selection}
        where={where}
      />
    </div>
  )
}
