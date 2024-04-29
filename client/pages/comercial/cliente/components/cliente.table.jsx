import { useQuery } from '@tanstack/react-query'
import { Table } from '../../../../components/table-full/table.jsx'

import { clienteColumns } from './cliente.columns.mjs'

// cliente 3695

const select = clienteColumns.map((col) => col.name)

export function ClienteTable({ store }) {
  const where = store.state.use.where()
  const orderBy = store.state.use.orderBy()
  const selection = store.state.use.selection()

  const query = useQuery({
    queryKey: ['cliente', { where, orderBy }],
    queryFn: () => store.fetchList({ where, orderBy, select }),
  })

  function getId(row) {
    return [['id', row.id]]
  }

  return (
    <div
      data-name="ClienteTable"
      className="h-full"
    >
      <Table
        columns={clienteColumns}
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
