import { useQuery } from '@tanstack/react-query'
import { Table } from '../../../../components/table-full/table.jsx'
import { agendaTelefoneColumns } from '../../../../pages/outros/agenda/components/agenda.columns.mjs'

const select = agendaTelefoneColumns.map((col) => col.name)

export function AgendaTelefoneTable({ store }) {
  const where = store.state.use.where()
  const orderBy = store.state.use.orderBy()
  const selection = store.state.use.selection()

  const query = useQuery({
    queryKey: ['agendaTelefone', { where, orderBy }],
    queryFn: () => store.fetchList({ where, orderBy, select }),
  })

  function getId(row) {
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
