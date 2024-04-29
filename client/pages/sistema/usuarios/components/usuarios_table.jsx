import { useQuery } from '@tanstack/react-query'
import { Table } from '../../../../components/table-full/table.jsx'
import { usuarioColumns } from '../../../../pages/sistema/usuarios/components/usuario_columns.mjs'

const select = usuarioColumns.map((col) => col.name)

export function UsuarioTable({ store }) {
  const where = store.state.use.where()
  const orderBy = store.state.use.orderBy()
  const selection = store.state.use.selection()

  const query = useQuery({
    queryKey: ['usuario', { where, orderBy }],
    queryFn: () => store.fetchList({ where, orderBy, select }),
  })

  function getId(row) {
    return [['id', row.id]]
  }

  return (
    <Table
      columns={usuarioColumns}
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
