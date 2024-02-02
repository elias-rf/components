import { Table } from '@/client/components/table-full/table.js'
import { TUsuarioStore } from '@/client/pages/sistema/usuarios/components/usuario.store.js'
import { usuarioColumns } from '@/client/pages/sistema/usuarios/components/usuario_columns.js'
import { TUsuarioFields, TUsuarioKeys } from '@/core/usuario_controller.js'
import type { TData, TId, TSelect } from '@/types/index.js'
import { useQuery } from '@tanstack/react-query'

const select = usuarioColumns.map((col) => col.name) as TSelect<TUsuarioFields>

export function UsuarioTable({ store }: { store: TUsuarioStore }) {
  const where = store.state((state) => state.where)
  const orderBy = store.state((state) => state.orderBy)
  const selection = store.state((state) => state.selection)

  const query = useQuery({
    queryKey: ['usuario', { where, orderBy }],
    queryFn: () => store.fetchList({ where, orderBy, select }),
  })

  function getId(row: TData<TUsuarioFields>): TId<TUsuarioKeys> {
    return [['kUsuario', row.kUsuario]]
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
