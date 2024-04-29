import { useQuery } from '@tanstack/react-query'
import { Table } from '../../../../components_/table-full/table.jsx'
import { gruposColumns } from '../../../../pages/sistema/grupos/components/grupos_columns.mjs'

const select = gruposColumns.map((col) => col.name)

export function GruposTable({ store }) {
  const where = store.state.use.where()
  const orderBy = store.state.use.orderBy()
  const selection = store.state.use.selection()

  const query = useQuery({
    queryKey: ['grupo', { where, orderBy }],
    queryFn: () => store.fetchList({ where, orderBy, select }),
  })

  function getId(row) {
    return [['id', row.id]]
  }

  return (
    <Table
      columns={gruposColumns}
      getId={getId}
      onOrderBy={store.setOrderBy}
      onSelection={store.setSelection}
      onWhere={store.setWhere}
      orderBy={orderBy}
      rows={query.data || []}
      selection={selection}
      where={where}
    />
  )
}
